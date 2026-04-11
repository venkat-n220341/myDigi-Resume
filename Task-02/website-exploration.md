# Task 2: Website Exploration (Bootstrap Analysis)

Method used: Checked each live website with browser-source/inspect-style class scanning and identified Bootstrap-related classes and components.

## 1) GetBootstrap
- URL: https://getbootstrap.com/
- Bootstrap-related features observed:
  - Strong responsive layout with grid breakpoints
  - Navigation with dropdown/collapse behavior
  - Utility classes for responsive visibility and spacing
- Components used:
  - Navbar
  - Dropdown
  - Buttons
  - Grid sections
- Bootstrap class names observed (sample):
  - `container`, `col-12`, `col-sm-6`, `col-md-8`, `col-lg-6`
  - `d-none`, `d-block`, `d-lg-none`, `d-lg-flex`
  - `dropdown`, `dropdown-menu`, `dropdown-item`
  - `btn`, `btn-primary`, `btn-lg`, `btn-link`

## 2) Bootswatch
- URL: https://bootswatch.com/
- Bootstrap-related features observed:
  - Theme-driven Bootstrap pages using responsive navbar
  - Grid-based card listing
  - Collapse + dropdown for navigation on smaller screens
- Components used:
  - Navbar
  - Dropdown
  - Collapse
  - Cards
  - Buttons
- Bootstrap class names observed (sample):
  - `navbar`, `navbar-expand-lg`, `navbar-toggler`, `navbar-collapse`
  - `container`, `col-12`, `col-md-6`, `col-lg-4`
  - `dropdown-toggle`, `dropdown-menu-end`
  - `card`, `btn`, `btn-primary`
  - `d-none`, `d-lg-none`, `d-lg-flex`

## 3) AdminLTE
- URL: https://adminlte.io/
- Bootstrap-related features observed:
  - Dashboard-style responsive grid layout
  - Accordion/collapse-heavy content areas
  - Multi-column responsive behavior for desktop/tablet/mobile
- Components used:
  - Accordion
  - Collapse
  - Grid system
- Bootstrap class names observed (sample):
  - `container`, `row`, `col-sm-6`, `col-md-6`, `col-lg-3`, `col-lg-12`
  - `accordion`, `accordion-item`, `accordion-header`
  - `accordion-button`, `accordion-collapse`, `accordion-body`
  - `collapse`, `d-flex`, `g-4`

## 4) Bootsnipp
- URL: https://bootsnipp.com/
- Bootstrap-related features observed:
  - Snippet gallery with responsive grid + modal examples
  - Dropdown and navbar usage in sample pages
  - Legacy + modern grid classes visible in examples
- Components used:
  - Navbar
  - Dropdown
  - Modal
  - Collapse
  - Buttons
  - Grid system
- Bootstrap class names observed (sample):
  - `container`, `col-sm-12`, `col-md-8`, `col-lg-4`, `col-xl-3`
  - `navbar`, `navbar-brand`
  - `dropdown`, `dropdown-toggle`, `dropdown-menu`
  - `modal`, `modal-dialog`, `modal-content`, `modal-header`, `modal-body`
  - `btn`, `btn-danger`, `btn-group`

## 5) BootstrapDash
- URL: https://www.bootstrapdash.com/
- Bootstrap-related features observed:
  - Product card grids with responsive columns
  - Prominent button styles and badge labels
  - Responsive layout behavior across screen sizes
- Components used:
  - Cards
  - Buttons
  - Badges
  - Grid system
  - Navbar/Dropdown (in navigation sections)
- Bootstrap class names observed (sample):
  - `col-1`, `col-2`, `col-4`, `col-6`, `col-12`
  - `card`, `card-header`, `card-body`, `card-img-top`, `card-title`
  - `btn`, `btn-light`, `btn-primary`, `btn-outline-primary`, `btn-lg`
  - `badge`, `d-none`, `d-flex`

## Summary of Real-World Bootstrap Usage
- Grid system observed: `container`, `row`, `col-*`, gutters (`g-*`)
- Components observed: Navbar, Dropdown, Collapse/Accordion, Modal, Cards, Buttons, Badges
- Responsive utilities observed: `d-none`, `d-*-*`, responsive columns (`col-sm-*`, `col-md-*`, `col-lg-*`)

## Complete Bootstrap CSS Component Checklist

Status legend:
- Covered in this exploration: clearly observed and documented above.
- Not covered in this exploration: not explicitly observed in the current website notes.

Covered in this exploration:
- Accordion
- Badges
- Buttons
- Cards
- Collapse
- Dropdowns
- Modal
- Navbar

Not covered in this exploration:
- Alerts
- Breadcrumb
- Button group
- Carousel
- Close button
- List group
- Offcanvas
- Pagination
- Placeholders
- Popovers
- Progress
- Scrollspy
- Spinners
- Toasts
- Tooltips

Related Bootstrap content sections (not counted as standalone components above):
- Grid system
- Responsive display utilities
- Spacing and layout utilities
- Typography and helper utilities

Note:
- This document analyzes real-world usage across selected websites, so it does not guarantee that every Bootstrap component appears in those examples.
