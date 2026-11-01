# MINH KHOI – PRODUCT DISCOVERY

**Version:** 2.0 (§12 updated 2026-11-01: phases moved to the canonical plan)  
**Status:** Approved Product Direction  
**Product:** Residential Interior Design & Construction Website with CMS

---

## 1. Product Overview

Minh Khoi is a residential interior design and construction studio website. The platform consists of:

1. **Public Website:** Introduces the brand, showcases services and projects, and generates customer inquiries.
2. **CMS Admin:** Allows the business owner to manage website content, images, projects, services, and contact information without modifying source code.

The website should communicate a professional, sophisticated, and premium visual identity while remaining accessible to customers across different budget levels.

## 2. Business Profile

| Attribute | Requirement |
|---|---|
| Brand name | Minh Khoi |
| Business model | Interior Design & Construction Studio |
| Target market | Residential |
| Positioning | Mixed budget segments, premium presentation |
| Primary conversion | Hotline |
| Supporting channels | Zalo, showroom appointment, Facebook/Messenger |
| Website language | Vietnamese initially; architecture should allow future multilingual support |
| CMS user | Owner only |
| Editing experience | Form Editor + Preview |

## 3. Services

The website must support the following services:

1. Tư vấn thiết kế nội thất.
2. Thiết kế và thi công nội thất trọn gói.
3. Sản xuất và cung cấp đồ nội thất.
4. Thi công nội thất theo bản thiết kế có sẵn.

Services must be managed through CMS. The owner should be able to update service titles, descriptions, images, display order, and publication status.

## 4. Brand & Visual Direction

### 4.1 Design Direction

- Luxury Contemporary.
- Quiet Luxury.
- Editorial portfolio layout.
- Large interior photography.
- Generous whitespace.
- Elegant typography.
- Subtle transitions and animations.
- Responsive layouts for desktop, tablet, and mobile.

### 4.2 Proposed Color Palette

These are provisional design tokens and must be reviewed against the official logo when available.

| Token | Color |
|---|---|
| Ivory | #F4F0E9 |
| Sand | #D9CBB8 |
| Taupe | #A58B72 |
| Walnut | #51483F |
| Charcoal | #252421 |

### 4.3 Typography

- Headings: Cormorant Garamond.
- Body: Inter or Manrope.

### 4.4 Brand Assets

- Use a temporary text wordmark: `MINH KHOI`.
- Preserve the existing logo when supplied.
- Use generic placeholder images until real brand photography is available.
- Do not represent placeholder images as completed Minh Khoi projects.

## 5. Public Website Scope

### 5.1 Sitemap

- Home
- About
- Services
- Projects
- Project Detail
- Contact

### 5.2 Homepage Sections

1. Hero
2. Brand Introduction
3. Services
4. Featured Projects
5. Design Philosophy
6. Why Choose Minh Khoi
7. Consultation CTA
8. Contact / Footer

Each homepage section must be independently manageable through CMS.

### 5.3 Projects

Each project should support:

- Project name
- Slug
- Category (Apartment, House, Villa, etc.)
- Description
- Area
- Design style
- Cover image
- Image gallery
- Featured status
- Display order
- Draft / Published status
- Mock-data indicator during development

The portfolio layout should be editorial, prioritizing imagery and project storytelling.

### 5.4 Contact & Conversion

Primary CTA:
- Call Now / Hotline.

Supporting channels:
- Zalo
- Facebook / Messenger
- Showroom appointment
- Consultation form

Real contact details must be supplied by the business owner. Do not invent working phone numbers, social URLs, or addresses.

Until real integrations exist, the consultation form must clearly operate as a demo and must not claim to have delivered a real inquiry.

## 6. CMS Requirements

### 6.1 CMS User

**Confirmed decision: Owner only.**

The first release has one CMS user type: Owner / Administrator.

Owner capabilities:
- Sign in and sign out.
- Access the admin dashboard.
- Manage all website content.
- Upload and manage images.
- Create, edit, preview, publish, and unpublish content.
- Manage projects and services.
- Update contact information and site settings.

Do not build staff roles, team invitations, or complex permission management in the first release.

The architecture should not prevent adding more roles in a future phase.

### 6.2 Editing Experience

**Confirmed decision: Flexible – Form Editor + Preview.**

The CMS must provide two complementary editing experiences:

**A. Form Editor**
- Edit headings, descriptions, labels, and CTA text.
- Upload or replace images.
- Select existing media from the Media Library.
- Configure links and button labels.
- Change display order where supported.
- Show or hide supported sections.
- Save as draft.

**B. Preview**
- Preview the page using the actual public website design.
- Preview changes before publishing.
- Clearly distinguish draft content from published content.
- Provide a Preview and Publish workflow.

Preview should use the real frontend components rather than a separate approximation.

### 6.3 Homepage Section Management

The owner must be able to:

- Edit each supported homepage section.
- Update text and images.
- Show or hide a section.
- Reorder supported sections.
- Select featured projects.
- Preview the homepage before publishing.

Use a controlled block-based content model. Each block type must have a defined schema and corresponding frontend component.

Initial supported block types:

- Hero
- Brand Introduction
- Services
- Featured Projects
- Design Philosophy
- Why Choose Us
- CTA
- Contact

