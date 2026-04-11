# Multiequipos Graphic Design Agent

## Purpose of this project
Create an agent that creates content using a series of images from input-media/ using the styles from the brand manual and the fonts from fonts/ creates valuable posts for social media, must use the playwright skill to see that the content is right and always iterate to make it production ready.

If the user mentions a specific product, the agent must include that product inside the piece and use the visual references from `Products/` to guide the composition and product treatment.

The agent must always respect the size specified by the user for each piece. Supported formats are `1080x1080`, `1080x1920`, and `1080x1350`.

## Brand: Multiequipos
- **Industry**: Construction equipment rental (arrendamiento de equipos para la construccion)
- **Location**: Oriente Antioqueno, Colombia
- **Founded**: December 13, 2016
- **Slogan**: "Somos el mejor equipo para tu obra"
- **Website**: www.multiequipos.com.co
- **Brand values**:
  - .01 JUSTO — "Los equipos que son" (the right equipment)
  - .02 PUNTUAL — "Al tiempo que es" (on-time delivery)
  - .03 EXCELENTE — "En excelente estado" (excellent condition)

---

## Brand Colors (exact from manual page 14)

| Role | Name | HEX | RGB | CMYK |
|------|------|-----|-----|------|
| Primary | White | `#ffffff` | (255, 255, 255) | (0%, 0%, 0%, 0%) |
| Primary | Dark Gray | `#393939` | (57, 57, 57) | (67%, 58%, 55%, 62%) |
| Primary | Yellow | `#f8af02` | (248, 175, 2) | (1%, 36%, 95%, 0%) |
| Secondary | Gray | `#b3b3b3` | (179, 179, 179) | (33%, 24%, 26%, 4%) |
| Complementary | Red | `#de1f14` | (222, 31, 20) | (3%, 96%, 98%, 1%) |

**Color usage rules:**
- Yellow `#f8af02` is the primary brand accent — use for highlights, CTAs, accent bars, numbers
- Dark `#393939` is used for dark backgrounds and primary text on light backgrounds
- Red `#de1f14` is complementary — use VERY sparingly (small accent bars, website URL highlights)
- Gray `#b3b3b3` for secondary/subtle text, borders
- Each color has approved tints at 100%, 80%, 60%, 40%, 20% opacity

---

## Typography (manual pages 16-17)

### Primary: Jost Font Family
- Sans-serif, modern, variable weight, clean lines
- Use for: body text, subtitles, general communications, titles
- Transmits: professionalism, trust, precision
- Files available: `fonts/Jost-VariableFont_wght.ttf`, `fonts/Jost-Italic-VariableFont_wght.ttf`

### Secondary: Bebas Neue Font Family
- Sans-serif, condensed, bold, strong
- Use for: headlines, impact titles, key phrases, featured information
- Transmits: security, energy, character
- **NOT included in fonts/ directory — must be sourced externally or substituted with Jost 800+ weight**

---

## Logo (manual pages 03-12)

### Logo Symbol
- 3D monogram fusing "M" (top) and "E" (side) into a cube shape
- Represents: strength, structure, precision, stability, structural support
- Colors: yellow `#f8af02` + dark `#393939` creating 3D depth

### 6 Official Versions (manual page 07)
| Version | Layout | Description |
|---------|--------|-------------|
| V1 | Stacked + slogan | Icon on top → "MULTIEQUIPOS" → "SOMOS EL MEJOR EQUIPO PARA TU OBRA" |
| V2 | Horizontal + slogan | Icon left → "MULTI EQUIPOS" right → slogan below text |
| V3 | Icon only | Just the ME cube monogram, no text |
| V4 | Stacked no slogan | Icon on top → "MULTIEQUIPOS" below |
| V5 | Horizontal no slogan | Icon left → "MULTI EQUIPOS" right |
| V6 | Horizontal compact | Icon left → "MULTI EQUIPOS" right (smaller) |

### Available Logo Files
- `logo-1/FA934584-...export.png` → Horizontal version (V2/V5 style): icon + "MULTI EQUIPOS" side by side
- `logo-2/44CAFBBE-...export.png` → Stacked version (V1/V4 style): icon on top + "MULTIEQUIPOS" below

### Logo on Backgrounds (manual page 10) — CRITICAL
| Background | Logo Treatment |
|------------|---------------|
| White / light | Full color logo (yellow icon + dark text) |
| Yellow `#f8af02` | **White version** (white icon + white text) |
| Dark / black `#393939` | Full color logo (yellow icon + **white** text) |
| Red `#de1f14` | **White version** (white icon + white text) |
| Grayscale positive | Gray logo on white |
| Grayscale negative | Silver/gray logo on black |

### Safety Area (manual page 05)
- Minimum clear space around logo = X, where X = width of the "M" letter in the monogram
- No graphic elements may intrude into this zone

### Logo DON'Ts (manual page 12)
1. **No off-palette colors** — never recolor with non-brand colors (e.g., purple)
2. **No element modification** — never rearrange or alter the logo components
3. **No rotation/tilting** — never present the logo at any angle
4. **No stretching/compressing** — always maintain original proportions from source files

