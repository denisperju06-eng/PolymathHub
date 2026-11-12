# Design QA — PolymathHub experimental learning workspace

final result: passed

## Targets and evidence

User references: theory (image 1), SQL practice (image 2), French practice (image 3), warm Learning Journal home (image 4). Homepage verified at 1018 × 1024; course screens at 1376 × 768, matching source pixel sizes. Browser screenshots are 1× CSS pixels. Responsive checks at 390 × 844. Source and implementation were reviewed side by side at matching dimensions; focused checks covered table headers, editor controls, answer inputs and feedback. Actual screenshots are delivered separately with the redesign.

## Findings resolved

- P1: sidebar layering could conceal course navigation. Fixed the rail stacking order and waited for restored account state before capture.
- P2: complete SQL tables pushed execution controls below the desktop viewport. Added an explicit two-row preview with total row count and reversible expand/collapse; execution still uses all data. Execute and the result region now appear within the 768px viewport.
- P2: redundant stage tabs displaced French practice controls. Desktop uses the existing rail; mobile retains stage tabs and an accessible outline dialog.
- P2: SQL theory continuation was below the initial desktop viewport. Reduced desktop reader padding and excess vertical gaps while retaining readable body text.
- P2: draft language answers could inherit stale feedback after navigating away. Feedback is restored only for the submitted answer values.

- P3: course completion labels refreshed only on navigation. The rail and lesson count now refresh immediately after a successful attempt; verified live in the local browser.

## Fidelity surfaces

- Typography: warm Georgia serif homepage headings and wordmark; system sans for study, monospaced SQL. Hierarchy, wrapping and focus states checked. Secondary copy is darker than the mock for legibility. The exact unidentified reference font is not claimed.
- Spacing/layout: two domain entries on home; narrow course rail; theory reader; vertical task/editor/results; French conversation and completion sheet. No horizontal page overflow at 390px. Long tables/code scroll inside their regions. Feedback expands naturally below the fold.
- Colors: cream paper, muted green, teal study controls, clay home actions. Success/error feedback uses text as well as color. Reduced motion respected.
- Assets: local Phosphor SVG library icons with MIT attribution; no fabricated avatar or illustrative raster placeholders. Reference avatar replaced with the real account control; existing wordmark retained.
- Content: real SQL shop datasets and the existing six lessons replace fictional student/course data. French contains one complete demonstration lesson, not an invented full catalog. Progress and XP reflect actual attempts; no mock numbers or concept selector appears in the product.

## Functional verification

52 automated checks pass (37 Node, 15 Python). Browser checks include SQL JOIN execution, hints, table expansion/collapse, theory/practice links, language translation, wrong and corrected answers, mistakes review, one-time XP and cloud persistence after reload. Mobile outline closes with Escape and restores focus to its trigger. Help dialog closes with Escape. No browser console errors during local verification. Speech synthesis button invoked; audible voice output is device-dependent and was not acoustically verified.

## Accepted differences and limits

Home content is limited to implemented experimental SQL and French. Shared navigation and real account controls replace the three unrelated mock logos/avatars. Theory uses actual relational tables instead of the inaccurate Venn-style graphic. Full tables can be expanded; results and detailed feedback may require vertical scrolling after interaction, especially on phones. No unresolved P0/P1/P2 findings remain.
