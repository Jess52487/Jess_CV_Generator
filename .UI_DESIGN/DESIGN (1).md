---
name: Executive Desk
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#3f484c'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0ef'
  outline: '#6f787d'
  outline-variant: '#bfc8cd'
  surface-tint: '#0c6780'
  primary: '#0c6780'
  on-primary: '#ffffff'
  primary-container: '#87ceeb'
  on-primary-container: '#005870'
  inverse-primary: '#89d0ed'
  secondary: '#77574d'
  on-secondary: '#ffffff'
  secondary-container: '#fed3c7'
  on-secondary-container: '#795950'
  tertiary: '#5d5f5f'
  on-tertiary: '#ffffff'
  tertiary-container: '#c4c4c4'
  on-tertiary-container: '#4f5151'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#baeaff'
  primary-fixed-dim: '#89d0ed'
  on-primary-fixed: '#001f29'
  on-primary-fixed-variant: '#004d62'
  secondary-fixed: '#ffdbd0'
  secondary-fixed-dim: '#e7bdb1'
  on-secondary-fixed: '#2c160e'
  on-secondary-fixed-variant: '#5d4037'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#fcf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e5e2e1'
typography:
  headline-lg:
    fontFamily: Source Serif 4
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Source Serif 4
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Source Serif 4
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Source Serif 4
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Source Serif 4
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-stamp:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  label-embossed:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 14px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  desktop-margin: 64px
  tablet-margin: 32px
  mobile-margin: 16px
  document-padding: 80px
  gutter: 24px
  component-gap: 16px
---

## Brand & Style

The design system is centered on the concept of a "Virtual Desk," bridging the gap between digital efficiency and the tactile satisfaction of high-end office stationery. The brand personality is professional, organized, and deeply grounded in physical reality. It targets job seekers who value craftsmanship, attention to detail, and a traditional sense of professional prestige.

The design style is **Skeuomorphic**. Unlike modern flat aesthetics, this design system utilizes deep shadows, glossy highlights, 3D textures, and physical metaphors to create an immersive environment. The UI evokes the emotional response of sitting at a solid mahogany desk, handling premium bond paper, and using weighted metallic tools. Every element must feel like it has mass, texture, and a specific place in a physical workspace.

## Colors

The palette is driven by natural materials and classic office tones. 

- **Primary (Sky Blue):** Used for "ink" accents, highlighted stamp marks, and active metallic reflections. It provides a modern professional contrast to the traditional wood tones.
- **Secondary (Mahogany):** A rich, deep wood tone (#5D4037) serves as the primary canvas, providing warmth and a sense of luxury.
- **Tertiary (Paper White):** A slightly warm, textured white (#F5F5F5) used for document surfaces to prevent digital eye strain and mimic real vellum.
- **Neutral (Carbon):** Used for deep shadows and heavy printed text, mimicking carbon-copy ink or charcoal.

Color application should always involve gradients; flat colors are prohibited. Use inner glows to simulate beveled edges and drop shadows to simulate elevation from the desk surface.

## Typography

This design system uses a dual-font approach to reinforce the office metaphor.

1.  **The Document Face (Source Serif 4):** A classic, authoritative serif used for all resume content and document headers. It mimics the look of high-quality printing on physical paper.
2.  **The Tool Face (Space Mono):** A monospaced font used for "stamped" labels, folder tabs, and interface instructions. It mimics the look of a typewriter or an embossed label maker, creating a clear distinction between the "content" (the CV) and the "container" (the UI).

Letter spacing for labels should be slightly wider to simulate the physical imperfections of mechanical stamping. Headlines on the document should use high-contrast weights to feel "ink-heavy."

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model to mimic a physical desk surface. 

- **The Desk (Canvas):** The background is a fixed-ratio mahogany surface. On large screens, it shows the full desk; on smaller screens, it crops into the "work area."
- **The Document (Primary Container):** The CV generator interface is centered like a sheet of A4 paper. It maintains a strict aspect ratio.
- **Margins:** Large, generous margins represent the "dead space" on a desk where tools (sidebars) are placed.
- **Breakpoints:** 
    - **Desktop (>1024px):** Full desk view with side-mounted "folders" (navigation) and "trays" (toolbars).
    - **Tablet (768px - 1023px):** Focused document view with collapsible folder tabs.
    - **Mobile (<767px):** Single-column "stack" where the document fills the width, and mahogany elements appear only as headers/footers.

## Elevation & Depth

Hierarchy is established through physical distance from the desk surface, expressed via complex shadowing:

1.  **Level 0 (The Desk):** Deep mahogany wood grain texture. No shadows.
2.  **Level 1 (Folders & Portfolios):** Manila or leather textures with 4px soft drop shadows and 1px light-colored top-edge highlights (rim lighting).
3.  **Level 2 (The Paper):** Crisp white texture with a 12px diffuse shadow to make it appear slightly lifted.
4.  **Level 3 (UI Tools/Buttons):** 3D-embossed elements. 
    - **Raised:** 2px bright top-left bevel and 2px dark bottom-right shadow.
    - **Pressed:** Inset shadow (inner shadow) of 3px with no external drop shadow, simulating a physical click.
5.  **Level 4 (Floating Overlays):** Modal windows appear as "clipboards" with heavy 24px shadows and slight rotation (2-3 degrees) to feel "tossed" onto the desk.

## Shapes

The shape language reflects manufactured physical objects. 

- **Paper & Folders:** Use `roundedness: 1` (0.25rem) to mimic the slightly rounded corners of die-cut cardstock and paper sheets.
- **Buttons:** Action buttons should be more aggressive. Small buttons mimic rubber stamps (square with slight rounding), while navigation elements mimic folder tabs (top-only rounding).
- **Inlays:** Input fields are "carved" into the paper, using sharp 90-degree corners or minimal rounding to suggest they are slots for data.
- **Metallic Accents:** Paperclips and staples should use `roundedness: 3` (pill-shaped) to reflect bent wire.

## Components

### Buttons
- **Primary:** Designed as "Rubber Stamps." Heavy 3D base, glossy top. When hovered, the "stamp" lifts (shadow grows). When clicked, it moves down (inner shadow appears).
- **Secondary:** Designed as "Metallic Clips." High-shine chrome finish with a linear gradient and a tiny hard drop shadow.

### Input Fields
Inputs are "indented" into the paper surface. Use a `1px` dark gray inner shadow at the top and a `1px` white outer glow at the bottom to create a "carved" effect. The background should be 5% darker than the document paper.

### Cards & Containers
- **The Portfolio:** A leather-textured container with a visible "stitched" border (dashed 1px stroke in a lighter brown).
- **Manila Tabs:** Used for navigation. They should overlap the main container with a subtle shadow falling from the top tab onto the surface below.

### Selection Controls
- **Checkboxes:** Mimic "Checkmarks" drawn with a blue ink pen. The box itself is a slightly recessed square.
- **Radio Buttons:** Mimic "Push Pins" or "Tacks." Round, 3D spheres with a pinpoint highlight in the upper left.

### Lists
Lists are separated by "perforated lines" (dotted light-gray borders) rather than solid lines, mimicking tear-off notepad sheets.