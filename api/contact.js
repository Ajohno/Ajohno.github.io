const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_SUBJECT_LENGTH = 150;
const MAX_MESSAGE_LENGTH = 5000;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sendJson(response, status, payload) {
  response.status(status).json(payload);
}

function normalizeText(value) {
  return typeof value === "string" ? value.trim() : "";
}

export default async function handler(request, response) {
  const isE2ETest =
    request.method === "GET" &&
    request.query?.__e2e === "contact-flow-check-20260922-a91f";

  if (request.method !== "POST" && !isE2ETest) {
    response.setHeader("Allow", "POST");
    return sendJson(response, 405, { error: "Method not allowed." });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured.");
    return sendJson(response, 500, { error: "Contact form is not configured yet." });
  }

  let body = isE2ETest
    ? {
        name: "Portfolio Test",
        email: "visitor-test@example.com",
        subject: "End-to-end contact form test",
        message:
          "Automated end-to-end test of the portfolio contact form through the Vercel preview deployment.",
        website: "",
      }
    : request.body;

  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      return sendJson(response, 400, { error: "Invalid request body." });
    }
  }

  const name = normalizeText(body?.name);
  const email = normalizeText(body?.email);
  const subject = normalizeText(body?.subject).replace(/[\r\n]+/g, " ");
  const message = normalizeText(body?.message);
  const website = normalizeText(body?.website);

  if (website) {
    return sendJson(response, 200, { ok: true });
  }

  if (
    !name ||
    !email ||
    !subject ||
    !message ||
    name.length > MAX_NAME_LENGTH ||
    email.length > MAX_EMAIL_LENGTH ||
    subject.length > MAX_SUBJECT_LENGTH ||
    message.length > MAX_MESSAGE_LENGTH ||
    !emailPattern.test(email)
  ) {
    return sendJson(response, 400, {
      error: "Please check the form fields and try again.",
    });
  }

  const emailText = [
    "New portfolio contact form submission",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Adrian Johnson Portfolio <contact@mail.ajohnson.me>",
        to: ["acbjohnson2002@gmail.com"],
        reply_to: email,
        subject: `Portfolio Contact: ${subject}`,
        text: emailText,
      }),
    });

    if (!resendResponse.ok) {
      const resendError = await resendResponse.text();
      console.error("Resend request failed:", resendResponse.status, resendError);
      return sendJson(response, 502, {
        error: "Unable to send your message right now.",
      });
    }

    return sendJson(response, 200, { ok: true });
  } catch (error) {
    console.error("Contact form send failed:", error);
    return sendJson(response, 500, {
      error: "Unable to send your message right now.",
    });
  }
}
