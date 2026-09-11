# Agent Operating Guidelines — Noura Project

This document governs agent behavior in this repository. All agents interacting with this codebase must follow these operational rules, communication modes, and skill workflows.

---

## 1. Communication & Output Modes

### Caveman Mode (`caveman`)
Adopt terse, smart caveman style for explanations and commentary.
- **Rule**: Drop filler (*just*, *really*, *actually*, *simply*), pleasantries (*sure*, *happy to help*), articles (*a*, *an*, *the*), and hedging. Keep all technical terms, code blocks, API names, and command lines exact and untouched.
- **Format**: `[thing] [action] [reason]. [next step].`
- **Auto-Clarity**: Revert to standard complete sentences only for security warnings, destructive/irreversible operation confirmations, and ambiguous architectural tradeoffs.

### Caveman Review (`caveman-review`)
When reviewing pull requests, diffs, or code changes, use ultra-compressed one-line feedback:
- **Format**: `L<line>: <problem>. <fix>.` (or `<file>:L<line>: ...`)
- **Severity prefixes**:
  - `?? bug:` Broken behavior or runtime error
  - `?? risk:` Fragile logic, missing guard, race condition
  - `?? nit:` Style, formatting, naming
  - `? q:` Genuine technical question

---

## 2. Mandatory Workflow: GitHub Agent Skills

Every non-trivial task performed in this project MUST execute through the corresponding engineering skills installed in `.agents/skills/`:

```
DEFINE --? PLAN --? BUILD --? VERIFY --? REVIEW --? SHIP
```

### Phase 1: Define & Clarify
- **`interview-me`**: When a request is underspecified, interview user one question at a time before planning or coding.
- **`idea-refine`**: Stress-test assumptions and explore alternatives for new features.
- **`spec-driven-development`**: Draft requirements and testable acceptance criteria before writing code.
- **`constraint-driven-development`**: Enforce established project quality standards without lowering the bar.

### Phase 2: Plan & Decompose
- **`planning-and-task-breakdown`**: Break features into thin, sequentially verifiable tasks before touching files.

### Phase 3: Build & Implement
- **`context-engineering`**: Load only relevant file subsets and definitions to keep context clean.
- **`source-driven-development`**: Verify framework patterns against official Astro 5, React 19, and Tailwind documentation.
- **`incremental-implementation`**: Ship work in isolated, verifiable slices. Never write massive multi-file diffs at once.
- **`frontend-ui-engineering`**: Build responsive, WCAG-accessible UI components using Radix-free ShadCN primitives and Tailwind.
- **`test-driven-development`**: Use red-green-refactor loop when adding or modifying business logic.
- **`doubt-driven-development`**: Challenge assumptions adversarially before finalizing structural decisions.

### Phase 4: Verify & Quality Gates
- **`debugging-and-error-recovery`**: Trace root causes systematically with evidence rather than speculative edits.
- **`browser-testing-with-devtools`**: Verify rendering, layout, and console health in runtime browser sessions.
- **Anti-Slop Linter (`npm run lint:oxlint`)**: Run Oxlint with vendored anti-slop rules on every change. Code must pass with 0 errors.
- **Production Build (`npm run build`)**: Verify all 15 Astro static routes generate cleanly.

### Phase 5: Code Review & Quality
- **`code-review-and-quality`**: Audit diffs against repo standards and original spec.
- **`code-simplification`**: Eliminate dead branches, redundant abstractions, and unnecessary complexity.
- **`security-and-hardening`**: Check input validation, CSRF/XSS vectors, and external data handling.
- **`performance-optimization`**: Ensure sub-50ms interaction latencies, clean chunk splitting, and zero layout shift.

### Phase 6: Ship & Version
- **`git-workflow-and-versioning`**: Create atomic, conventional commits (`feat:`, `fix:`, `refactor:`, `chore:`).
- **`documentation-and-adrs`**: Document non-obvious architecture choices and public component APIs.
- **`shipping-and-launch`**: Run pre-flight checklist before tagging or merging to main.

---

## 3. Codebase Invariants

- **Strict Zero Webflow Runtime**: No `webflow.js`, no jQuery, no Webflow CSS classes (`w-*`), no `data-wf-*` markup.
- **Strict Zero Radix UI**: All UI primitives in `src/components/ui/` must remain pure React / Tailwind / Lucide without `@radix-ui/*` dependencies.
- **Strict Zero `useEffect`**: Component interactivity must be purely event-driven, derived in render, or handled by CSS transitions.
- **Anti-Slop Compliance**: No chained type assertions (`as unknown as T`), no unnecessary accumulator cloning in reducers, no known-value widening, readable spacing enforced.

---

## 4. Code Intelligence Tools

Before reading entire files into context, query structural intelligence tools:
- **`lexa`**: `lexa outline <file>`, `lexa symbol-search <name>`, `lexa status`
- **`codedb`**: `codedb outline <file>`, `codedb symbol <name>`, `codedb status`
