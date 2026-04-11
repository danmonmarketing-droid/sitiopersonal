# Guía Maestra para Generar Presentaciones HTML

Este documento define las reglas obligatorias para crear presentaciones HTML dentro de este proyecto. Su función es asegurar consistencia visual, coherencia de marca y un estándar de ejecución profesional con criterio de marketing digital.

## 1. Reglas no negociables

- Toda presentación debe construirse en HTML.
- Cada presentación debe existir dentro de su propia carpeta individual.
- Cada slide debe ocupar un solo viewport horizontal completo.
- No debe haber scroll vertical como experiencia principal dentro de un slide.
- Si una idea no cabe con claridad, debe convertirse en un slide nuevo.
- Los únicos fondos permitidos son colores sólidos de la paleta oficial o imágenes de `Texturas/`.
- Los únicos colores permitidos son los definidos en `Colores/`.
- Las únicas tipografías permitidas son las disponibles en `Tipografías/`.
- Los logos oficiales deben aparecer al inicio y al cierre de cada presentación.
- Los logos deben elegirse según contraste real con el fondo y nunca por preferencia estética arbitraria.
- Git debe usarse como sistema de control de versiones del proyecto.
- Cada cambio relevante debe quedar rastreado y registrado en Git.

## 2. Estructura obligatoria por presentación

Cada nueva presentación debe vivir en una carpeta propia en la raíz del proyecto.

Estructura recomendada:

```text
/nombre-presentacion/
  index.html
  styles.css
  script.js
  /assets/
```

Reglas:

- El nombre de la carpeta debe ir en `kebab-case`, sin espacios ni mayúsculas.
- `index.html` contiene la narrativa y estructura de slides.
- `styles.css` centraliza tipografía, color, layout, transiciones y sistema visual.
- `script.js` solo debe existir si hay navegación, animación o interacción.
- `assets/` debe usarse solo para recursos específicos de esa presentación.
- Los assets compartidos de marca pueden referenciarse desde la raíz del proyecto sin duplicarse.
- No se deben mezclar archivos de dos presentaciones distintas en una sola carpeta.

## 3. Sistema gráfico oficial disponible

### 3.1. Paleta oficial

Fuente: `Colores/Captura de pantalla 2026-04-03 a las 9.52.15 p. m..png`

Colores aprobados:

| Nombre | Hex | Rol recomendado |
| --- | --- | --- |
| Light Cream | `#FEF3D9` | Base clara, slides de apertura, slides de lectura, fondos elegantes de alta limpieza |
| Rich Black | `#0E0A07` | Base oscura principal, slides de alto contraste, cierres, autoridad visual |
| Rust | `#9B4421` | Acento cálido, énfasis estratégico, momentum, oportunidad, llamados editoriales |
| Olive Drab | `#676545` | Soporte editorial, contexto, operación, territorio, continuidad |
| Charcoal Blue | `#233548` | Soporte institucional, confianza, análisis, datos, narrativa ejecutiva |

Jerarquía de uso:

- `#FEF3D9` y `#0E0A07` son la base primaria del sistema.
- `#9B4421`, `#676545` y `#233548` funcionan como secundarios controlados.
- No usar colores fuera de esta paleta para textos, fondos, botones, líneas, iconos, indicadores o decoraciones.
- No introducir degradados con colores ajenos a marca.
- No aplicar sombras de color, filtros o brillos externos a esta paleta.
- En un mismo slide, idealmente no usar más de tres colores de la paleta al mismo tiempo.

### 3.2. Tipografías oficiales

Fuentes disponibles:

- `Tipografías/Outfit/Outfit-VariableFont_wght.ttf`
- `Tipografías/Lora/Lora-VariableFont_wght.ttf`
- sus variantes estáticas dentro de `Tipografías/Outfit/static/` y `Tipografías/Lora/static/`

Sistema tipográfico recomendado:

- `Outfit` debe ser la tipografía principal para titulares, subtítulos, métricas, navegación, labels y UI.
- `Lora` debe ser la tipografía de apoyo para párrafos editoriales, frases de valor, citas o introducciones con tono premium.

Reglas:

- No mezclar familias adicionales.
- Priorizar contraste por peso, tamaño y escala antes que por exceso de estilos.
- Evitar usar Lora en bloques densos muy pequeños.
- Evitar usar Outfit ultra liviana en fondos texturizados o de bajo contraste.

Jerarquía sugerida:

- Títulos: `Outfit` en pesos `600` a `800`
- Subtítulos: `Outfit` en pesos `500` a `700`
- Cuerpo: `Lora` en pesos `400` a `500`
- Labels, métricas y navegación: `Outfit` en pesos `500` a `700`

### 3.3. Texturas oficiales

Las texturas disponibles en `Texturas/` ya están resueltas en `1920x1080`, por lo que son aptas para slides 16:9 a pantalla completa.

Clasificación recomendada:

| Archivo | Base visual | Uso recomendado | Logo recomendado |
| --- | --- | --- | --- |
| `Texturas/1.png` | Light Cream con grano suave | Portadas limpias, introducciones, slides de lectura | Logo oscuro |
| `Texturas/2.png` | Rich Black con grano suave | Slides de impacto, cierres, statements ejecutivos | Logo claro |
| `Texturas/3.png` | Charcoal Blue con grano suave | Slides de análisis, confianza, institucionalidad | Logo claro |
| `Texturas/4.png` | Rust con grano suave | Slides de oportunidad, énfasis o narrativa comercial | Logo claro |
| `Texturas/5.png` | Light Cream con variación cálida | Separadores, aperturas premium, slides editoriales | Logo oscuro |
| `Texturas/6.png` | Olive Drab con grano suave | Slides de contexto, expansión, operación o territorio | Logo claro |

Reglas:

- Usar `background-size: cover` y `background-position: center`.
- No deformar la textura ni estirarla manualmente.
- Si el slide requiere alta densidad de texto, priorizar color sólido sobre textura.
- Si se usa textura, el texto debe vivir en la zona más limpia del fondo.
- No superponer logos o bloques densos sobre zonas de textura que comprometan legibilidad.

### 3.4. Logos oficiales y categorización por contraste

Ubicación: `Logos/`

#### Logos principales

| Archivo | Tipo | Apariencia | Uso correcto |
| --- | --- | --- | --- |
| `Logos/Logo principal _8.svg` | Principal oscuro sin fondo | Marca en color oscuro | Usar sobre `#FEF3D9`, `Texturas/1.png` y `Texturas/5.png` |
| `Logos/Logo principal _9.svg` | Principal claro sin fondo | Marca en blanco | Usar sobre `#0E0A07`, `#233548`, `#9B4421`, `#676545`, `Texturas/2.png`, `Texturas/3.png`, `Texturas/4.png` y `Texturas/6.png` |
| `Logos/Logo principal _1.svg` | Principal con fondo incorporado | Marca crema sobre bloque Rich Black | Usar solo cuando se necesite una firma con fondo propio sobre superficies claras o complejas |

#### Logos secundarios

| Archivo | Tipo | Apariencia | Uso correcto |
| --- | --- | --- | --- |
| `Logos/Logo secundario_8.svg` | Secundario oscuro sin fondo | Símbolo oscuro | Usar como firma discreta o apoyo sobre fondos claros |
| `Logos/Logo secundario_9.svg` | Secundario claro sin fondo | Símbolo blanco | Usar como firma discreta o apoyo sobre fondos oscuros |
| `Logos/Logo secundario_1 (1).svg` | Secundario con fondo incorporado | Símbolo crema sobre bloque Rich Black | Usar solo cuando se requiera un sello compacto con contraste garantizado |

Reglas de uso:

- La portada y el cierre deben usar preferiblemente el logo principal.
- Los logos secundarios son opcionales y deben reservarse para marcas de apoyo, secciones o firmas discretas.
- Nunca recolorear, estirar, rotar o deformar un logo.
- Nunca aplicar filtros, sombras o transparencias al logo.
- Siempre dejar aire visual alrededor del logo.
- Si el fondo es claro, usar la versión oscura.
- Si el fondo es oscuro, usar la versión clara.
- Si el fondo es ambiguo o muy variable, cambiar a un fondo sólido o usar la versión con fondo incorporado.
- Los logos deben verse intencionales, no pegados a cajas improvisadas ni encerrados en tarjetas decorativas.

Regla práctica para portadas y cierres:

- Apertura recomendada: fondo `Light Cream` o `Texturas/1.png` o `Texturas/5.png` con `Logo principal _8.svg`
- Cierre recomendado: fondo `Rich Black` o `Charcoal Blue` o `Texturas/2.png` o `Texturas/3.png` con `Logo principal _9.svg`

## 4. Sistema de composición de slides

- Cada slide debe comunicar una sola idea principal.
- La lectura debe resolverse rápido, con jerarquía clara y sin saturación.
- La composición debe sentirse editorial, premium y dirigida, no genérica.
- El primer golpe visual debe estar en el titular, la cifra o el concepto principal.
- El segundo nivel debe apoyar la idea, no competir con ella.
- El tercero debe cerrar o contextualizar.
- No construir slides como documentos de texto.
- Evitar párrafos largos y bloques pesados.
- Evitar llenar toda la pantalla por miedo al vacío.
- Si un slide necesita mucho texto, dividirlo.
- La navegación debe ser horizontal, clara y visible.
- El viewport debe sentirse estable; no depender de scroll para entender el contenido.

Lineamientos de layout:

- Usar retículas limpias de 2 o 3 columnas cuando aplique.
- Mantener márgenes generosos y consistentes.
- Dejar suficiente aire entre titular, cuerpo, métricas y marca.
- Evitar centrar todo por defecto.
- Combinar masas de color, tipografía y textura con intención editorial.

## 5. Tono editorial y de redacción

Toda presentación debe escribirse con voz:

- profesional
- consultiva
- estratégica
- segura
- clara
- orientada a resultados
- propia de un experto en marketing digital