Do not allow arbitrary HTML, JavaScript, or unrestricted code entry through CMS.

### 6.4 Pages Management

The owner should be able to update content for supported pages:

- Home
- About
- Services
- Projects
- Contact

Page content must be stored independently of frontend presentation.

The first release does not require a fully unrestricted page builder.

### 6.5 Projects Management

The owner can:

- Create a project.
- Edit project details.
- Upload a cover image.
- Manage a project gallery.
- Set area and design style.
- Mark a project as featured.
- Change display order.
- Save as draft.
- Publish or unpublish.
- Delete a project after confirmation.

### 6.6 Services Management

The owner can:

- Create and edit services.
- Update descriptions and images.
- Change display order.
- Publish or unpublish services.

### 6.7 Media Library

The owner can:

- Upload images.
- Browse existing media.
- Select an image for a page section or project.
- Replace an image without editing code.
- Add alt text.
- View basic file information.
- Reuse the same media item in multiple places.

Production media must use persistent storage. Do not rely on a temporary local filesystem or an ephemeral deployment filesystem.

### 6.8 Site Settings

The owner can update:

- Brand name and logo.
- Hotline.
- Zalo URL.
- Facebook URL.
- Showroom address.
- Business email.
- Footer information.
- Social links.
- Basic SEO defaults.

Only display contact channels that have been configured with real values.

### 6.9 Draft & Publish

Content lifecycle:

1. Owner edits content.
2. Owner saves a draft.
3. Owner previews the draft.
4. Owner publishes when ready.
5. Public website displays published content.

Unpublished changes must not accidentally replace the live website content.

## 7. Technical Direction

### 7.1 Recommended Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js App Router |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI components | Selective shadcn/ui |
| Icons | Lucide React |
| Animation | Motion |
| CMS | Payload CMS |
| Database | PostgreSQL |
| Media storage | S3-compatible storage or managed media provider |
| Validation | Zod / Payload validation |
| Deployment | Vercel or compatible hosting |

Confirm exact compatible package versions during implementation. Do not assume all package versions are compatible without checking the installed project.

### 7.2 CMS Architecture

Use Payload CMS integrated with the Next.js application where supported by the selected versions.

The CMS admin interface should be available under `/admin`.

The public website and CMS should share the same codebase initially, while keeping content management, data access, and frontend presentation logically separated.

### 7.3 Data Collections / Globals

Initial content model:

- Users
- Media
- Projects
- Services
- Pages
- Site Settings
- Navigation

Use structured page sections with explicit block types and validation.

### 7.4 Security

- Require authentication for all admin routes and mutations.
- Only the Owner account can access CMS management features in the first release.
- Enforce authorization on the server, not only by hiding UI elements.
- Validate all submitted content.
- Restrict upload file types and sizes.
- Protect preview routes.
- Never expose server secrets to the browser.
- Do not create a public owner-registration flow.
- Provide a secure initial owner-account setup process.

## 8. Mock-First Development Policy

The project may begin without final brand assets or business content.

Use mock data for:
- Logo / wordmark.
- Interior photography.
- Projects.
- Service descriptions.
- Contact details.
- Page content.

Rules:
- Centralize mock content.
- Clearly identify illustrative content.
- Never present sample projects as actual Minh Khoi projects.
- Never invent real business contact details.
- Make it possible to replace mock data through CMS without changing frontend components.
- Do not create fake working contact links.

## 9. Non-Functional Requirements

- Responsive design.
- Good accessibility and keyboard navigation.
- Optimized image delivery.
- SEO-friendly public pages.
- Clear loading, empty, and error states.
- Maintainable TypeScript architecture.
- Secure CMS authentication and authorization.
- Persistent database and media storage.
- Draft content must remain separate from published content.
- Avoid unnecessary dependencies and infrastructure.

## 10. Out of Scope – First Release

- Multiple CMS roles and staff accounts.
- Customer accounts.
- E-commerce and online payments.
- Inventory and order management.
- Complex quotation / project management.
- Arbitrary drag-and-drop page builder.
- Customer-facing real-time chat.
- Automated CRM integration.
- Multilingual content editing unless explicitly added later.

## 11. Acceptance Criteria

The first release is acceptable when:

1. Public pages render correctly on desktop and mobile.
2. Owner can sign in to `/admin`.
3. Owner can edit homepage section text and images.
4. Owner can preview draft changes before publishing.
5. Owner can publish and unpublish content.
6. Owner can create, edit, and manage projects.
7. Owner can manage services.
8. Owner can upload and reuse media.
9. Owner can update contact information and site settings.
10. Published content appears on the public website.
11. Draft content is not visible to public visitors.
12. CMS access is protected by server-side authorization.
13. Placeholder data is clearly identifiable and replaceable.
14. Production images are stored persistently.
15. Lint, type checking, and production build pass.

## 12. Delivery Phases

Delivery phases, deliverables, acceptance criteria and approval gates are defined in the canonical phase plan: `docs/CLAUDE-CODE-IMPLEMENTATION.md` → Part C (Phase 0 – Phase 9). Part C also maps the phase list previously published in this section.

**Product principle:** The owner must be able to maintain the website independently without needing to edit source code.