---

## Brand Patterns (manual pages 21-22) — IMPORTANT

**The brand pattern is a tessellation of the ME cube monogram — NOT hexagons or honeycomb.**

- The pattern is a repeating grid of the 3D ME logo shape creating a seamless texture
- Evokes "atomic structures, reinforcing the concept of origin and technology"
- Used as background or accent to add depth WITHOUT distracting from main content
- **3 color variants:**
  - Yellow/cream variant — for light/warm backgrounds
  - Dark gray variant — for dark backgrounds (subtle tone-on-tone)
  - White/light gray variant — for clean/white backgrounds
- Apply at low opacity as texture, never as the primary visual element

---

## Graphic Resources (manual pages 18-20)

### Construction Icons (page 19)
- Line-style icon set: wrenches, hammers, hard hats, trowels, cranes, bricks, scaffolding, saws, rollers, wheelbarrows, levels, tape measures, etc.
- Style: minimal, consistent stroke weight, outline only

### Arrows (page 20)
- **Minimalist arrows**: geometric, clean (circles, chevrons, directional)
- **Organic arrows**: hand-drawn style, informal

### Highlight Circles (page 20)
- Hand-drawn circle/oval shapes for underlining or highlighting text

---

## Mockups Reference (manual pages 23-30)
- Dark gray polo shirts with horizontal logo (V5) on chest, slogan on back
- Dark gray caps with ME icon (V3) on front, text logo on back
- Construction wall banners: dark `#393939` left + yellow `#f8af02` right split layout
- Banner messaging: "Mas de 10 anos impulsando el progreso" + website in red accent bar

---

## Input Media (stock construction photos)
- `pexels-rezwan-1078884.jpg` — Orange excavator/backhoe against blue sky (great for hero/equipment posts)
- `pexels-yury-kim-181374-585419.jpg` — Worker carrying pipe, orange helmet, close-up (services/team posts)
- `pexels-yury-kim-181374-585418.jpg` — Silhouette of worker at sunset with crane and fire (inspirational posts)
- `pexels-pixabay-159358.jpg` — Aerial view of large construction site, tilt-shift (trust/scale posts)
- `pexels-life-of-pix-2489.jpg` — Yellow front loader bucket on concrete (equipment focus posts)

## Product References
- `Products/` — Product reference assets and visual guides for equipment-specific posts
- If the user names a product, review `Products/` first and include that product clearly inside the composition
- Use the product reference to guide framing, naming, and product emphasis inside the piece

## Example Reference
- `example/` — Construction-themed social media post reference: dark background, yellow accents, diagonal elements, contact info sections, services listed with icons

---

## Design Style Guidelines (derived from brand manual + mockups)
- Dark backgrounds (`#393939`) with white text and yellow `#f8af02` accents
- Yellow accent bars/dividers (thin horizontal lines) to separate sections
- Bold uppercase headlines using Jost 700-800 weight (or Bebas Neue if available)
- Overlay photos with dark gradients to ensure text readability
- **Use ME-cube tessellation pattern as decorative background texture — NOT hexagons**
- Logo placement: top-left or top-right corner with safety area respected
- On dark photo backgrounds: use full-color logo (yellow icon + white text) — never force all-white or all-black via CSS filters
- On yellow backgrounds: use white logo version
- Red used sparingly as small accent bars or URL highlights only
- Slogan can appear as footer text in uppercase with letter-spacing

---

## Output Structure
- `output/posts.html` — Source HTML with all posts (editable, served via local HTTP)
- `output/post-{N}.png` — Individual post screenshots exported at the user-requested size: `1080x1080`, `1080x1920`, or `1080x1350`
- `output/full-preview.png` — Full page preview of all posts

## Workflow
1. Read brand manual PDF for colors, fonts, logo rules, patterns, and style direction
2. View input-media/ images to understand available photography
3. If the user mentions a product, review `Products/` and use that product reference inside the piece
4. Confirm and build the post at the exact size requested by the user: `1080x1080`, `1080x1920`, or `1080x1350`
5. Create posts as HTML using brand styles, fonts, logos, input images, and product references when relevant
6. Serve HTML via `python3 -m http.server` (Playwright cannot access file:// URLs)
7. Use Playwright to navigate, screenshot full page, and capture individual post PNGs
8. Review screenshots visually and iterate until production-ready
9. Verify: correct pattern (ME-cube, not hexagons), correct logo variant per background, correct colors, correct requested size, and product presence when requested

## Known Issues to Fix in Posts
- Post 1: Replace hexagonal SVG pattern with ME-cube tessellation or remove it
- Post 4: Remove `filter: brightness(0) invert(1)` from logo — use full-color logo (yellow icon + white text) on dark photos
- Post 5: Remove `filter: brightness(0) saturate(100%)` from top logo — on yellow background use white version instead
- Bebas Neue font not in fonts/ — currently substituting with Jost heavy weight

      IMPORTANT: this context may or may not be relevant to your tasks. You should not respond to this context unless it is highly relevant to your task.
