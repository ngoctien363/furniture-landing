# MINH KHOI – CLAUDE CODE IMPLEMENTATION GUIDE

**Version:** 2.1  
**Purpose:** Development instructions for Claude Code  
**Source of truth:** Product Discovery + System Architecture

**Changes in 2.1 (documentation cleanup only, no requirement changes):**
- Part A: project instructions moved to the root `CLAUDE.md` (single copy).
- Part B §10: phase list replaced by a reference to the canonical plan.
- Part C (new): canonical phase plan with scope, deliverables, acceptance criteria and approval gates.
- Part D: repository structure (previously Part C), renamed to match this repository.
- Part E (new): decision log and open questions.
- Removed conversational notes; their technical content moved to Part C (Phase 8) and Part E.

---

## PART A – CLAUDE.md

The project instructions previously embedded here now live in the root
`CLAUDE.md`, unchanged, plus clarified implementation rules (§12–13) that cite
their sources. Keep a single copy there. Do not duplicate it in this file.

---

## PART B – MASTER PROMPT FOR CLAUDE CODE

Use this prompt after the three documentation files and `CLAUDE.md` are in the repository.

```text
You are acting as a Senior Full-Stack Engineer, Software Architect,
and UI/UX Engineer.

Your task is to build the Minh Khoi website with an integrated CMS.

IMPORTANT:
Do not immediately start coding.

==================================================
1. READ PROJECT DOCUMENTATION
==================================================

Read the following files:

- CLAUDE.md
- docs/PRODUCT-DISCOVERY.md
- docs/ARCHITECTURE.md
- docs/CLAUDE-CODE-IMPLEMENTATION.md

These files are the source of truth.

Summarize:
- Business requirements.
- Public website requirements.
- CMS requirements.
- Technical architecture.
- Security requirements.
- Development phases.

Identify any missing or conflicting requirements.

Do not invent business information.

==================================================
2. INSPECT THE EXISTING REPOSITORY
==================================================

Before modifying files:

- Inspect the project structure.
- Inspect package.json.
- Check installed Next.js and TypeScript versions.
- Check Tailwind configuration.
- Check existing UI components.
- Check existing routes and layouts.
- Check existing environment configuration.
- Identify existing implementation that should be preserved.

If the repository is empty, propose the initial setup.

If the repository already contains code, do not overwrite
or recreate it without reviewing the existing implementation.

==================================================
3. VERIFY TECHNICAL COMPATIBILITY
==================================================

The preferred architecture is:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Payload CMS
- PostgreSQL
- Persistent media storage

Before installing packages:

- Verify compatibility between the installed Next.js version
  and the selected Payload CMS version.
- Verify the PostgreSQL adapter.
- Verify required database and image-storage dependencies.
- Follow the official conventions for the selected versions.
- Avoid unnecessary dependencies.

Do not blindly copy outdated installation commands.

Do not introduce NestJS or microservices.

==================================================
4. TARGET APPLICATION
==================================================

Build two experiences in one application.

A. PUBLIC WEBSITE

Routes:
- /
- /about
- /services
- /projects
- /projects/[slug]
- /contact

Homepage sections:
1. Hero
2. Brand Introduction
3. Services
4. Featured Projects
5. Design Philosophy
6. Why Choose Us
7. Consultation CTA
8. Contact / Footer

B. CMS ADMIN

Admin entry:
- /admin

Initial CMS user:
- Owner only.

CMS capabilities:
- Secure login.
- Dashboard.
- Page management.
- Homepage section management.
- Project management.
- Service management.
- Media Library.
- Site Settings.
- Navigation management.
- Draft and Publish.
- Frontend Preview.

Do not implement staff accounts or complex role management
in the first release.

==================================================
5. CMS EDITING EXPERIENCE
==================================================

The owner requires a Flexible editing experience.

Implement both:

A. FORM EDITOR

The owner can:
- Edit headings and descriptions.
- Upload or select images.
- Change CTA labels and destinations.
- Edit supported section fields.
- Show or hide supported sections.
- Reorder supported sections.
- Save drafts.

B. FRONTEND PREVIEW

The owner can:
- Preview the actual page before publishing.
- View draft content.
- Preview using the same frontend components
  used by the public website.
- Return to editing.
- Publish when satisfied.

The preview must be protected.

Do not create a separate visual representation that
does not match the real website.

Do not require the owner to edit raw JSON, HTML, CSS,
or source code.

Do not build an unrestricted drag-and-drop page builder.

==================================================
6. CONTENT MODEL
==================================================

Create structured content models.

Collections:
- Users
- Media
- Projects
- Services
- Pages

Globals:
- Site Settings
- Navigation

Homepage block types:
- Hero
- Brand Introduction
- Services
- Featured Projects
- Design Philosophy
- Why Choose Us
- CTA
- Contact

Each block must have:
- A schema.
- Validation.
- A frontend component.
- Preview support.

Use a controlled block renderer.

Do not execute arbitrary HTML or JavaScript from CMS content.

Generate or maintain appropriate TypeScript types
using the selected Payload version's supported approach.

==================================================
7. MOCK-FIRST IMPLEMENTATION
==================================================

Do not wait for real business assets.

Use:
- Temporary text wordmark.
- Generic interior placeholder images.
- Illustrative sample projects.
- Sample service descriptions.
- Placeholder contact information.

Rules:

- Clearly identify mock data.
- Never present sample projects as actual Minh Khoi projects.
- Never invent a real hotline, Zalo URL, Facebook URL,
  email, or showroom address.
- Do not create fake working links.
- Keep mock content centralized.
- Make all mock content replaceable through CMS.

The UI must remain complete and visually coherent
even before real content is supplied.

==================================================
8. DESIGN SYSTEM
==================================================

Design direction:

- Luxury Contemporary.
- Quiet Luxury.
- Editorial layout.
- Warm neutral colors.
- Elegant typography.
- Large interior imagery.
- Generous whitespace.
- Subtle motion.

Provisional palette:
- Ivory: #F4F0E9
- Sand: #D9CBB8
- Taupe: #A58B72
- Walnut: #51483F
- Charcoal: #252421

Typography:
- Cormorant Garamond for headings.
- Inter or Manrope for body.

Treat the palette as provisional until the official logo
and brand guidelines are supplied.

Prioritize:
- Responsive behavior.
- Accessibility.
- Readability.
- Consistent spacing.
- Premium visual hierarchy.
- Fast loading.

==================================================
9. SECURITY AND DATA MANAGEMENT
==================================================

Implement:

- Protected CMS routes.
- No public owner registration.
- Server-side authorization.
- Protected draft preview.
- Input validation.
- Upload validation.
- Secure environment variables.
- Persistent production media storage.
- Correct published/draft separation.

Do not expose privileged credentials to the browser.

Configure cache invalidation or revalidation
after content publication.

Do not use an ephemeral deployment filesystem
as permanent production media storage.

==================================================
10. IMPLEMENTATION WORKFLOW
==================================================

Work in phases.

Follow the canonical phase plan in Part C of
docs/CLAUDE-CODE-IMPLEMENTATION.md (Phase 0 to Phase 9).
Each phase lists its scope, deliverables, acceptance criteria
and approval gate.

STOP and wait for approval at the end of every phase.

Do not deploy or modify production infrastructure
without explicit approval.

==================================================
11. RESPONSE FORMAT AFTER EACH PHASE
==================================================

At the end of each phase, report:

1. What was implemented.
2. Files created.
3. Files modified.
4. Dependencies added or changed.
5. Database changes.
6. Security considerations.
7. Tests and checks executed.
8. Known limitations.
9. Recommended next phase.

Do not continue automatically to the next phase.

Wait for my approval.

==================================================
12. FINAL QUALITY PRINCIPLES
==================================================

- Maintainable code over unnecessary abstraction.
- Real CMS functionality over static mock admin screens.
- Actual frontend preview over a fake preview.
- Secure server-side authorization.
- Reusable components.
- Structured content.
- No invented business facts.
- No unnecessary backend services.
- No premature overengineering.

Start with PHASE 0 only.
Do not implement the next phase until I approve.
```

