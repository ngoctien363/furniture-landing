# SIÊU THỊ NỘI THẤT – PROJECT INSTRUCTIONS

## 1. Project Overview

Siêu Thị Nội Thất is a residential interior design and construction website
with an integrated owner-only CMS.

The application includes:
- Public website.
- CMS admin dashboard.
- Form-based content editing.
- Frontend preview.
- Draft and publish workflow.
- Project and service management.
- Media Library.
- Site settings.

## 2. Source of Truth

Read these documents before implementation:

- docs/PRODUCT-DISCOVERY.md
- docs/ARCHITECTURE.md
- docs/CLAUDE-CODE-IMPLEMENTATION.md

If implementation decisions conflict with product requirements,
stop and explain the conflict before proceeding.

## 3. Technical Direction

Preferred stack:
- Next.js App Router
- TypeScript
- Tailwind CSS
- Payload CMS
- PostgreSQL
- Lucide React
- Motion
- Persistent media storage

Use a modular monolith.

Do not introduce NestJS, microservices, or unnecessary
infrastructure in the first release.

Check actual installed package versions and compatibility
before changing dependencies.

## 4. CMS Requirements

The CMS is for one user type in the first release:

Owner / Administrator.

The owner must be able to:
- Sign in securely.
- Edit page content.
- Edit homepage sections.
- Upload and reuse images.
- Manage projects.
- Manage services.
- Update site settings.
- Preview draft changes.
- Publish and unpublish content.

Editing experience:
- Form Editor.
- Frontend Preview.

Do not require the owner to edit JSON, HTML, CSS, or source code.

Do not implement staff roles or complex permission management
unless explicitly requested.

## 5. Content Architecture

Use structured content:
- Collections
- Globals
- Blocks

Initial collections:
- Users
- Media
- Projects
- Services
- Pages

Initial globals:
- Site Settings
- Navigation

Supported homepage blocks:
- Hero
- Brand Introduction
- Services
- Featured Projects
- Design Philosophy
- Why Choose Us
- CTA
- Contact

Each block must have:
- A defined schema.
- Appropriate validation.
- A frontend component.
- Preview support.

Do not allow arbitrary HTML or JavaScript execution.

## 6. Draft and Publishing

- Draft content must not be visible to public visitors.
- Preview must render using actual frontend components.
- Only authorized Owner sessions can access draft preview.
- Publishing must update the public website.
- Implement cache invalidation or revalidation after publishing.

Use supported Payload features for versions, drafts, and preview.

## 7. Mock Data Policy

Use mock content until real business assets are supplied.

Rules:
- Clearly identify mock content.
- Never present illustrative projects as actual Siêu Thị Nội Thất projects.
- Never invent real contact details.
- Keep mock content centralized and replaceable.
- Do not create fake working contact links.

## 8. Design Principles

Visual direction:
- Luxury Contemporary.
- Quiet Luxury.
- Editorial portfolio.
- Warm neutral palette.
- Elegant typography.
- Large interior photography.
- Generous whitespace.
- Subtle animations.

Preserve the official logo when provided.

Do not sacrifice usability for visual effects.

## 9. Security

- Protect all admin routes.
- Disable public registration.
- Enforce authorization server-side.
- Validate content and uploads.
- Protect draft preview.
- Never expose secrets in client-side code.
- Use environment variables for credentials.
- Do not commit real environment files.

## 10. Development Rules

1. Inspect the repository before changing it.
2. Read documentation before implementation.
3. Do not overwrite existing configuration without review.
4. Avoid unnecessary dependencies.
5. Use reusable TypeScript components.
6. Keep content separate from presentation.
7. Follow framework and Payload conventions.
8. Implement incrementally.
9. Run lint, type checking, and build checks.
10. Report changed files and test results.
11. Do not silently skip failed checks.
12. Stop for approval between major phases.

## 11. Definition of Done

A feature is complete only when:
- Its requirements are implemented.
- Validation works.
- Responsive behavior is checked where relevant.
- Security implications are reviewed.
- No unintended mock data is presented as real.
- Relevant tests or checks pass.
- Documentation is updated.

## 12. Phase Plan and Approval Gates

The only valid phase numbering is the canonical plan in
`docs/CLAUDE-CODE-IMPLEMENTATION.md` → Part C. Older phase lists
(Product Discovery v2.0 §12, Implementation Guide v2.0 Part B §10, the
original Mock-First brief) are superseded; Part C maps them.

Every phase ends with the report format in Part B §11 and a stop for approval.

## 13. Clarified Implementation Rules

These rules clarify how approved requirements are implemented. They add no
new business scope. Each cites its source; the decision log is in
`docs/CLAUDE-CODE-IMPLEMENTATION.md` → Part E.

### 13.1 Secure initial Owner setup
Source: PRODUCT-DISCOVERY §7.4 ("Do not create a public owner-registration
flow", "Provide a secure initial owner-account setup process");
ARCHITECTURE §4.1, §10.

- Payload offers a first-user registration screen while the users table is
  empty. Do not rely on it outside local development.
- Create the Owner with a server-side seed script that reads credentials from
  environment variables.
- Never expose a deployment whose database has no Owner account.
- Verify that first-user registration and public user creation are rejected
  once the Owner exists.

### 13.2 Naming conventions
Source: ARCHITECTURE §11 (`NEXT_PUBLIC_SERVER_URL`);
CLAUDE-CODE-IMPLEMENTATION Part D (`public/images/placeholders/`).

- Public base URL variable: `NEXT_PUBLIC_SERVER_URL`.
- Placeholder imagery folder: `public/images/placeholders/`.
- Existing code using `NEXT_PUBLIC_SITE_URL` and `public/images/mock/` is
  aligned during Phase 1.

### 13.3 Homepage section visibility and order
Source: PRODUCT-DISCOVERY §6.2, §6.3 ("Show or hide a section",
"Reorder supported sections"); ARCHITECTURE §5 (block field table has no
visibility field).

- Every homepage block includes a boolean visibility field, visible by default.
- The block renderer skips hidden blocks.
- Section order is the order of the blocks array edited in the CMS.

### 13.4 Mock data within the CMS workflow
Source: PRODUCT-DISCOVERY §8 and Implementation Part B §7 (mock content must
be replaceable through CMS; UI must stay complete before real content);
Implementation Part B §10 (public pages connect to published CMS content).

- Mock content in `src/data/` is the seed source for the CMS.
- After the CMS phase, public pages read content only from Payload; mock
  records stay flagged (`isMock`) and are replaced through the CMS.

### 13.5 Language
Source: PRODUCT-DISCOVERY §2 ("Vietnamese initially; architecture should allow
future multilingual support"), §10 (multilingual editing out of scope).

- All public website content is written in Vietnamese.
- Keep UI strings out of component logic so a second language can be added
  later. The multilingual mechanism is an open decision (Part E).

### 13.6 Framework version
Source: `AGENTS.md`.

- This repository uses Next.js 16. Read the relevant guide in
  `node_modules/next/dist/docs/` before writing framework code.
- Follow the official Payload documentation for the installed Payload version.
