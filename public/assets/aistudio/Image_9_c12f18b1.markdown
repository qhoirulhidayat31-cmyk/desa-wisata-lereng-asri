---
name: Lereng Asri Eco-Tourism
colors:
  surface: '#f1fcf3'
  surface-dim: '#d2ddd4'
  surface-bright: '#f1fcf3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#ebf6ed'
  surface-container: '#e5f1e7'
  surface-container-high: '#e0ebe2'
  surface-container-highest: '#dae5dc'
  on-surface: '#141e18'
  on-surface-variant: '#404945'
  inverse-surface: '#29332d'
  inverse-on-surface: '#e8f4ea'
  outline: '#707974'
  outline-variant: '#c0c9c3'
  surface-tint: '#376757'
  primary: '#003629'
  on-primary: '#ffffff'
  primary-container: '#1b4d3e'
  on-primary-container: '#8abda9'
  inverse-primary: '#9ed1bd'
  secondary: '#9d4413'
  on-secondary: '#ffffff'
  secondary-container: '#fd8d58'
  on-secondary-container: '#702900'
  tertiary: '#402a00'
  on-tertiary: '#ffffff'
  tertiary-container: '#5d3f00'
  on-tertiary-container: '#e3a83b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#baeed9'
  primary-fixed-dim: '#9ed1bd'
  on-primary-fixed: '#002117'
  on-primary-fixed-variant: '#1d4f40'
  secondary-fixed: '#ffdbcc'
  secondary-fixed-dim: '#ffb595'
  on-secondary-fixed: '#351000'
  on-secondary-fixed-variant: '#7c2e00'
  tertiary-fixed: '#ffdead'
  tertiary-fixed-dim: '#fabc4d'
  on-tertiary-fixed: '#281900'
  on-tertiary-fixed-variant: '#604100'
  background: '#f1fcf3'
  on-background: '#141e18'
  surface-variant: '#dae5dc'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '800'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 30px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system embodies the warmth, hospitality, and serene natural beauty of rural Indonesian eco-tourism. It balances traditional countryside welcome (*keramahan desa*) with modern, frictionless travel discovery. 

The aesthetic style is **Warm Tactile Minimalism**:
- Soft, grounded surfaces evoke volcanic soil, lush terraced rice fields, and traditional bamboo-and-timber architecture.
- Generous touch targets and organic curves convey safety, leisure, and approachability.
- Editorial layouts guide travelers effortlessly through immersive visual journeys, transparent package pricing, and quick booking pathways.
- The experience feels airy, tranquil, and rooted in nature, deliberately avoiding cold corporate austerity or chaotic commercial clutter.

## Colors

The color palette draws directly from the highland landscape of rural Indonesia: deep tropical canopies, fertile volcanic loam, ripening golden harvests, and bright mountain light.

- **Primary (`#1B4D3E` - Forest Canopy):** Anchors high-priority actions, primary headings, top-level navigation, and active states. Reflects the deep, lush vegetation of the mountain slopes.
- **Secondary (`#C86432` - Terracotta Loam):** Used for contextual badges, cultural indicators, tour tags, and warm interactive focal points. Conveys traditional brickcraft, clay pathways, and welcoming warmth.
- **Tertiary (`#E5A93C` - Sunlit Gold):** Reserved for star ratings, special highlights, discount badges, and key atmospheric markers. Brings the warm glow of highland dawn.
- **Neutral (`#242E28` - Volcanic Basalt):** The primary text color, maintaining high legibility while remaining softer than absolute black.
- **Canvas & Surface System:** 
  - Base background: `#FAF8F5` (Soft Rice Cream) to reduce glare in sunlight.
  - Card & Container surface: `#FFFFFF` (Pure Morning Mist) for sharp contrast and tactile definition.
  - Secondary surface container: `#F1EFE9` (Warm Bamboo Tint) for alternating sections and input field fills.
- **Action Accent (`#25D366` - WhatsApp Green):** A dedicated, high-visibility green reserved exclusively for direct booking conversions and instantaneous chat interactions.

## Typography

The type system is built on **Plus Jakarta Sans**, chosen for its friendly geometric balance, wide apertures, and Indonesian design heritage. It delivers high legibility on outdoor mobile screens under direct sunlight.

- **Headlines:** Set with tight letter spacing and prominent weights (`700` and `800`) to create clear section entry points and evoke an inviting, editorial voice.
- **Body Text:** Configured with relaxed line heights (`1.6` to `1.65`) and warm neutral tones to provide effortless reading across itineraries, package descriptions, and local guides.
- **Numerical Hierarchy:** Package pricing utilizes tabular lining figures with `headline-md` weight for the currency value and `body-sm` for the billing duration or guest unit (e.g., `/pax`, `/malam`).

## Layout & Spacing

A mobile-first fluid layout architecture optimized for single-thumb interactions and effortless scrolling.

