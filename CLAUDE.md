# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Naturaleza del workspace

`~/Desktop/AI` es un **workspace orientado a cliente** con un **repo git único** en la raíz (`sitiopersonal`). Todo cambio relevante se commitea desde esta raíz — no hay subrepos.

La estructura es un solo eje: **`Clientes/`** — un directorio por cliente, agrupando todas sus acciones (Contenido, Diseño, Presentaciones, Newsletter, Blogs) y sus propios assets de marca (Logos, Tipografias, Imagenes, Brand Manual, Texturas). Cuando trabajas para un cliente, todo su contexto vive bajo `Clientes/{cliente}/`.

Cada cliente tiene su marca integrada. No mezclar el sistema visual de un cliente con el de otro — es un error de marca, no un detalle cosmético.

## Clientes

| Cliente | Categorías activas | CLAUDE.md |
|---|---|---|
| `Clientes/Adquisicion/` | Contenido, Diseño, Newsletter, Presentaciones | `Clientes/Adquisicion/CLAUDE.md` (marca Básica integrada) |
| `Clientes/Personal/` | Contenido, Presentaciones | `Clientes/Personal/CLAUDE.md` (marca El Cisne Negro integrada) |
| `Clientes/Multiequipos/` | Contenido, Diseño | `Clientes/Multiequipos/CLAUDE.md` (marca Multiequipos integrada) |
| `Clientes/HPTU/` | Presentaciones | `Clientes/HPTU/CLAUDE.md` |
| `Clientes/Sempli/` | Contenido, Diseño, Presentaciones | `Clientes/Sempli/CLAUDE.md` |
| `Clientes/Wangari/` | Contenido, Diseño | — |
| `Clientes/IHD/` | Contenido, Diseño, Blogs | — |
| `Clientes/Inteccon-US/` | Contenido, Diseño, Blogs | — |
| `Clientes/Inteccon-Espana/` | Contenido, Diseño, Blogs | — |
| `Clientes/Has-Environmental/` | Contenido, Diseño, Blogs | — |

Clientes con marca definida: **Adquisicion** (Básica), **Personal** (El Cisne Negro), **Multiequipos** (Multiequipos). Los demás tienen las 5 carpetas de assets creadas pero vacías — pregunta antes de elegir un sistema visual para ellos.

## Carpetas estándar de assets por cliente

Todos los clientes tienen estas 5 carpetas (pobladas o con `.gitkeep`):

- `Logos/`
- `Tipografias/`
- `Imagenes/`
- `Brand Manual/`
- `Texturas/`

## Cómo trabajar en este workspace

1. **Identifica el cliente** — ¿en qué carpeta de `Clientes/` cae el trabajo? Si no es obvio, pregunta.
2. **Lee el CLAUDE.md del cliente** (si existe) — tiene la guía de marca completa, categorías activas, notas específicas.
3. **No mezcles sistemas visuales** — colores de Multiequipos no van en piezas de Personal, etc.

## Reglas globales del workspace

- **Dominio principal**: `danmonmarketing.xyz`, alojado en **Vercel** desde la raíz del repo (sin `vercel.json`, deploy directo del árbol).
- **Subdominio n8n**: `n8n.danmonmarketing.xyz`.
- **Git único en la raíz**: todo commit/push se hace desde `~/Desktop/AI` directamente. No `cd` a subcarpetas para git.
- **Estilos por defecto**: cuando un cliente nuevo no tiene marca definida, usa como referencia `Clientes/Personal/CLAUDE.md` (El Cisne Negro).
- **Entregar URL al terminar una presentación**: cada vez que termines de crear una presentación (carpeta con `index.html` + `styles.css` + `script.js` opcional dentro de `Clientes/{cliente}/Presentaciones/`), proporciona la URL pública como última línea de tu respuesta en formato:
  
  `https://danmonmarketing.xyz/Clientes/{cliente}/Presentaciones/{nombre-presentacion}/`
  
  No es necesario dar URL para otros tipos de archivos.

## Arquitectura común de presentaciones

