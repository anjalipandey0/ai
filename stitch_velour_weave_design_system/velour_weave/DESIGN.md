---
name: Velour & Weave
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#444749'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0f0'
  outline: '#74777a'
  outline-variant: '#c4c7c9'
  surface-tint: '#5c5f61'
  primary: '#010203'
  on-primary: '#ffffff'
  primary-container: '#1a1d1f'
  on-primary-container: '#828587'
  inverse-primary: '#c5c7c9'
  secondary: '#5f5e59'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2db'
  on-secondary-container: '#65645f'
  tertiary: '#040200'
  on-tertiary: '#ffffff'
  tertiary-container: '#251b09'
  on-tertiary-container: '#92836a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e2e5'
  primary-fixed-dim: '#c5c7c9'
  on-primary-fixed: '#191c1e'
  on-primary-fixed-variant: '#444749'
  secondary-fixed: '#e5e2db'
  secondary-fixed-dim: '#c9c6c0'
  on-secondary-fixed: '#1c1c18'
  on-secondary-fixed-variant: '#474742'
  tertiary-fixed: '#f3e0c3'
  tertiary-fixed-dim: '#d6c4a8'
  on-tertiary-fixed: '#241a08'
  on-tertiary-fixed-variant: '#524530'
  background: '#fcf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 84px
    fontWeight: '600'
    lineHeight: 92px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '500'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 38px
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
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
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 128px
---

## Brand & Style

The design system is rooted in the intersection of traditional craftsmanship and modern editorial luxury. It targets high-end interior designers and textile connoisseurs who value tactile quality and heritage. 

The visual style is a blend of **Minimalism** and **High-Contrast Bold**. It utilizes expansive negative space to allow textile textures to breathe, while employing aggressive typographic scales to establish a confident, authoritative presence. The aesthetic is immersive and sophisticated, favoring large-scale imagery and a "digital-showroom" feel that prioritizes sensory perception over functional density.

## Colors

The palette is a curated selection of organic, architectural tones. 

- **Deep Slate (#1A1D1F):** Used for primary text and structural grounding. It provides a softer, more premium contrast than pure black.
- **Warm Ivory (#F4F1EA):** The canvas color. It replaces standard white to provide a warmer, more tactile "paper" feel.
- **Raw Jute (#C9B79C):** An accent color used sparingly for subtle highlights, active states, or secondary UI elements to evoke natural fiber.
- **Charcoal (#2D2D2D):** Used for secondary text and borders to maintain high legibility without the harshness of the primary slate.

Color application should follow a 70/20/10 ratio, where Warm Ivory dominates the background to maintain an airy, editorial atmosphere.

## Typography

This design system relies on extreme typographic contrast. 

- **Display & Headlines:** Use **Bodoni Moda**. Its high-contrast strokes and elegant serifs evoke fashion editorial and luxury heritage. Large headlines should use negative letter-spacing for a tighter, more modern look.
- **Body & UI:** Use **Inter**. It provides a functional, systematic counterpoint to the decorative serif. 
- **Labels:** Use Inter in uppercase with generous letter-spacing to denote categories, metadata, or breadcrumbs.

Typography is the primary driver of hierarchy; skip sizes between levels to create a dramatic, intentional flow.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model with a massive emphasis on negative space.

- **Desktop:** 12-column grid, 1440px max-width, 32px gutters. Large 64px external margins provide a "framed" appearance.
- **Mobile:** 4-column grid, 20px margins.
- **Editorial Spacing:** Sections should be separated by large vertical gaps (up to 128px) to signify a shift in the textile story. Elements should often be offset from the grid to create an asymmetrical, custom-designed feel.

Avoid dense clusters of information. If a section feels crowded, increase the padding-top/bottom rather than reducing content.

## Elevation & Depth

Hierarchy is established through **Ambient Shadows** and **Tonal Layers** rather than physical stacking.

- **Surface Treatment:** Backgrounds use the Warm Ivory base. Higher-level surfaces (like modals or floating cards) should use the same color but be defined by extremely diffused, large-radius shadows (e.g., 40px blur, 5% opacity Deep Slate).
- **Tactile Shadows:** For textile swatches and product imagery, use a "product shadow"—a soft, slightly offset shadow that gives the image a sense of physical weight on the page.
- **Interaction Depth:** On hover, cards should subtly lift using a transition that increases shadow spread while slightly scaling the image inside the container.

## Shapes

The design system uses a **Sharp (0)** roundedness level. 

Luxury and high-end fashion aesthetics are historically associated with crisp, architectural lines. All buttons, image containers, input fields, and cards must have 0px corner radii. This creates a rigorous, structured look that contrasts beautifully with the organic textures of the textile imagery.

## Components

- **Buttons:** Primary buttons are solid Deep Slate with Ivory text. No rounded corners. Secondary buttons use a 1px Charcoal border with no fill. All buttons feature a 300ms transition where the background color subtly shifts toward Raw Jute on hover.
- **Cards:** Large imagery is the focal point. Use 1px thin borders (#D1CECA) to define boundaries without adding visual weight. Text labels on cards should be set in Label-Caps above the headline.
- **Input Fields:** Minimalist design with only a bottom border (1px Charcoal). Labels float above the field in Inter 12px. Focus state changes the bottom border to 2px Deep Slate.
- **Textile Chips:** Small rectangular swatches used for color filtering. They should be presented in a horizontal scroll or grid with minimal labeling.
- **Lists:** Use wide spacing between list items (24px) with a subtle horizontal rule (0.5px Charcoal, 20% opacity) separating them to maintain an organized, premium look.
- **Image Overlays:** When text appears over imagery, use a subtle gradient overlay (20% opacity Deep Slate) to ensure the high-contrast typography remains legible without obscuring the fabric detail.