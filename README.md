# Ajohno.github.io

This repository now hosts a React app in `my-app/`.

## Local development

```bash
cd my-app
npm install
npm start
```

## Deploy to Vercel

1. Import this repository in Vercel.
2. Set the **Root Directory** to `my-app`.
3. Keep the default build settings for Create React App:
   - Build command: `npm run build`
   - Output directory: `build`
4. Deploy.

Client-side routes are handled by `my-app/vercel.json`, which rewrites all paths to `index.html`.
