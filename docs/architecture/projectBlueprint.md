# OpenSiliconTest Architecture Blueprint

**Version:** 1.0  
**Status:** Frozen  
**Last Updated:** 2026-06-22

---

# 1. Project Vision

OpenSiliconTest is an open-source browser-based platform for learning and exploring semiconductor testing concepts through interactive simulations, visualizations, labs, quizzes, and engineering tools.

The platform aims to become the most comprehensive open-source educational environment for:

- Semiconductor Testing
- Design For Testability (DFT)
- Scan Design
- ATPG
- Fault Simulation
- MBIST
- LBIST
- Boundary Scan
- IJTAG
- Silicon Diagnosis
- Yield Analysis

The platform must be intuitive, visual, interactive, and browser-first.

---

# 2. Core Principles

The project must always be:

- Open Source
- Browser First
- Modular
- Scalable
- Reusable
- Testable
- Maintainable

The project must avoid:

- Monolithic code
- Circular dependencies
- Duplicated business logic
- Tight coupling between modules

---

# 3. Technology Stack

## Frontend

- React
- TypeScript
- Vite

## Monorepo

- pnpm
- Turborepo

## UI

- Tailwind CSS
- shadcn/ui

## State Management

- Zustand

## Routing

- TanStack Router

## Data Fetching

- TanStack Query

## Forms

- React Hook Form
- Zod

## Documentation Content

- MDX

## Graph Visualization

- React Flow

## Code Editor

- Monaco Editor

## Waveforms

- WaveDrom
- VCD Export

## Testing

- Vitest
- Playwright

## Deployment

- GitHub Pages
- Cloudflare Pages

## CI/CD

- GitHub Actions

---

# 4. Repository Structure

```text
OpenSiliconTest/

apps/
packages/
content/
docs/
scripts/

pnpm-workspace.yaml
package.json
turbo.json
README.md
LICENSE
```

---

# 5. Application Structure

```text
apps/

  web/
```

Only one deployable application exists initially:

- web

All functionality is delivered through the web application.

No backend is required for core functionality.

---

# 6. Package Structure

```text
packages/

  core/

  simulator/

  visualizer/

  learning/

  quiz/

  lab/

  scan/

  atpg/

  mbist/

  lbist/

  boundaryscan/

  ijtag/

  diagnosis/

  coverage/

  gamification/

  search/

  analytics/
```

---

# 7. Dependency Rules

Dependency direction is strictly enforced.

```text
core

↓

simulator

↓

visualizer

↓

learning
quiz
lab

↓

domain modules

↓

web
```

## Forbidden

- Circular dependencies
- Reverse dependencies
- Cross-domain dependencies

### Allowed

```text
scan → simulator
scan → core
```

### Forbidden

```text
core → scan
atpg → ijtag
ijtag → mbist
```

---

# 8. Simulator Principles

Simulator must:

- Run in browser
- Run in Web Workers
- Be React independent
- Be UI independent

Simulator must never import React.

Simulator must never depend on visualizer modules.

---

# 9. Visualizer Principles

Visualizer only renders state.

Visualizer never:

- Simulates logic
- Executes ATPG
- Performs retargeting

Visualizer receives state and renders it.

---

# 10. Learning System

All learning content is MDX.

Content is stored under:

```text
content/
```

No lesson content may be hardcoded inside React components.

Every lesson should support:

- Theory
- Examples
- Quiz
- Lab
- Challenge

---

# 11. Circuit Modeling

Core circuit models belong only in:

```text
packages/core
```

Examples:

- Circuit
- Gate
- Wire
- Node
- Pin

Domain packages must reuse these models.

Domain packages must not redefine them.

---

# 12. Waveform Strategy

Do not build a custom waveform renderer.

Use:

- WaveDrom
- VCD Export

Adapters may be built.

Waveform rendering engines should not be rewritten.

---

# 13. IJTAG Strategy

IJTAG support includes:

- SIB
- TDR
- Instruments
- ICL
- PDL
- Retargeting

Implementation order:

1. Visualization
2. Parser
3. Retargeting

---

# 14. Performance Requirements

Always prioritize:

- Lazy Loading
- Code Splitting
- Web Workers
- Memoization
- Virtualization

Heavy computation must never run directly in React render cycles.

---

# 15. Testing Requirements

Every package should be independently testable.

Use:

- Vitest
- Playwright

Business logic should be tested before UI.

---

# 16. Documentation Requirements

Every milestone must create:

```text
docs/buildLogs/milestoneXXX.md
```

The log must include:

- Goal
- Files Added
- Files Modified
- Dependencies Added
- Deployment Status
- Known Issues

---

# 17. Deployment Rules

Every milestone must:

- Build successfully
- Deploy successfully
- Run successfully on GitHub Pages

No milestone may leave the project in a broken state.

Deployment must remain functional after every merge into `main`.

---

# 18. Naming Conventions

## Folders

Use:

```text
camelCase
```

Examples:

```text
scanVisualizer
faultInjection
waveformViewer
```

## React Components

Use:

```text
PascalCase
```

Examples:

```text
CircuitViewer.tsx
LessonPage.tsx
```

## Hooks

Use:

```text
useSomething
```

Examples:

```text
useCircuit.ts
useSimulator.ts
```

## Utilities

Use:

```text
verbNoun
```

Examples:

```text
calculateCoverage.ts
generatePatterns.ts
```

---

# 19. Milestone Order

## Milestone 000

Repository Bootstrap

## Milestone 001

Learning Platform Shell

## Milestone 002

MDX Lesson System

## Milestone 003

Circuit Core Models

## Milestone 004

Circuit Viewer

## Milestone 005

Logic Simulator

## Milestone 006

Waveforms

## Milestone 007

Fault Injection

## Milestone 008

Scan DFT

## Milestone 009

ATPG

## Milestone 010

IJTAG Network

## Milestone 011

ICL

## Milestone 012

PDL

## Milestone 013

Retargeting

## Milestone 014

MBIST

## Milestone 015

LBIST

## Milestone 016

Diagnosis

## Milestone 017

Coverage Analysis

## Milestone 018

Gamification

---

# 20. Git Workflow

## Main Branches

```text
main
develop
```

## Feature Branches

```text
feature/milestone001
feature/milestone002
feature/scan
feature/ijtag
```

Use squash merges into `develop`.

Merge stable milestones into `main`.

---

# 21. Architecture Freeze Policy

This document is the authoritative source of architecture decisions.

Any architectural change must update this document before code is modified.

All AI-generated code must comply with this blueprint.

When conflicts arise:

1. Architecture Blueprint
2. Build Log
3. Source Code

The Architecture Blueprint takes precedence.
