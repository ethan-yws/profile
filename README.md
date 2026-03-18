# profile

Personal homepage implemented as a React + TypeScript single-page app with Vite.

## Migration Goal

Uplift this site to React with TypeScript while preserving current content, layout intent, anchor navigation, and core interactions.

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

## Agent Team

Agent definitions live in [`agents/`](/Users/yiweishi/Documents/code/profile/agents/README.md):

- [`agents/orchestrator.md`](/Users/yiweishi/Documents/code/profile/agents/orchestrator.md)
- [`agents/repo-explorer.md`](/Users/yiweishi/Documents/code/profile/agents/repo-explorer.md)
- [`agents/component-converter.md`](/Users/yiweishi/Documents/code/profile/agents/component-converter.md)
- [`agents/qa.md`](/Users/yiweishi/Documents/code/profile/agents/qa.md)

## Current Site Notes

- single-page layout with sections for hero/about, work, bio, photography, and contact
- React components with typed shared data and hook-based interaction logic
- repeated patterns suitable for React components, including section titles, social links, buttons, and contact rows
- existing behavior includes a loading overlay, smooth anchor scrolling, and scroll-based header styling

## Suggested Execution Order

1. Run the repo explorer to inventory reusable elements and migration risks.
2. Have the orchestrator define the React + TypeScript migration plan.
3. Use the component converter to extract reusable UI into typed React components.
4. Use QA to verify parity, responsiveness, and removal of legacy jQuery dependence.

## Repo-Specific Cautions

- the original static site relied on table-based structure in several areas, so future layout work should keep checking semantics and responsiveness
- the contact form is presentational only unless backend behavior is added later