---

## PART C – Canonical Phase Plan

> **Priority change approved 2026-11-01 (D11): complete the UI before the CMS backend.**
> Current execution order, superseding the sequence below until it is reconciled:
>
> 1. **UI Phase 1 – Design System & UI Foundation:** tokens, typography, global styles, header and responsive navigation, footer, reusable UI components, layout system.
> 2. **UI Phase 2 – Complete Public Website UI:** Home (all eight approved sections), About, Services, Projects listing, Project detail, Contact — centralized mock data, CMS-compatible section components.
> 3. **UI Phase 3 – CMS Admin UI Prototype:** dashboard, homepage section editor, page/project/service management, media library, site settings, form editor, frontend preview — mock data only, clearly labelled as a prototype, no fake persistence or authentication.
> 4. Then the CMS backend phases below (Payload, PostgreSQL, content model, publishing), which must not start until all UI phases are approved.
>
> Each UI phase ends with lint, type check, production build, route/responsive/interaction tests, a report and an approval gate.

This is the only valid phase numbering. It merges, without adding scope, the
delivery phases in PRODUCT-DISCOVERY v2.0 §12 and the workflow in
Implementation Guide v2.0 Part B §10.

**Applies to every phase:**
- Run lint, type checking and the production build. Report failures honestly; never skip a failed check silently.
- Report using Part B §11 (implemented work, files created/modified, dependencies, database changes, security, checks, limitations, next phase).
- **Approval gate:** stop at the end of the phase and wait for explicit approval.

