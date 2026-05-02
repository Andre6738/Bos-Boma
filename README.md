# BosBoma

Marketing site for BosBoma, a private bushveld wedding venue just north of Pretoria.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide icons
- Firebase Hosting (deploy via GitHub Actions)

## Develop

```
npm install
npm run dev
```

## Build

```
npm run build
```

Output goes to `dist/client`.

## Deploy

Pushes to `main` deploy automatically through `.github/workflows/firebase-hosting.yml`
using the `FIREBASE_SERVICE_ACCOUNT` repository secret.
