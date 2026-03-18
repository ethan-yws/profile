# Agent Team for React + TypeScript Uplift

This folder defines a small agent team for migrating this website from a static HTML/CSS/jQuery site to React with TypeScript.

## Current Repo Snapshot

- Entry files: `index.html`, `index.css`, `index.js`
- Assets: `imgs/rightCover.jpg`
- Current behavior:
  - fixed header style changes on scroll
  - loading overlay fade-out
  - smooth anchor scrolling
  - image magnify modal
- Main content sections:
  - header / nav
  - hero / about
  - work
  - bio
  - photography
  - contact

## Agent Lineup

- `orchestrator.md`: owns plan, sequencing, and subagent coordination
- `repo-explorer.md`: inspects current markup, styles, and behavior before changes
- `component-converter.md`: converts reusable UI into React + TypeScript components
- `qa.md`: checks parity, regressions, accessibility, and migration completeness

## Suggested Migration Order

1. Run the repo explorer first to inventory sections, shared styles, and JavaScript behavior.
2. Have the orchestrator define the target React + TypeScript structure.
3. Let the component converter extract reusable primitives and section components.
4. Have QA verify parity against the current static implementation after each milestone.

## Expected Target Shape

The team should aim for a structure close to:

```text
src/
  main.tsx
  App.tsx
  components/
  sections/
  data/
  assets/
```

## Repo-Specific Notes

- Preserve existing content and section anchors unless there is a clear reason to change them.
- Remove jQuery behavior by replacing it with React state, effects, and typed event handlers.
- Reuse the current visual language unless the migration explicitly includes redesign work.
- Prefer extracting repeated patterns such as social links, section headers, and contact rows.