### Phase 0 – Repository Audit & Technical Spike
- **Scope:** Inspect the repository, read the documentation, clean up and standardize the docs, verify package compatibility with an isolated proof of concept.
- **Deliverables:** Updated `CLAUDE.md` and docs; spike on a separate branch; technical validation report.
- **Acceptance criteria:** The report covers versions, setup, PostgreSQL, authentication, draft/publish, preview/draftMode, Cache Components, security, limitations and the recommended production architecture. The main application is unchanged.
- **Gate:** Approval of the report and the production architecture.

### Phase 1 – Project Foundation
- **Scope:** Project structure ready for Payload (route groups), naming alignment (CLAUDE.md §13.2), Vietnamese locale, design tokens, global styles, fonts, shared layout shell, `.env.example`.
- **Deliverables:** Restructured `src/app`, aligned configuration, updated docs.
- **Acceptance criteria:** Existing routes render; no CMS code yet; all checks pass.
- **Gate:** Approval of the foundation.

### Phase 2 – Design System & Layout
- **Scope:** Reusable UI components (layout, headings, buttons, contact actions, image frame, motion, mock-content badge), responsive navigation, footer, demo-content notice, Vietnamese mock copy.
- **Deliverables:** `src/components/ui`, `layout`, `navigation`.
- **Acceptance criteria:** Keyboard-accessible navigation and mobile menu; contact actions render no link when a value is missing; layouts verified at mobile, tablet and desktop widths; checks pass.
- **Gate:** Approval of the visual system.

### Phase 3 – CMS Foundation & Authentication
- **Scope:** Integrate Payload CMS, PostgreSQL (Docker Compose locally), admin at `/admin`, Users collection with Owner authentication, secure Owner seed (CLAUDE.md §13.1), disabled public registration, environment variables.
- **Deliverables:** Payload configuration, Users collection, seed script, `docker-compose.yml`, `.env.example`.
- **Acceptance criteria:** Owner can sign in and out; unauthenticated `/admin` redirects to login; first-user registration and public user creation are rejected after seeding; database connection verified.
- **Gate:** Approval of the CMS foundation.

### Phase 4 – Content Model & Media
- **Scope:** Media, Projects, Services and Pages collections; Site Settings and Navigation globals; upload validation (type, size); access control; drafts and versions; seeding of mock content from `src/data` with mock flags.
- **Deliverables:** Collections, globals, generated types, seed data.
- **Acceptance criteria:** Owner can create, edit and delete projects and services, upload and reuse media with alt text; anonymous API access returns published content only; seeded mock content is flagged.
- **Gate:** Approval of the content model.

### Phase 5 – Homepage Blocks & Preview
- **Scope:** Schemas and validation for the eight homepage blocks, including the visibility field (CLAUDE.md §13.3); controlled block renderer; homepage section components; form editor; preview using the real frontend components; show/hide and reorder.
- **Deliverables:** `src/blocks`, renderer, preview route.
- **Acceptance criteria:** Owner edits a block, saves a draft and previews it; the change is visible only in preview; hidden blocks are not rendered; order is respected.
- **Gate:** Approval of homepage editing and preview.

### Phase 6 – Public Pages
- **Scope:** Home, About, Services, Projects listing (editorial), Project detail and Contact pages, including contact channels and the demo consultation form (no external submission); all pages read published CMS content; loading, empty and error states.
- **Deliverables:** Public routes and page components.
- **Acceptance criteria:** All routes are responsive; unknown project slugs return 404; the demo form validates and gives demo feedback without claiming delivery; no fake contact links.
- **Gate:** Approval of the public website.

### Phase 7 – Publishing & Caching
- **Scope:** End-to-end draft, publish and unpublish workflow; preview access control; cache tagging and revalidation on publish, unpublish and delete; draft privacy verification.
- **Deliverables:** Revalidation hooks, preview access checks, test notes.
- **Acceptance criteria:** Publishing updates the public site without a redeploy; unpublishing removes content; draft content never appears through public pages, REST, GraphQL or caches.
- **Gate:** Approval of the publishing workflow.

### Phase 8 – Quality Assurance, SEO, Accessibility & Performance
- **Scope:** The full test list (authentication, authorization, media upload and reuse, page editing, project and service management, draft and preview, publish and unpublish, responsive layouts); SEO metadata, sitemap, robots and structured data; accessibility review; image and performance optimization.
- **Deliverables:** Test report and fixes.
- **Acceptance criteria:** PRODUCT-DISCOVERY §11 criteria 1–15 verified. The CMS is real (database and media storage, not a mock admin), confirmed by an owner walkthrough: sign in, upload an image, edit content, preview, publish, then open the site as a guest and confirm the change. All checks pass.
- **Gate:** Approval for deployment preparation.

