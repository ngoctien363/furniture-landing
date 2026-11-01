# Replacing Demo Content

> **Interim document (mock-data phase only).** It describes the static files in
> `src/data/` used before the CMS exists. From Phase 4 onward, content is
> replaced through Payload CMS (see CLAUDE.md §13.4) and this guide will be
> retired.

The site runs on clearly-flagged demonstration content. Nothing below requires
changing UI components.

| What | Where | How |
| --- | --- | --- |
| Official logo | `src/data/site-config.ts` → `logo` | Put file in `public/brand/`, set `{ kind: "image", src, srcOnDark?, alt, width, height }` |
| Brand colors / fonts | `src/styles/brand.css` | Edit hex values; fonts are loaded in `src/app/(frontend)/layout.tsx` |
| Hotline, Zalo, Facebook, Messenger | `site-config.ts` → `contact.channels.*.contact.value` | Replace `null` with the real number / https URL. While `null`, no link is rendered |
| Showroom address, hours, email | `site-config.ts` → `contact.*` | Replace `null` values |
| Homepage sections (order, visibility, copy) | `src/data/pages/home.ts` | Each entry is a block; reorder the array, set `visible: false` to hide, edit text/images |
| About / Services / Projects / Contact copy | `src/data/pages/inner-pages.ts`, shared blocks in `src/data/pages/shared.ts` | Edit text; placeholder copy is flagged with `isPlaceholder` |
| Consultation form labels/options | `src/data/consultation-form.ts` | Form is demo-only until a real backend is connected |
| Interface strings | `src/data/ui-text.ts` | Vietnamese UI labels |
| Hero / any image | `src/data/images.ts` | Add file under `public/images/`, update `src`, `alt` and size |
| Services | `src/data/services.ts` | Edit copy; set `isPlaceholder: false` |
| Projects | `src/data/projects.ts` | Set real name, `area`, `location`, `year`; then `detailsPending: false` |
| Go live | `site-config.ts` → `isDemoContent: false`, set `NEXT_PUBLIC_SERVER_URL` | Removes demo notice and enables search indexing |

Imagery: Siêu Thị Nội Thất design visualisations in `public/images/khoanh/` (Căn hộ 01 = files 1–18,
Căn hộ 02 = files 19–36). Files 7 and 32 have trimmed copies in `khoanh/crop/`.
Project names are working titles; area, location and year are pending.
