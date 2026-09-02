---
name: Marine Precision Narrative
colors:
  surface: '#F9F9FF'
  surface-dim: '#d9dadf'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f9'
  surface-container: '#ECEDF6'
  surface-container-high: '#e7e8ee'
  surface-container-highest: '#e2e2e8'
  on-surface: '#191c20'
  on-surface-variant: '#414753'
  inverse-surface: '#2e3035'
  inverse-on-surface: '#f0f0f6'
  outline: '#727784'
  outline-variant: '#c1c6d5'
  surface-tint: '#005cba'
  primary: '#004e9f'
  on-primary: '#ffffff'
  primary-container: '#0066cc'
  on-primary-container: '#dfe8ff'
  inverse-primary: '#aac7ff'
  secondary: '#006a6a'
  on-secondary: '#ffffff'
  secondary-container: '#9deeed'
  on-secondary-container: '#0b6e6e'
  tertiary: '#883700'
  on-tertiary: '#ffffff'
  tertiary-container: '#a84e19'
  on-tertiary-container: '#ffe2d6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e3ff'
  primary-fixed-dim: '#aac7ff'
  on-primary-fixed: '#001b3e'
  on-primary-fixed-variant: '#00458e'
  secondary-fixed: '#a0f0f0'
  secondary-fixed-dim: '#84d4d3'
  on-secondary-fixed: '#002020'
  on-secondary-fixed-variant: '#004f4f'
  tertiary-fixed: '#ffdbcb'
  tertiary-fixed-dim: '#ffb692'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#793000'
  background: '#f9f9ff'
  on-background: '#191c20'
  surface-variant: '#e2e2e8'
  border-subtle: '#C1C6D5'
  text-primary: '#191C22'
  text-secondary: '#414753'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  data-tabular:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  max-width-container: 1280px
  margin-desktop: 24px
  margin-mobile: 16px
  gutter: 16px
  grid-8: 8px
  grid-16: 16px
---

## Brand & Style

The design system is a high-precision framework engineered for scientific rigor and oceanographic data analysis. It targets researchers, engineers, and maritime professionals who require extreme clarity in information-dense environments.

The visual style is **Corporate / Modern** with a lean toward **Minimalism**. It prioritizes functional efficiency over decoration, using a structured hierarchy to ensure the UI feels like a professional instrument rather than a consumer app. The emotional tone is one of technical authority, calm reliability, and unwavering accuracy. Whitespace is used strategically to separate complex data modules, while the palette remains cool and focused to prevent cognitive fatigue during extended analysis sessions.

## Colors

The color system is optimized for legibility and professional utility.

- **Primary:** Scientific Blue (#0066CC) is the anchor for action and intent.
- **Secondary:** Restrained Ocean Teal (#006A6A) is used for categorization and distinct data sets.
- **Tertiary:** Rust Accents (#883700) are reserved for critical alerts or specific environmental markers.
- **Surface & Neutrals:** The palette utilizes a "Marine White" (#F9F9FF) for the base canvas to reduce glare. Container tiers use subtle shifts in saturation to create hierarchy without the need for heavy shadows.
- **Data Coloring:** Use high-contrast variants of primary and secondary colors for visualizations to ensure clarity against the light background.

## Typography

Inter is the sole typeface for this design system to maintain a clean, utilitarian aesthetic. 

For all numerical data, sensor readings, and coordinate displays, utilize the `data-tabular` style. This leverages Inter's **tabular lining** OpenType features (`tnum`, `lnum`) to ensure vertical alignment of digits in tables and dashboard widgets, providing the precision of a monospaced font while maintaining visual harmony with the UI text.

Headlines use tighter letter spacing for impact, while labels use slight tracking to enhance readability at small sizes.

## Layout & Spacing

This design system uses a **Fixed-Fluid Hybrid** grid model centered on an 8px rhythm.

- **Main Container:** All primary content is housed within a 1280px max-width container, centered horizontally on the viewport.
- **Desktop (1280px+):** 12-column grid with 24px outer margins and 16px gutters. Panels and scientific cards should align strictly to these columns.
- **Tablet (768px - 1279px):** 6-column grid with 24px margins. Content may reflow into stacked modules.
- **Mobile (<767px):** Single-column stack with 16px margins. 
- **Scientific Panels:** Use `grid-16` (16px) for internal padding of cards and `grid-8` (8px) for spacing between related data points or input-label pairs.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** and **Low-Contrast Outlines** rather than physical shadows.

- **Layer 0 (Canvas):** The base background uses the `#F9F9FF` surface color.
- **Layer 1 (Panels):** Cards and content modules use a pure white background (`#FFFFFF`) with a 1px solid border (`#C1C6D5`).
- **Layer 2 (Overlays):** Modals and dropdowns use the white surface but include a refined, low-opacity ambient shadow (Blur 12px, Opacity 5%, Color #191C22) to separate them from the content beneath.
- **Hierarchy through Contrast:** Use the `surface-container` (#ECEDF6) to subtly group internal elements within a white card, creating a nested "well" effect for data groups.

## Shapes

The shape language is **Rounded and Systematic**.

- **Standard Radius:** 0.5rem (8px) is applied to all primary UI elements, including buttons, input fields, and cards. This provides a professional, approachable feel.
- **Large Radius:** 1rem (16px) is reserved for status badges and pills to distinguish them from interactive buttons.
- **Precision Elements:** In technical charts or small data markers, use a reduced radius (2px) to ensure visual precision is not compromised by excessive rounding.

## Components

### Header
A unified header with a fixed height. Navigation links are centered, using `label-sm` with a Primary Blue indicator for the active state. The brand logo is left-aligned and utilities (search, settings, profile) are right-aligned, all within the 1280px max-width container.

### Footer
A compact, low-profile footer using a `surface-container` background. It contains copyright information and essential links (Privacy, Terms, API Documentation) in a single row, utilizing the `label-sm` style in `#414753`.

### Scientific Panels (Cards)
Constructed with a white background and a 1px border. Titles are separated from content by a 1px horizontal divider. Internal content uses `grid-16` padding.

### Buttons & Inputs
- **Buttons:** Primary buttons use a solid `#0066CC` background. Secondary buttons use a white surface with a `#C1C6D5` border.
- **Inputs:** Standardized 40px height for desktop. On focus, the border transitions to Primary Blue with a subtle 2px outer glow.

### Data Tables
Rows are separated by 1px horizontal lines. Use `data-tabular` for all numeric cells. Header rows use a subtle background tint (`#ECEDF6`) and bold labels.

### Status Indicators
Compact chips (24px height) with light color-coded backgrounds and high-contrast text to indicate system health, data quality, or connectivity.