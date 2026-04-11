# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Naturaleza del workspace

`~/Desktop/AI` **no** es un repositorio git único — es un workspace que agrupa varios proyectos independientes de diseño y automatización. Cada subproyecto tiene su propio sistema de marca, sus propias reglas y, en varios casos, su propio repositorio git. Antes de trabajar, identifica en qué subproyecto estás y carga el CLAUDE.md o agents.md que vive dentro de él — las reglas de marca no son intercambiables.

Subproyectos actuales:

| Carpeta | Propósito | Guía de marca autoritativa | Git |
|---|---|---|---|
| `demo-2/` | Agente generador de posts sociales para **Multiequipos** (alquiler de equipos de construcción, Oriente Antioqueño). HTML + Playwright. | `demo-2/CLAUDE.md` | Sin repo propio |
| `Presentaciones/Personal/` | Presentaciones HTML para la marca **El Cisne Negro** (editorial premium, paleta cálida, Outfit + Lora). | `Presentaciones/Personal/CLAUDE.md` | Repo propio |
| `Presentaciones/Basica/` | Presentaciones HTML para la marca **Básica** (turquesa + gris oscuro, Helvetica Neue). | `Presentaciones/Basica/agents.md` | Repo propio |
| `N8N/`, `Recopilacion noticias/` | Carpetas scaffold vacías. | — | — |

Cuando el usuario pide "una presentación" sin especificar marca, pregunta si va para **Personal (El Cisne Negro)** o **Básica** — son dos sistemas gráficos completamente distintos y mezclarlos es un error de marca, no un detalle cosmético.

## Reglas globales del workspace (desde `CLAUDE.MD.rtf`)

- **Dominio principal**: `danmonmarketing.xyz`, alojado en **Vercel**.
- **Subdominio n8n**: `n8n.danmonmarketing.xyz`.
- **Git obligatorio**: todo cambio relevante debe ir a commit y push en GitHub en el repo del subproyecto correspondiente. No hay repo en la raíz, así que los commits viven en `Presentaciones/Personal/`, `Presentaciones/Basica/`, etc.
- **Estilos gráficos por defecto**: cuando un proyecto nuevo no define su propio sistema visual, usa como referencia `Presentaciones/Personal/CLAUDE.md` (sistema El Cisne Negro).

## Arquitectura de los subproyectos de presentaciones

Ambos proyectos (`Personal/` y `Basica/`) comparten la misma arquitectura y convenciones — la única diferencia real es la marca. Entender un proyecto te permite trabajar en el otro:

- **Una carpeta por presentación** en la raíz del subproyecto, nombre en `kebab-case` (ej. `el-cisne-negro/`, `analisis-rendimiento-sempli/`).
- **Estructura fija** dentro de cada presentación: `index.html` + `styles.css` + `script.js` (opcional) + `assets/` (opcional, solo para recursos específicos de esa pieza).
- **Assets maestros compartidos** viven en la raíz del subproyecto y se referencian con rutas relativas desde cada presentación:
  - `../Tipografías/...` — fuentes locales cargadas con `@font-face`
  - `../Texturas/...` — fondos `1920x1080` ya resueltos, usar con `background-size: cover`
  - `../Logos/...` — SVGs o PNGs, elegir variante por contraste real con el fondo
  - `../Colores/...` — referencia visual de paleta
  - `../Brand Manual/` — PDF de referencia obligatoria de marca
- **Formato de slide**: `100vw` × `100svh`, navegación horizontal, un solo viewport por slide, sin scroll vertical como experiencia principal. Si una idea no cabe, se convierte en slide nuevo — no se comprime.
- **Logo en apertura y cierre** de toda presentación, elegido por contraste con el fondo (nunca por preferencia estética, nunca dentro de cajas o tarjetas decorativas, nunca recoloreado/rotado/deformado).
- **QA visual con Playwright** antes de cerrar: servir vía `python3 -m http.server` (Playwright no lee `file://`), navegar, screenshot, iterar. El proyecto `Basica` documenta esto explícitamente como paso obligatorio.
- **Revisión de tildes y ortografía** antes de dar cualquier presentación por terminada — está en los checklists de ambos proyectos.

### Sistemas de marca (no intercambiables)

