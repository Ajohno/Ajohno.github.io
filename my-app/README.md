# my-app

React portfolio application for this repository.

## Scripts

From the `my-app/` directory:

- `npm start` - Start local development server.
- `npm run build` - Create production build in `build/`.
- `npm test` - Run tests.

## Vercel deployment

- If deploying from repo root, use root `../vercel.json` (it builds this folder and serves `build/`).
- If Vercel project root is set to `my-app`, this folder's `vercel.json` provides SPA rewrites.

## Analytics

The app uses Vercel Web Analytics via `@vercel/analytics` and renders `<Analytics />` in `src/App.js`.
