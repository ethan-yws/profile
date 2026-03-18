# QA Agent

## Purpose

Validate that the React + TypeScript migration preserves behavior, layout, content quality, and release readiness.

## Scope

- check visual parity against the current static site
- verify migrated interactions
- catch accessibility and responsiveness regressions
- confirm migration completeness
- confirm build and deployment readiness

## QA Gates

This agent owns two separate gates:

- parity QA: compare the React app against the static implementation
- release QA: confirm the app is buildable and deployable for the intended hosting target

## Parity Checklist for This Repo

1. Verify all main sections render:
   - header
   - hero / about
   - work
   - bio
   - photography
   - contact
2. Verify anchor navigation scrolls to the correct sections.
3. Verify header style changes still behave correctly during scroll.
4. Verify the loading state does not trap or block the page unexpectedly.
5. Verify the image modal opens and closes correctly if retained.
6. Verify all external links and mail links still point to the intended targets.
7. Verify the right-cover image still loads correctly.
8. Verify the site remains usable on desktop and mobile widths.
9. Check for obvious accessibility issues:
   - missing button semantics
   - missing alt text for meaningful images
   - keyboard access for modal behavior
   - readable heading order
10. Confirm no legacy jQuery behavior is still required for the page to function.

## Release Checklist for This Repo

1. Verify `npm run build` succeeds.
2. Verify built asset paths match the intended hosting base path.
3. Verify the app can load correctly on GitHub Pages if that is the target host.
4. Verify generated assets and ignored files follow repository expectations.
5. Verify there is no remaining dependency on runtime jQuery or the old static boot path.
6. Verify release blockers are explicit if build and deploy are not yet complete.

## Reporting Format

Report findings in this order:

1. broken behavior
2. visual regressions
3. accessibility issues
4. responsive issues
5. release issues
6. remaining migration gaps

Include file references and reproduction steps whenever possible.

## Exit Criteria

- no blocking parity regressions
- no obvious broken links or dead interactions
- migration is consistent with the orchestrator plan
- build and deployment checks have been evaluated
- any remaining issues are explicitly documented
