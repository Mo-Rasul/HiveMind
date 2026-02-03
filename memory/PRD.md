# HiveMind Marketing Website - PRD

## Original Problem Statement
Build a simple, modern marketing website for HiveMind Marketing that clearly routes visitors into either a Brand or Creator path with minimal friction.

## Architecture
- **Frontend**: React with Tailwind CSS, Framer Motion for animations
- **Backend**: FastAPI (minimal - no backend functionality needed for this marketing site)
- **Database**: MongoDB (not used in current implementation)

## User Personas
1. **Brands**: Marketing teams looking to partner with content creators
2. **Creators**: Content creators seeking brand collaboration opportunities

## Core Requirements (Static)
- Full-screen hero section with HiveMind description
- Two primary CTA buttons: "For Brands" and "For Creators"
- Horizontal logo carousel with placeholder brand logos
- Minimal header with HiveMind logo
- Brands Page: Hero image, benefits section, embedded form placeholder
- Creators Page: Same layout as Brands page
- Microsoft Outlook form placeholder with "FORMLINKHERE"
- Confirmation message after form submission
- Warm peach background (#fff3e7) with orange accent (#f48d2d)
- Caprasimo font for headings, DM Sans for body

## What's Been Implemented ✅
**Date: 2025-02-03**
- [x] Homepage with hero section, two CTA buttons, logo carousel
- [x] Brands page with hero image, 3 benefit cards, form placeholder
- [x] Creators page with hero image, 3 benefit cards, form placeholder
- [x] Framer Motion page transitions and animations
- [x] Form submission mock with success confirmation
- [x] Responsive design (mobile-first)
- [x] Custom fonts (Caprasimo + DM Sans)
- [x] Warm peach/orange color scheme
- [x] Logo carousel with infinite scroll, pause on hover
- [x] Back navigation from inner pages
- [x] Header logo linking to homepage

## Prioritized Backlog

### P0 (Critical) - All Done ✅
- None remaining

### P1 (High Priority)
- Real Microsoft Forms integration (replace "FORMLINKHERE" placeholder)
- Contact information in footer
- SEO meta tags and Open Graph

### P2 (Medium Priority)
- Blog section for marketing content
- Case studies/testimonials section
- FAQ accordion section
- Cookie consent banner
- Privacy policy and terms pages

### P3 (Nice to Have)
- Dark mode toggle
- Multi-language support
- Advanced analytics integration
- Newsletter signup

## Next Tasks
1. Replace form placeholder with actual Microsoft Forms embed URL
2. Add footer with contact info and social links
3. Add SEO meta tags for better discoverability
