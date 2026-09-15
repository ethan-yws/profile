# profile

Personal homepage implemented as a React + TypeScript single-page app with Vite.

## Run

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

The app mounts from `src/main.tsx` through Vite.

## GitHub Pages Deployment

This repo is configured for GitHub Pages project-site hosting at `/profile/`.

- Vite base path is set for the repository path.

In GitHub repository settings, Pages should use `GitHub Actions` as the source.

## Azure Static Web Apps Deployment

Azure site: https://salmon-cliff-058949100.5.azurestaticapps.net/

- Subscription: `Visual Studio Enterprise Subscription`
- Resource group: `ethan-profile-rg`
- Static Web App: `ethan-profile`
- Plan: `Free`; resource region: `East Asia`

Azure serves the site at `/`. Use `npm run build:azure` to build with that base
path. The default `npm run build` continues to target GitHub Pages at `/profile/`.

Pushes to `master` deploy to Azure through `.github/workflows/deploy-azure.yml`.
The workflow tests and builds the app before uploading it. GitHub Pages also
continues to deploy through its existing workflow.

To manually trigger an Azure redeployment:

```bash
gh workflow run deploy-azure.yml --ref master
```

The Azure deployment token is stored in the GitHub Actions repository secret
`AZURE_STATIC_WEB_APPS_API_TOKEN`. If the token is rotated in Azure, update that
secret before the next deployment. Do not print or commit deployment tokens.