- **Mobile (< 768px):** Single-column layout with 4-column sub-grids. Outer canvas margin is pinned to `1rem` (`16px`) to maximize screen estate for photography while preserving comfortable edge buffers. Horizontal carousels use `bleed-to-edge` behavior with `1rem` snap-padding.
- **Tablet (768px - 1024px):** 8-column layout with `2rem` margins. Package cards and gallery tiles reflow into balanced 2-column groupings.
- **Desktop (> 1024px):** 12-column layout maxing out at `1200px` content width, centered with dynamic auto margins. Itineraries and booking summaries transition into sticky sidebars alongside narrative tour content.
- **Touch Ergonomics:** All primary interactive elements adhere strictly to a minimum touch target of `48px` vertically, maintaining ample breathing room via `space-sm` and `space-md` gaps.

## Elevation & Depth

Visual hierarchy uses tactile physical metaphors rather than artificial digital elevation, echoing natural material layering.

- **Level 0 (Surface Baseline):** Soft Rice Cream background (`#FAF8F5`). Flat, non-interactive ground.
- **Level 1 (Card & Content Blocks):** White background with a faint warm-tinted shadow: `0 2px 8px -2px rgba(27, 77, 62, 0.06), 0 1px 3px 0 rgba(27, 77, 62, 0.04)`. Outlined with a hairline border of `#EAE6DF` for sunlight readability.
- **Level 2 (Interactive Floating & Sticky CTAs):** Sticky bottom booking bars and floating WhatsApp actions utilize an enriched canopy glow: `0 8px 24px -4px rgba(27, 77, 62, 0.16), 0 2px 6px -1px rgba(27, 77, 62, 0.08)`.
- **Level 3 (Modals & Full-Screen Sheets):** Mobile bottom-sheets and booking dialogs: `0 16px 36px -8px rgba(36, 46, 40, 0.24)`. Backdrops feature a 4px blur with `rgba(36, 46, 40, 0.45)` scrim.

## Shapes

The shape system employs soft, organic contours that evoke river stones, terrace ridges, and friendly handcraft.

- **Standard Elements (Cards, Text Fields, Badges):** Feature a `0.5rem` (`8px`) corner radius for clean visual alignment.
- **Elevated Cards & Containers (`rounded-lg`):** Feature a `1rem` (`16px`) radius to soften visual weight and invite tap gestures.
- **Interactive Action Pills (`rounded-full`):** Buttons, chips, category filters, and floating contact triggers use full circular caps (`9999px`) to maximize tactile affordance and approachability.
- **Media Containers:** Image cards in package listings and galleries use `rounded-lg` (`16px`) with hidden overflows to eliminate harsh corners.

## Components

### Buttons
- **Primary CTA:** Minimum `52px` height on mobile. Filled `#1B4D3E` with `#FFFFFF` text, `rounded-full`, bold typography (`label-lg`). Active state darkens to `#143A2F`.
- **WhatsApp Booking Button:** Distinct high-priority CTA. Background `#25D366` with `#FFFFFF` bold text and an integrated WhatsApp icon. Generates a gentle elevation glow (`rgba(37, 211, 102, 0.25)`). Positioned prominently on package detail views and as a sticky mobile bottom bar.
- **Secondary / Outlined:** Transparent background with a 1.5px border of `#1B4D3E` and `#1B4D3E` text. Fills with `rgba(27, 77, 62, 0.06)` on press.

### Cards (Tour Packages & Village Experiences)
- White container base with a `16px` corner radius, hairline `#EAE6DF` outline, and Level 1 elevation.
- 16:10 aspect ratio cover photo with a terracotta location badge anchored top-left.
- Clear content grouping: title, key activity highlights (e.g., "Trekking", "Petik Kopi"), all-inclusive pricing displayed in bold high-contrast emerald text, and a direct "Pesan via WhatsApp" action link.

### Chips & Filters
- Compact `36px` pills with `0.5rem` horizontal padding. 
- Inactive state: `#F1EFE9` background with `#242E28` text.
- Active state: `#1B4D3E` background with white text, providing instant feedback for filtering tour types (e.g., "Edukasi", "Homestay", "Agrowisata").

### Input Fields
- Minimum height of `48px` with `8px` corner radius.
- Soft bamboo-tinted background (`#F1EFE9`), transitioning to `#FFFFFF` with a 2px `#1B4D3E` ring when focused.
- Floating or clear persistent labels in `label-md` to avoid mobile auto-fill disorientation.

### Checkboxes & Radio Buttons
- `20px` tactile touchboxes with a 3px border radius for checkboxes and full circles for radio selectors.
- `#1B4D3E` active fill with crisp white check/dot indicators.

### Interactive Maps & Gallery Previews
- Map containers feature rounded `16px` corners, custom map pin clusters in `#C86432`, and an overlay button to launch native navigation apps (Google Maps / Waze).
- Photo galleries utilize horizontal snap scrolling with thumbnail progress dots and tap-to-expand lightbox overlays.