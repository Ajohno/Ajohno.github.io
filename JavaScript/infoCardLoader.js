// /js/infoCardLoader.js

function loadInfoCards({ jsonPath, cardTemplateId, cardSectionId }) {
    fetch(jsonPath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load ${jsonPath}`);
        }
        return response.json();
      })
      .then((data) => {
        const cardSection = document.getElementById(cardSectionId);
        const cardTemplate = document.getElementById(cardTemplateId).firstElementChild;
  
        data.forEach((card) => {
          const cardClone = cardTemplate.cloneNode(true);

        // Checks all the cards made if the element it is going to add is on the template or not.
        
        // Heading
        const headingElement = cardClone.querySelector(".Heading");
        if (headingElement) {
          headingElement.textContent = card.heading;
        }

        // Description
        const descriptionElement = cardClone.querySelector(".Description");
        if (descriptionElement) {
          descriptionElement.textContent = card.description;
        }

        // Position
        const positionElement = cardClone.querySelector(".Position");
        if (positionElement) {
          positionElement.textContent = card.position;
        }

        // Image
        const imageElement = cardClone.querySelector(".card-image");
        if (imageElement && card.image) {
          imageElement.style.backgroundImage = `url(${card.image})`;
          imageElement.setAttribute("alt", card["alt-text"] || "Image");
        }

        // Link
    const linkElement = cardClone.querySelector(".Link");
    if (linkElement && card.link) {
    const anchor = document.createElement("a");
    anchor.href = card.link;
    anchor.textContent = card.linkText || "View Project";
    anchor.target = "_blank"; // Open link in a new tab
    anchor.rel = "noopener noreferrer"; // Security best practice
    linkElement.appendChild(anchor);
    }

        // Expand Button
        const expandButton = cardClone.querySelector(".Expand-Button");
        if (expandButton) {
          expandButton.innerHTML = `<button>See More</button>`;
        }
  
          cardSection.appendChild(cardClone);
        });
      })
      .catch((error) => {
        console.error("Error loading info cards:", error);
      });
  }
// Expose function globally so it works with <script src="...">
  window.loadInfoCards = loadInfoCards;

  