**El Cisne Negro** (`Presentaciones/Personal/`):
- Paleta: Light Cream `#FEF3D9`, Rich Black `#0E0A07`, Rust `#9B4421`, Olive Drab `#676545`, Charcoal Blue `#233548`.
- Tipografías: **Outfit** (titulares/UI, pesos 500–800) + **Lora** (cuerpo editorial, 400–500). Variable fonts en `Tipografías/Outfit/` y `Tipografías/Lora/`.
- Logos: `Logo principal _8.svg` (oscuro, sobre fondos claros) / `Logo principal _9.svg` (claro, sobre fondos oscuros) / `Logo principal _1.svg` (con fondo incorporado para casos ambiguos). Secundarios equivalentes para firmas discretas.
- Texturas 1–6 están pre-mapeadas a color base + logo recomendado en `Presentaciones/Personal/CLAUDE.md` — consultar esa tabla antes de elegir textura.
- Tono: editorial, consultivo, ejecutivo, no grandilocuente.

**Básica** (`Presentaciones/Basica/`):
- Paleta: `#EEEEEE`, `#27D1D4` (acento/CTA), `#393939` (texto y autoridad). Solo estos tres colores — nada de degradados o sombras fuera de paleta.
- Tipografía: **Helvetica Neue** (`Tipografías/HelveticaNeue.ttc`) en todos los niveles, contraste por pesos, sin familias adicionales.
- Logos: `Copia de Logo basica...-02.png` (oscuro, sobre `#EEEEEE`) / `Logo basica...-03.png` (claro, sobre `#393939`). Sobre fondos sólidos únicamente, nunca dentro de cajas.
- Referencia activa: `Brand Manual/Manual basica.pdf` antes de cualquier decisión de layout.

## Arquitectura de `demo-2/` (Multiequipos)

Este es un agente de diseño gráfico, no presentaciones. Genera posts sociales en HTML y los exporta como PNG usando Playwright. Flujo ya establecido:

1. Leer el manual de marca de Multiequipos (`brand-manual/`) para colores, tipos, reglas de logo, patrones.
2. Elegir fotografía base desde `input-media/` (hay 5 imágenes stock catalogadas en `demo-2/CLAUDE.md` con su uso recomendado).
3. Si el usuario menciona un producto, consultar `Products/` y colocar ese producto dentro de la pieza.
4. Construir el post en HTML al tamaño exacto solicitado: **`1080x1080`, `1080x1920` o `1080x1350`** (son los únicos soportados).
5. Servir vía `python3 -m http.server` y usar Playwright para screenshots individuales y `full-preview.png`.
6. Iterar visualmente hasta calidad producción.

Detalles críticos de marca Multiequipos (ver `demo-2/CLAUDE.md` para la tabla completa):

- Paleta: White, Dark Gray `#393939`, Yellow `#f8af02` (acento primario — CTAs, barras, números), Secondary Gray `#b3b3b3`, Red `#de1f14` (complementario, **uso muy escaso**: pequeñas barras, highlights de URL).
- Logo: 6 versiones oficiales. Sobre fondo amarillo usar **versión blanca**, sobre fondo oscuro usar **color completo con texto blanco**, sobre blanco usar color completo. No forzar colores con filtros CSS (`filter: brightness(0) invert(1)` está marcado como bug conocido en posts).
- Patrón de marca: teselado del monograma-cubo ME, **nunca hexágonos/honeycomb** — confundirlos es error de marca documentado.
- Bebas Neue no está incluida en `fonts/`; sustituir con Jost 800+.
- Outputs esperados en `output/`: `posts.html` editable + `post-{N}.png` por pieza + `full-preview.png`.

## Reglas cuando edites código en este workspace

- **Respeta la guía del subproyecto**: antes de editar en `demo-2/`, `Presentaciones/Personal/` o `Presentaciones/Basica/`, lee el CLAUDE.md o agents.md que vive ahí — son las reglas de marca autoritativas y tienen tablas de color/logo/textura específicas que este documento no repite.
- **No mezcles sistemas visuales**: colores de Multiequipos no van en presentaciones de El Cisne Negro, etc. Cada marca es cerrada.
- **Git va al repo correcto**: `cd` al subproyecto antes de `git status`/commit/push. No hay repo raíz en `~/Desktop/AI`.
- **Playwright sobre HTTP, no `file://`**: ambos sistemas de presentaciones y demo-2 requieren servir vía `python3 -m http.server` para que Playwright pueda navegar.
- **Antes de cerrar cualquier presentación**: correr el checklist del agents.md/CLAUDE.md del subproyecto (contraste de logo, viewport completo sin scroll vertical, paleta oficial, tildes/ortografía revisadas, commit registrado).