Toda presentación HTML del workspace, sin importar cliente, sigue estas convenciones:

- **Una carpeta por presentación** dentro de `Clientes/{cliente}/Presentaciones/`, nombre en `kebab-case`.
- **Estructura fija**: `index.html` + `styles.css` + `script.js` (opcional) + `assets/` (opcional, solo para recursos específicos de esa pieza).
- **Assets de marca** se referencian con ruta relativa **subiendo dos niveles** hasta la carpeta del cliente:
  - `../../Tipografias/...` — fuentes locales cargadas con `@font-face`
  - `../../Texturas/...` — fondos resueltos, usar con `background-size: cover`
  - `../../Logos/...` — SVGs o PNGs, elegir variante por contraste real con el fondo
  - `../../Brand Manual/...` — PDF de referencia obligatoria
- **Formato de slide**: `100vw` × `100svh`, navegación horizontal, un solo viewport por slide, sin scroll vertical como experiencia principal. Si una idea no cabe, se convierte en slide nuevo — no se comprime.
- **Logo en apertura y cierre** de toda presentación, elegido por contraste con el fondo (nunca por preferencia estética, nunca dentro de cajas o tarjetas decorativas, nunca recoloreado/rotado/deformado).
- **Responsive obligatorio**: toda presentación debe funcionar en mobile (≤560px), tablet (≤900px) y desktop. Reglas mínimas:
  - Layouts `split` (dos columnas) colapsan a columna única en tablet/mobile con `flex-direction: column`.
  - Grids de 3–4 columnas se reducen a 1–2 columnas en mobile.
  - Tablas anchas (más de 4 columnas) reciben `display: block; overflow-x: auto` en mobile.
  - Tipografía usa `clamp()` en todos los tamaños para escalar fluidamente.
  - `script.js` incluye siempre soporte de swipe táctil (touchstart/touchend, umbral mínimo 40px, solo si el desplazamiento es más horizontal que vertical).
  - El QA con Playwright cubre al menos viewport mobile 375×812 además del desktop 1440×810.
- **QA visual con Playwright** antes de cerrar: servir vía `python3 -m http.server 8000` desde la raíz del workspace (Playwright no lee `file://`), navegar a `http://localhost:8000/Clientes/{cliente}/Presentaciones/{pieza}/`, screenshot, iterar.
- **Revisión de tildes y ortografía** antes de dar cualquier presentación por terminada.

**Excepción autocontenida**: si una presentación necesita assets aislados, puede mantener su propio `assets/brand/` interno y referenciar con `./assets/...` en lugar de subir al cliente. Ejemplo: `Clientes/Sempli/Presentaciones/analisis-rendimiento-sempli/`.

## Reglas cuando edites código en este workspace

- **Respeta la guía de marca**: antes de editar una pieza, lee `Clientes/{cliente}/CLAUDE.md` — son las reglas autoritativas con tablas de color/logo/textura.
- **No mezcles sistemas visuales**: cada marca es cerrada. Si dudas, pregunta qué marca aplica.
- **Git desde la raíz**: `git status`, `git commit`, `git push` se ejecutan desde `~/Desktop/AI`. Hay un solo repo.
- **Playwright sobre HTTP, no `file://`**: servir vía `python3 -m http.server 8000` desde la raíz para que las rutas `Clientes/.../Presentaciones/...` resuelvan correctamente.
- **Antes de cerrar cualquier presentación**: correr el checklist de la marca (contraste de logo, viewport completo sin scroll vertical, paleta oficial, tildes/ortografía revisadas, **QA responsive en mobile 375px**) y commit registrado en la raíz.

## Carpetas auxiliares

- `index.html`, `styles.css`, `script.js`, `assets/` en la raíz: sitio web personal de `danmonmarketing.xyz` (deploy directo Vercel). **No mover** — Vercel apunta a la raíz.
- `N8N/`, `Recopilacion noticias/`: scaffolds vacíos para iniciativas pendientes.
- `CLAUDE.MD.rtf`: notas originales del usuario sobre el workspace, preservadas como referencia histórica.
