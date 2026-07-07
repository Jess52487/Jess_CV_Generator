---
name: Executive Desk Dark
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#20201f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#bfc8cd'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#899297'
  outline-variant: '#3f484c'
  surface-tint: '#89d0ed'
  primary: '#b4e8ff'
  on-primary: '#003544'
  primary-container: '#87ceeb'
  on-primary-container: '#005870'
  inverse-primary: '#0c6780'
  secondary: '#c4c6cf'
  on-secondary: '#2d3137'
  secondary-container: '#43474e'
  on-secondary-container: '#b2b5bd'
  tertiary: '#e2e0df'
  on-tertiary: '#303030'
  tertiary-container: '#c6c4c4'
  on-tertiary-container: '#515151'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#baeaff'
  primary-fixed-dim: '#89d0ed'
  on-primary-fixed: '#001f29'
  on-primary-fixed-variant: '#004d62'
  secondary-fixed: '#e0e2eb'
  secondary-fixed-dim: '#c4c6cf'
  on-secondary-fixed: '#181c22'
  on-secondary-fixed-variant: '#43474e'
  tertiary-fixed: '#e4e2e1'
  tertiary-fixed-dim: '#c8c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  headline-xl:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max: 1280px
---

## Brand & Style
The design system evolves into a nocturnal, high-stakes executive environment. The brand personality is authoritative, sophisticated, and intensely focused, shifting from the traditional "daytime corner office" to a "private midnight study" aesthetic. 

The design style combines **Tactile Skeuomorphism** with **Minimalist Precision**. It leverages the physical metaphors of a high-end workstation—obsidian surfaces, brushed gunmetal hardware, and pebble-grain leather—while maintaining a clean, systematic digital interface. The emotional response is one of calm, elite control and uncompromising quality.

## Colors
The palette is anchored by **Deep Charcoal (#1a1a1a)** for primary surfaces and **Ebony (#121212)** for structural depth. The **Sky Blue (#87ceeb)** primary accent is utilized as a "glow" or "lit filament" source, providing high-contrast functional highlights against the dark backdrop.

- **Surface 0:** Deep Charcoal (#1a1a1a) - The primary desk mat or leather surface.
- **Surface 1:** Ebony (#121212) - Inset areas, drawers, or recessed containers.
- **Primary:** Sky Blue (#87ceeb) - Used for active states, primary actions, and "LED" indicators.
- **Secondary:** Brushed Silver/Gunmetal (#a8abb3) - Used for hardware, icons, and metallic trims.
- **Text:** High-readability silver-grey for body, pure white for headers to ensure contrast.

## Typography
The typography balances the traditional authority of **Libre Caslon Text** for headlines with the modern, utilitarian clarity of **Inter** for body content. 

To reinforce the technical, "executive instrument" feel, **JetBrains Mono** is used for labels, metadata, and micro-copy, mimicking the etched serial numbers on luxury hardware. On dark backgrounds, font weights are slightly thinned to prevent "ink bleed" visual artifacts, and letter spacing is increased on labels for maximum legibility.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy, reminiscent of organized desk blotters and stationary sets. Elements are placed with generous margins to evoke a sense of premium "breathing room."

- **Desktop:** 12-column grid with a 1280px max-width, centered.
- **Tablet:** 8-column grid with fluid margins.
- **Mobile:** 4-column grid with 16px margins.
Spacing is strictly derived from an 8px base unit. Components like the "Notepad" or "CV Paper" should use internal padding of 32px to maintain a formal, document-like appearance.

## Elevation & Depth
Depth is achieved through physical modeling rather than simple tonal shifts. This design system utilizes:

- **Recessed Surfaces:** Elements like input fields and "paper" slots use an `inner-shadow` (0px 2px 4px rgba(0,0,0,0.8)) to appear physically carved into the ebony surface.
- **Raised Surfaces:** Cards and buttons use a subtle `outer-glow` (0px 0px 1px rgba(255,255,255,0.1)) on the top edge to simulate a "beveled edge" catching a dim overhead light.
- **Material Textures:** Subtle noise overlays simulate black pebble-grain leather, while linear gradients simulate the grain of dark walnut.
- **Blueprint Stationery:** The "Notepad" uses a dark-grey base (#2a2a2a) with light-grey (#3a3a3a) ruled lines, creating a low-contrast, eye-strain-reducing writing surface.

## Shapes
Shapes are disciplined and architectural. The default **Soft (0.25rem)** roundedness reflects the precision-milled edges of luxury electronics or high-end office furniture. 

Large containers, such as the main "Blotter" or "Notepad," use **rounded-lg (0.5rem)** to suggest a heavy, substantial physical object. Interactive elements like buttons maintain the tighter radius to feel like solid tactile switches.

## Components
- **Buttons:** Styled as "Brushed Gunmetal" plates. Use a linear gradient (top to bottom: #4a4d52 to #2d2d2d) with a 1px silver top-stroke. Text is Sky Blue (#87ceeb) for primary actions.
- **Input Fields:** Recessed "indented" slots. Darker than the primary surface (#121212) with a subtle inner shadow. The cursor and focus ring use the Sky Blue accent.
- **Chips/Tags:** Styled as "Engraved Plates." Solid black backgrounds with JetBrains Mono text etched in silver-grey.
- **Cards:** Defined by "Dark Walnut" or "Pebble Leather" textures. Borders are not used; instead, depth is defined by the contrast between textures and a 1px top-highlight.
- **Checkboxes/Radios:** Modeled after toggle switches found on high-end audio equipment—metallic finish with a Sky Blue "on" indicator light.
- **Lists:** Separated by "Etched" dividers—1px lines with a dark shadow below and a faint highlight above to create a "grooved" effect in the ebony surface.