# Cliente: Multiequipos

Multiequipos es un cliente de **diseño gráfico** (no presentaciones) que genera posts sociales en HTML y los exporta como PNG usando Playwright.

## Marca propia: Multiequipos

Todos los assets de marca viven dentro de esta carpeta:

- `Logos/logo-1/` (versión horizontal) y `Logos/logo-2/` (versión apilada)
- `Tipografias/Jost-VariableFont_wght.ttf` y `Jost-Italic-VariableFont_wght.ttf`
- `Brand Manual/Manual de Uso - MULTIEQUIPOS.pdf` — referencia obligatoria
- `Imagenes/` — 5 fotos stock de construcción catalogadas abajo
- `Texturas/` — vacía por ahora

### Paleta

| Role | Name | HEX |
|------|------|-----|
| Primary | White | `#ffffff` |
| Primary | Dark Gray | `#393939` |
| Primary | Yellow | `#f8af02` |
| Secondary | Gray | `#b3b3b3` |
| Complementary | Red | `#de1f14` (usar muy poco) |

### Tipografía

- **Jost**: familia principal (sans-serif, moderna, variable weight).
- **Bebas Neue**: secundaria para headlines de impacto — **no incluida en fonts**, sustituir con Jost 800+.

### Logo en fondos (regla crítica)

| Fondo | Tratamiento |
|-------|-------------|
| Blanco/claro | Logo full color (icono amarillo + texto oscuro) |
| Amarillo `#f8af02` | **Logo blanco** (icono + texto blancos) |
| Oscuro `#393939` | Logo full color (icono amarillo + texto **blanco**) |
| Rojo `#de1f14` | **Logo blanco** |

**Nunca** usar `filter: brightness(0) invert(1)` ni forzar color con CSS — usar la versión correcta del archivo.

### Patrón de marca

Teselado del cubo ME — **nunca hexágonos ni honeycomb**. Aplicar a baja opacidad como textura de fondo.

### Fotos stock (`Imagenes/`)

- `pexels-rezwan-1078884.jpg` — Excavadora naranja (hero/equipment)
- `pexels-yury-kim-181374-585419.jpg` — Trabajador con casco (services/team)
- `pexels-yury-kim-181374-585418.jpg` — Silueta sunset con grúa (inspirational)
- `pexels-pixabay-159358.jpg` — Vista aérea obra (trust/scale)
- `pexels-life-of-pix-2489.jpg` — Cargador amarillo (equipment focus)

## Categorías activas

- `Contenido/` — copys, briefs, calendarización
- `Diseño/` — piezas gráficas:
  - `Diseño/Products/` — catálogo de productos (37+ PNGs de equipos)
  - `Diseño/example/` — referencia visual de post temático
  - `Diseño/output/` — `posts.html` + PNGs exportados

## Tamaños soportados

Solo estos tres: **`1080x1080`**, **`1080x1920`**, **`1080x1350`**. El usuario debe especificar uno antes de empezar.

## Workflow obligatorio

1. **Leer la marca**: abrir este CLAUDE.md y, si es la primera vez en sesión, también `Brand Manual/Manual de Uso - MULTIEQUIPOS.pdf`.
2. **Elegir fotografía base** desde `Imagenes/`.
3. **Si el usuario menciona un producto**, revisar `Diseño/Products/` y colocarlo en la pieza.
4. **Confirmar tamaño exacto** con el usuario.
5. **Servir vía HTTP**: `python3 -m http.server 8000` desde `~/Desktop/AI`. Playwright no lee `file://`.
6. **Screenshot con Playwright**: navegar a `http://localhost:8000/Clientes/Multiequipos/Diseño/output/posts.html`.
7. **Iterar visualmente** hasta calidad producción.
8. **Verificar antes de cerrar**:
   - Patrón correcto (teselado ME, **nunca hexágonos**).
   - Logo correcto según fondo (ver tabla arriba).
   - Colores estrictamente dentro de paleta.
   - Tamaño exacto solicitado.
   - Producto presente cuando el usuario lo pidió.

## Outputs en `Diseño/output/`

- `posts.html` — fuente HTML editable.
- `post-{N}.png` — screenshots individuales.
- `full-preview.png` — preview general.
