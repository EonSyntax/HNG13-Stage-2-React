# EonTickets - Design Guidelines

## Overview
EonTickets is a frontend-focused ticket management application using React and localStorage for data persistence. The application follows modern design principles and uses a component-based architecture with a focus on user experience and data integrity.

# EonTickets - Design Guidelines

## Overview

EonTickets is a frontend-focused ticket management application that uses localStorage for data persistence. The design approach emphasizes user experience, data integrity, and seamless offline functionality.

## Core Principles

1. **Data Persistence**
   - Efficient localStorage usage
   - Clear data structure
   - Optimistic updates
   - Error handling for storage limits

2. **User Experience**
   - Immediate feedback for all actions
   - Offline-first approach
   - Consistent loading states
   - Clear validation messages

This design system draws inspiration from modern tools like Linear and Asana for clarity and usability, while maintaining a lightweight footprint suitable for client-side operations.

## Core Design Elements

### Typography Hierarchy
- **Headings:** 
  - H1: 3.5rem (56px) - Landing hero
  - H2: 2.5rem (40px) - Section headers
  - H3: 1.875rem (30px) - Card headers, dashboard stats
  - H4: 1.5rem (24px) - Subsections
- **Body:** 1rem (16px) base, 1.125rem (18px) for prominent text
- **Small/Labels:** 0.875rem (14px)
- **Font Weights:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Spacing System
Use Tailwind units: **2, 4, 6, 8, 12, 16, 20, 24** for consistent rhythm
- Component padding: p-6 to p-8
- Section spacing: py-16 to py-24
- Card gaps: gap-6 to gap-8
- Button padding: px-6 py-3

### Layout Structure

**Container System:**
- Max-width: 1440px with mx-auto centering
- Outer padding: px-6 (mobile) to px-12 (desktop)
- Grid systems: 3-column for features, 2-column for dashboard stats, single column for forms

**Mandatory Decorative Elements:**
- Wavy SVG background at bottom of hero section
- Minimum 2-3 decorative circles positioned absolutely (hero + one other section)
- All content boxes use rounded-xl corners with shadow-lg

## Component Specifications

### Landing Page Structure
1. **Hero Section (80vh minimum)**
   - Wavy SVG background with gradient
   - Large decorative circle (300px+) positioned top-right or bottom-left
   - Prominent headline + 2-sentence description
   - Two CTAs: primary "Get Started" + secondary "Login"
   - Generous padding (py-20 to py-32)

2. **Features Section**
   - 3-column grid (stack on mobile)
   - Box-shaped cards with shadow-lg, rounded-xl, p-8
   - Icon + title + description per feature
   - Include: "Smart Ticketing", "Real-time Updates", "Team Collaboration", "Analytics Dashboard"

3. **Benefits/How It Works**
   - 2-column alternating layout
   - One decorative circle element
   - Mix text and placeholder imagery

4. **Footer**
   - Full-width with internal max-width container
   - Links, copyright, social icons
   - Consistent across all pages

### Authentication Screens
- Centered card (max-w-md) with shadow-xl
- Form fields with clear labels above inputs
- Input height: h-12, rounded-lg borders
- Inline error messages in red beneath fields
- Submit button: full-width, h-12
- Toggle between login/signup with link at bottom

### Dashboard Layout
- **Header Bar:** Full-width with user info + logout button (right-aligned)
- **Stats Section:** 3-column grid displaying card boxes
  - Each stat card: rounded-xl, shadow-md, p-6
  - Large number (text-4xl, font-bold) + label
  - Icon aligned to corner
- **Quick Actions:** Prominent "Create New Ticket" button
- **Navigation:** Side or top navigation to Ticket Management

### Ticket Management Screen
- **Header:** Title + "Create Ticket" button (right)
- **Ticket List:** Card grid (2-3 columns on desktop, stack mobile)
  - Each ticket card: rounded-xl, shadow-md, p-6, border-l-4 with status indicator
  - Status badge: rounded-full px-3 py-1, positioned top-right
  - Title (font-semibold, text-lg) + truncated description
  - Edit/Delete actions (icon buttons, bottom-right)
- **Create/Edit Modal:** Centered overlay with backdrop blur
  - Form fields stacked vertically
  - Dropdown for status with visual indicators
  - Save/Cancel buttons at bottom

### Status Color System (Mandatory)
- **Open:** Green variants (bg-green-100, text-green-700, border-green-500)
- **In Progress:** Amber variants (bg-amber-100, text-amber-700, border-amber-500)
- **Closed:** Gray variants (bg-gray-100, text-gray-700, border-gray-500)

## Interactive Elements

### Buttons
- **Primary:** Solid background, rounded-lg, px-6 py-3, font-medium
- **Secondary:** Border variant with transparent bg
- **Danger:** For delete actions
- Focus states: ring-2 with offset
- No custom hover states needed

### Toast Notifications
- Fixed positioning (top-right)
- Slide-in animation
- Auto-dismiss after 4 seconds
- Success (green), error (red), info (blue) variants
- rounded-lg, shadow-lg, p-4

### Form Validation
- Real-time validation on blur
- Error messages: text-sm, text-red-600, mt-1
- Invalid fields: border-red-500
- Valid fields: border-green-500

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked navigation)
- Tablet: 768px - 1024px (2-column grids)
- Desktop: > 1024px (full multi-column layouts)

## Accessibility Requirements
- Semantic HTML5 elements (header, nav, main, footer, section)
- ARIA labels for icon-only buttons
- Keyboard navigation support (visible focus rings)
- Sufficient contrast ratios (WCAG AA minimum)
- Alt text for decorative SVG elements

## Images
**Hero Section:** Include a large, modern illustration or photograph depicting team collaboration or digital workspace (1200x600px minimum). Position with decorative circle overlapping edge.

**Dashboard:** Small icon illustrations for each stat card (64x64px).

This design balances professional productivity tool aesthetics with the creative visual elements specified, ensuring both functionality and visual appeal across all screen sizes.