### Phase 9 – Deployment Preparation
- **Scope:** Environment documentation, database deployment instructions, persistent media storage configuration, initial Owner setup procedure, deployment instructions, backup and recovery recommendations.
- **Deliverables:** Deployment documentation.
- **Acceptance criteria:** Documentation complete and reviewed. No deployment or production infrastructure change without explicit approval.
- **Gate:** Explicit approval before any deployment.

### Mapping from superseded phase lists

| Canonical | PRODUCT-DISCOVERY v2.0 §12 | Implementation v2.0 Part B §10 |
|---|---|---|
| 0 Audit & Spike | – | 0 Repository Audit and Plan |
| 1 Project Foundation | 1 Project Setup & Architecture | 1 Project Foundation (structure, tokens, styles, layouts) |
| 2 Design System & Layout | 2 Design System | 1 Project Foundation (UI components, navigation, footer) |
| 3 CMS Foundation & Auth | 3 CMS Foundation & Authentication | 2 CMS Foundation |
| 4 Content Model & Media | 4 CMS Collections & Media Library | 3 Content Model and Media |
| 5 Homepage Blocks & Preview | 5 Homepage Sections & Preview | 4 Homepage CMS and Preview |
| 6 Public Pages | 6 Portfolio & Project Details; 7 Services & Contact | 5 Public Website |
| 7 Publishing & Caching | 8 Draft / Publish Workflow | 6 Publishing and Integration |
| 8 QA, SEO, A11y & Performance | 9 SEO, Accessibility & Performance; 10 Testing | 7 Quality Assurance |
| 9 Deployment Preparation | 10 Deployment (preparation only) | 8 Deployment Preparation |

---

## PART D – Repository Structure

Directional structure. Adjust it to the installed Payload version's official
conventions.

```text
furniture-landing/
├── CLAUDE.md
├── AGENTS.md
│
├── docs/
│   ├── PRODUCT-DISCOVERY.md
│   ├── ARCHITECTURE.md
│   └── CLAUDE-CODE-IMPLEMENTATION.md
│
├── public/
│   └── images/
│       └── placeholders/
│
├── src/
│   ├── app/
│   ├── components/
│   ├── blocks/
│   ├── collections/
│   ├── globals/
│   ├── lib/
│   └── data/
│
├── .env.example
├── package.json
└── ...
```

---

## PART E – Decision Log & Open Questions

| # | Topic | Status | Decision / proposal | Source |
|---|---|---|---|---|
| D1 | Website language | Confirmed | Vietnamese initially | PRODUCT-DISCOVERY §2 |
| D2 | Multilingual mechanism | Proposed | Do not enable Payload localization in the first release; keep UI strings isolated. Enabling it later requires a data migration | PRODUCT-DISCOVERY §2, §10 |
| D3 | Production media storage | Proposed | S3-compatible storage (Cloudflare R2) or Vercel Blob; local storage in development only | ARCHITECTURE §9 |
| D4 | Production PostgreSQL | Proposed | Managed PostgreSQL with connection pooling (Neon or Supabase) | ARCHITECTURE §2 |
| D5 | Consultation form data | Proposed | Demo only in the first release; a future `Inquiries` collection or email delivery | PRODUCT-DISCOVERY §5.4 |
| D6 | Project `area` field type | Proposed | Number in m² instead of text, for consistent display and sorting | ARCHITECTURE §4.3 |
| D7 | Project categories | Open | Final list needed ("Apartment, House, Villa, etc.") | PRODUCT-DISCOVERY §5.3 |
| D8 | Preview type | Pending spike | Draft preview via Next.js draftMode, plus Payload Live Preview | PRODUCT-DISCOVERY §6.2 |
| D9 | Editable fields for About, Services, Projects, Contact pages | Open | Proposed: hero, introduction, SEO; lists come from collections | PRODUCT-DISCOVERY §6.4 |
| D10 | Phase plan | Applied | Canonical plan in Part C | This document |
| D11 | Implementation priority | Confirmed (2026-11-01) | Complete all UI (public site + CMS admin prototype) with mock data before integrating Payload CMS and PostgreSQL | Owner instruction |

**Business information still required** (must not be invented): official
logo; confirmed brand palette; legal company name; hotline; Zalo; Facebook
and Messenger URLs; showroom address and hours; business email; company
introduction; official service descriptions and primary service; real
project content; domain; privacy policy and form data handling.
