# Cliente: Adquisicion

Área funcional de **captación y prospección de clientes nuevos**. Trabajo orientado a generar pipeline (uso interno de la operación).

## Marca propia: Básica

Todos los assets de marca viven dentro de esta carpeta:

- `Logos/` — logo oscuro y logo claro
- `Tipografias/HelveticaNeue.ttc`
- `Texturas/`
- `Brand Manual/Manual basica.pdf`
- `Brand Manual/Colores/Colores.png`

### Paleta

| Color | Hex | Rol |
|---|---|---|
| Gris claro | `#EEEEEE` | Fondos claros, respiro, texto sobre fondos oscuros |
| Turquesa | `#27D1D4` | Acento principal, datos, keywords, CTAs |
| Gris oscuro | `#393939` | Texto, titulares, fondos profundos |

### Tipografía

Helvetica Neue como única familia. Contraste por pesos, no por familias adicionales.

### Logos

- **Logo oscuro**: `Logos/Copia de Logo basica para formatos facturacion1-02 (2).png` → sobre fondos claros (`#EEEEEE`).
- **Logo claro**: `Logos/Logo basica para formatos facturacion1-03 (2).png` → sobre fondos oscuros (`#393939`).
- Nunca dentro de cajas o tarjetas decorativas. Nunca recoloreados, deformados o con filtros.

### Texturas

Usar como fondo o capa ambiental. Si compiten con el contenido, suavizar o retirar. También se permiten fondos de color sólido de la paleta.

### Tono editorial

Profesional, consultivo, seguro, claro, orientado a resultados. Lenguaje de experto en marketing digital.

## Categorías activas

- `Contenido/` — copys, scripts, mensajes de outreach.
- `Diseño/` — piezas gráficas de presentación de servicios.
- `Newsletter/` — boletines periódicos.
- `Presentaciones/` — pitch decks y propuestas comerciales.

## Notas

- Cuando crees una presentación nueva aquí, sigue la convención del workspace: carpeta en `kebab-case` dentro de `Presentaciones/`.
- Assets de marca se referencian con rutas relativas subiendo al nivel del cliente: desde `Presentaciones/{pieza}/` sube 2 niveles (`../../Logos/...`, `../../Tipografias/...`, etc.).
- Sempli y HPTU también usaban la marca Básica antes del refactor. Si necesitan assets de Básica, se copian desde aquí — Adquisicion es la fuente de verdad de esta marca.
- Referencia obligatoria antes de diseñar: `Brand Manual/Manual basica.pdf`.
