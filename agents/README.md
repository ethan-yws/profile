# Agent Team for React + TypeScript Uplift

This folder defines a stronger agent operating model for migrating this website from a static HTML/CSS/jQuery site to React with TypeScript.

## Modern Team Model

This team uses a simple modern pattern:

- one coordinator with milestone ownership
- a small number of specialists with explicit file or problem boundaries
- one parity and release gate before completion

The goal is not to maximize agent count. The goal is to minimize overlap, make handoffs explicit, and require verification before shipping.

## Current Repo Snapshot

- Legacy entry files: `index.html`, `index.css`, `index.js`
- Current app shape: Vite + React + TypeScript under `src/`
- Assets: `imgs/rightCover.jpg`
- Legacy behavior to preserve:
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

- `orchestrator.md`: owns plan, sequencing, milestones, and decision log
- `repo-explorer.md`: produces the baseline inventory and migration map
- `component-converter.md`: owns reusable UI extraction and section migration boundaries
- `release-engineer.md`: owns build, config, deployment, and GitHub Pages readiness
- `qa.md`: owns parity, accessibility, responsiveness, and release verification

## Handoff Protocol

Every agent should hand off concrete artifacts, not just a summary.

- Explorer hands off:
  - section inventory
  - component candidates
  - behavior parity list
  - styling and migration risks
- Orchestrator hands off:
  - milestone plan
  - file ownership map
  - accepted deviations
  - next action owner
- Component converter hands off:
  - changed file list
  - reusable component inventory
  - unresolved UI or behavior questions
- Release engineer hands off:
  - build status
  - deployment config status
  - Pages path and asset path status
  - release blockers
- QA hands off:
  - broken behavior
  - visual regressions
  - accessibility issues
  - responsive issues
  - release readiness result

## Suggested Execution Order

1. Run the repo explorer first.
2. Have the orchestrator create milestones and assign file ownership.
3. Let the component converter implement the UI and behavior slices.
4. Have the release engineer wire build and deployment details.
5. Require QA sign-off on both parity and release readiness.

## Expected Target Shape

The team should aim for a structure close to:

```text
src/
  main.tsx
  App.tsx
  components/
  sections/
  hooks/
  data/
```

## Repo-Specific Notes

- Preserve existing content and section anchors unless there is a clear reason to change them.
- Remove jQuery behavior by replacing it with React state, effects, and typed event handlers.
- Reuse the current visual language unless the migration explicitly includes redesign work.
- Prefer extracting repeated patterns such as social links, section headers, and contact rows.
- Treat GitHub Pages compatibility as a first-class release concern, not an afterthought.
