# Cliente: Personal

Trabajo personal de marca propia (Daniel Montoya). La línea gráfica se llama **El Cisne Negro**.

## Marca propia: El Cisne Negro

Todos los assets de marca viven dentro de esta carpeta:

- `Logos/` — principales (`Logo principal _8.svg` oscuro, `_9.svg` claro, `_1.svg` con fondo) + secundarios
- `Tipografias/Outfit/` y `Tipografias/Lora/`
- `Texturas/` (1–6.png, pre-mapeadas abajo)
- `Brand Manual/`
- `Brand Manual/Colores/`

### Paleta

| Nombre | Hex | Rol |
|---|---|---|
| Light Cream | `#FEF3D9` | Base clara, aperturas, lectura |
| Rich Black | `#0E0A07` | Base oscura, alto contraste, cierres |
| Rust | `#9B4421` | Acento cálido, énfasis, oportunidad |
| Olive Drab | `#676545` | Soporte editorial, contexto |
| Charcoal Blue | `#233548` | Institucional, análisis, datos |

No más de 3 colores de paleta por slide. Sin degradados ni sombras fuera de paleta.

### Tipografías

- **Outfit**: titulares, subtítulos, métricas, navegación, UI (pesos 500–800).
- **Lora**: párrafos editoriales, citas, introducciones premium (pesos 400–500).
- No mezclar familias adicionales.

### Texturas (mapa de uso)

| Archivo | Base | Logo recomendado |
|---|---|---|
| `1.png` | Light Cream grano suave | Logo oscuro (`_8`) |
| `2.png` | Rich Black grano suave | Logo claro (`_9`) |
| `3.png` | Charcoal Blue grano suave | Logo claro (`_9`) |
| `4.png` | Rust grano suave | Logo claro (`_9`) |
| `5.png` | Light Cream variación cálida | Logo oscuro (`_8`) |
| `6.png` | Olive Drab grano suave | Logo claro (`_9`) |

### Logos (regla de contraste)

- Fondo claro → `Logo principal _8.svg` (oscuro)
- Fondo oscuro → `Logo principal _9.svg` (claro)
- Nunca recolorear, deformar, rotar o aplicar filtros.
- Portada y cierre obligatorios con logo principal.

### Tono editorial

Profesional, consultivo, estratégico, seguro, claro. Orientado a resultados, voz de experto en marketing digital.

## Categorías activas

- `Contenido/`
- `Presentaciones/`

## Presentaciones existentes

- `Presentaciones/el-cisne-negro/` — resumen editorial del libro de Taleb. Rutas: `../../Tipografias/...`, `../../Logos/...`, `../../Texturas/...`.

## Notas

- El sitio web `danmonmarketing.xyz` se sirve desde la **raíz del repo** (`~/Desktop/AI/index.html`), no desde esta carpeta.
- Assets de marca se referencian subiendo 2 niveles desde `Presentaciones/{pieza}/`.
