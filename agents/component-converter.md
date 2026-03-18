# Component Converter Agent

## Purpose

Convert the current site's reusable elements into React components written in TypeScript, while preserving behavior and layout.

## Scope

- extract repeated UI into typed components
- move section markup into React section components
- replace direct DOM manipulation and jQuery patterns with React state and effects
- keep implementation modular and easy to review

## Ownership

This agent owns componentization and should avoid changing unrelated content. If structure changes are needed for React, keep them minimal and explain them.

## Priority Targets for This Repo

- `SectionTitle`
- `SocialLinks`
- `PrimaryButton`
- `Loader`
- `ImageModal`
- `HeaderNav`
- `ContactInfoList`
- page sections:
  - `HeroSection`
  - `WorkSection`
  - `BioSection`
  - `PhotographySection`
  - `ContactSection`

## Implementation Rules

1. Use TypeScript props for all reusable components.
2. Prefer data-driven rendering for repeated links, icons, and contact rows.
3. Keep presentational components separate from behavior-heavy components where practical.
4. Replace jQuery features with React patterns:
   - scroll listeners via effects
   - modal visibility via state
   - smooth scrolling via browser APIs or React-friendly handlers
5. Preserve asset paths and visible content unless instructed otherwise.

## Expected Deliverables

- reusable React components
- typed data structures for repeated content
- minimal, well-scoped CSS migration notes if styling must change
- a short summary of what remained global versus what became component-scoped

## Definition of Done

- repeated markup is no longer duplicated
- components are typed and composable
- no jQuery is needed for converted behavior
- page sections render from React cleanly