La redacción debe:

- sonar ejecutiva, no grandilocuente
- priorizar claridad sobre adorno
- hablar de valor, posicionamiento, crecimiento, audiencia, conversión, eficiencia o marca
- evitar frases vacías, cliché o demasiado promocionales
- sostener cada idea con criterio, no con hype
- cuidar ortografía, tildes y puntuación antes de cerrar la entrega

Buenas prácticas:

- Titulares cortos, memorables y de impacto
- Subtítulos que desarrollen la tesis sin repetir el titular
- Cuerpo breve, útil y argumentado
- Métricas y bullets solo cuando realmente simplifican la comprensión

## 6. Reglas de implementación HTML y CSS

Toda presentación debe poder renderizarse como una experiencia horizontal a pantalla completa.

Base recomendada:

```css
:root {
  --color-light-cream: #fef3d9;
  --color-rich-black: #0e0a07;
  --color-rust: #9b4421;
  --color-olive-drab: #676545;
  --color-charcoal-blue: #233548;
}

@font-face {
  font-family: "Outfit";
  src: url("../Tipografías/Outfit/Outfit-VariableFont_wght.ttf") format("truetype");
  font-weight: 100 900;
  font-style: normal;
}

@font-face {
  font-family: "Lora";
  src: url("../Tipografías/Lora/Lora-VariableFont_wght.ttf") format("truetype");
  font-weight: 400 700;
  font-style: normal;
}

html,
body {
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

body {
  font-family: "Outfit", sans-serif;
  background: var(--color-light-cream);
  color: var(--color-rich-black);
}

.presentation {
  width: 100vw;
  height: 100svh;
  overflow: hidden;
}

.slides {
  display: flex;
  width: 100%;
  height: 100%;
}

.slide {
  flex: 0 0 100vw;
  width: 100vw;
  height: 100svh;
}
```

Reglas técnicas:

- El slide debe medir `100vw` por `100svh`.
- No permitir scroll vertical dentro del layout principal.
- Usar `Outfit` como familia base del sistema.
- Usar `Lora` solo para capas editoriales específicas.
- Declarar la paleta en variables CSS desde el inicio.
- Si un fondo usa textura, confirmar contraste real del texto y del logo.
- Si hay transición entre slides, debe ser suave, breve y funcional.
- La navegación debe ser visible, estable y usable con teclado o click.

## 7. Uso recomendado de assets compartidos

Desde una carpeta de presentación, las rutas compartidas suelen resolverse así:

- Tipografías: `../Tipografías/...`
- Texturas: `../Texturas/...`
- Logos: `../Logos/...`
- Colores de referencia: `../Colores/...`

Buenas prácticas:

- Reutilizar los assets maestros siempre que no sea necesario duplicarlos.
- Copiar assets a `assets/` solo si la presentación debe viajar de forma autónoma.
- Si se copia un asset, mantener su nombre reconocible y su origen claro.

## 8. Flujo Git obligatorio

Git no es opcional dentro de este proyecto.

Reglas:

- Revisar `git status` antes de empezar y antes de cerrar.
- Registrar cada cambio relevante con commits claros.
- Evitar commits gigantes con cambios mezclados de múltiples presentaciones.
- Si se trabaja en una nueva presentación, idealmente separar commits por hitos.

Hitos sugeridos para commitear:

- creación de estructura base de la presentación
- implementación del sistema visual
- cierre de contenido
- ajustes de QA visual y ortográfica
- actualización de documentación como `agents.md`

Mensajes de commit sugeridos:

- `docs: actualizar guía maestra de presentaciones HTML`
- `feat(nombre-presentacion): crear estructura inicial`
- `style(nombre-presentacion): implementar sistema visual`
- `fix(nombre-presentacion): ajustar contraste y legibilidad`

## 9. Checklist obligatorio antes de dar una presentación por terminada

- La presentación vive en su carpeta individual.
- Cada slide ocupa un viewport horizontal completo.
- No hay scroll vertical como experiencia principal.
- Solo se usaron colores de la paleta oficial.
- Solo se usaron tipografías oficiales.
- El slide inicial incluye logo.
- El slide final incluye logo.
- El logo elegido tiene contraste correcto con su fondo.
- La navegación entre slides es clara.
- La composición se siente limpia, premium y estratégica.
- El texto se lee rápido y con jerarquía clara.
- No hay choques entre logo, texto y textura.
- Las texturas, si se usan, están bien elegidas para el nivel de contenido.
- La ortografía y las tildes están revisadas.
- El cambio quedó rastreado y registrado en Git.

## 10. Criterio final

Si hay dudas entre una decisión vistosa y una decisión clara, debe ganar la claridad.

Si hay dudas entre una decisión genérica y una decisión con marca, debe ganar la marca.

Si hay dudas entre llenar un slide o dejar respirar el mensaje, debe ganar la respiración visual.

Si en el futuro cambian los assets o el manual de marca, este documento debe actualizarse para seguir representando la versión vigente del sistema gráfico del proyecto.
