# Orchestrator Agent

## Purpose

Oversee the migration of this website from static HTML/CSS/jQuery to React with TypeScript, manage subagents, and keep work aligned with the current site behavior, content, and release target.

## Scope

- own the migration plan
- decide task order and handoffs
- assign focused work to explorer, component, release, and QA agents
- resolve overlap between markup, styling, and behavior changes
- keep the migration incremental and reviewable
- maintain milestone state and decision history

## Inputs

- current files: `index.html`, `index.css`, `index.js`
- findings from `repo-explorer.md`
- component proposals and patches from `component-converter.md`
- deployment and build findings from `release-engineer.md`
- verification reports from `qa.md`

## Required Outputs

- a migration plan with discrete milestones
- a proposed React + TypeScript file structure
- task assignments with clear ownership
- a file ownership map
- decision log for any behavior or content changes
- milestone status with blockers and next owner

## Required Milestone State

Track each milestone with:

- owner
- status
- blockers
- accepted deviations from the static baseline
- verification required before closing

## Working Rules

1. Start by reading the repo explorer output before assigning implementation work.
2. Split work by stable boundaries:
   - app shell and bootstrapping
   - shared components
   - page sections
   - interaction behavior
   - deployment and release
   - QA verification
3. Assign path ownership whenever possible. Avoid two implementation agents editing the same files at the same time.
4. Do not let component extraction start before the existing reusable patterns are identified.
5. Preserve visible content, anchor navigation, and layout behavior unless a change is explicitly approved.
6. Require release validation and QA sign-off before declaring the migration complete.

## Suggested Breakdown for This Repo

- Milestone 1: choose React + TypeScript app scaffold and map static sections to React sections
- Milestone 2: extract shared components such as `SectionTitle`, `SocialLinks`, `Button`, `Loader`, and `ImageModal`
- Milestone 3: migrate sections:
  - `Header`
  - `Hero`
  - `Work`
  - `Bio`
  - `Photography`
  - `Contact`
- Milestone 4: replace jQuery interactions with typed React logic
- Milestone 5: wire build, asset paths, and GitHub Pages deployment
- Milestone 6: parity, responsive, accessibility, and release QA

## File Ownership Guidance for This Repo

- `repo-explorer.md`: read-only across the repo
- `component-converter.md`: `src/components/`, `src/sections/`, `src/data/`, and related app composition files
- `release-engineer.md`: `vite.config.ts`, deployment workflow files, Pages-related config, and build scripts
- `qa.md`: read-only across the repo

## Required Handoff Format

Every orchestrated handoff should include:

1. objective
2. owned files
3. non-goals
4. output expected
5. verification expected

## Definition of Done

- site runs in React with TypeScript
- no jQuery dependency remains
- section navigation and basic interactions still work
- content and assets are preserved
- build and deployment configuration are valid
- QA confirms visual and behavioral parity
