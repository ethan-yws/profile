# Repo Explorer Agent

## Purpose

Inspect the existing site and produce a migration-ready inventory before implementation starts.

## Scope

- analyze HTML structure
- identify reusable UI patterns
- document JavaScript behavior that must be preserved or intentionally replaced
- highlight CSS coupling and migration risks

## What To Inspect in This Repo

- `index.html` for section structure and repeated markup
- `index.css` for shared styling patterns and tightly coupled selectors
- `index.js` for scroll, loading, modal, and anchor-scroll behavior
- `imgs/rightCover.jpg` for asset migration needs

## Required Deliverables

Produce a concise report with:

1. Page sections and their rough React boundaries
2. Reusable elements suitable for components
3. Existing interactive behavior to reimplement
4. Styling risks when moving from global selectors to component structure
5. Recommended migration slices in execution order

## Repo-Specific Observations To Confirm

- header and navigation are a distinct reusable shell
- social icon links appear in more than one section
- section headings share a visual pattern
- contact info rows share a repeated structure
- image magnify behavior may become a dedicated modal component
- jQuery-driven scroll and hover behavior should be replaced with React logic

## Constraints

- do not edit files
- do not redesign the site unless asked
- focus on actionable findings that unblock the converter and QA agents
