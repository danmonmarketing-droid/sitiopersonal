# Guía Maestra para Crear Presentaciones HTML

Este documento define las reglas obligatorias para diseñar y desarrollar presentaciones en formato HTML dentro de este proyecto. El objetivo es asegurar consistencia visual, solidez de marca y una ejecución con estándar profesional de marketing digital.

## 1. Principios generales

- Toda presentación debe construirse en HTML.
- Cada presentación debe vivir en su propia carpeta individual.
- Toda presentación debe resolverse en slides horizontales de un solo viewport por slide.
- Git debe usarse como sistema de control de versiones del proyecto.
- Cada cambio relevante debe quedar rastreado y registrado en Git.
- No se deben usar colores fuera de la paleta de marca disponible en `Colores/Colores.png`.
- La tipografía base y preferente para todas las presentaciones es la disponible en `Tipografías/HelveticaNeue.ttc`.
- Los logos oficiales deben aparecer al inicio y al final de cada presentación.
- Los logos deben colocarse siempre sobre fondos sólidos, nunca dentro de boxes, tarjetas o contenedores decorativos.
- Los fondos de las presentaciones deben resolverse con texturas de `Texturas/` o con colores sólidos de la paleta oficial.
- El manual ubicado en `Brand Manual/Manual basica.pdf` debe usarse como referencia visual obligatoria para cualquier presentación nueva o ajuste de diseño.
- El tono visual y editorial debe ser profesional, claro, contemporáneo y con enfoque de experto en marketing digital.

## 2. Estructura obligatoria por presentación

Cada nueva presentación debe crearse dentro de una carpeta independiente. La estructura recomendada es:

```text
/nombre-presentacion/
  index.html
  styles.css
  script.js
  /assets/
```

Reglas:

- `index.html` debe contener toda la narrativa de la presentación.
- `styles.css` debe centralizar la identidad visual de la pieza.
- `script.js` solo debe existir si la presentación requiere interacción o animación.
- Si se copian recursos específicos para una presentación, deben quedar dentro de su carpeta `assets/`.
- No mezclar archivos de múltiples presentaciones en una sola carpeta.
- Cada slide debe ocupar exactamente un viewport horizontal completo y evitar scroll vertical interno como experiencia principal.
- Antes de cerrar una tarea, revisar el estado de Git y dejar registro del cambio realizado.

## 3. Activos disponibles en el proyecto

### Manual de marca

Ubicación: `Brand Manual/Manual basica.pdf`

- Debe revisarse antes de diseñar cualquier presentación.
- Funciona como referencia de estilo, composición, jerarquía visual y criterio de marca.
- En caso de duda entre una decisión visual y otra, debe priorizarse la dirección definida en este manual.

### Texturas

Ubicación: `Texturas/`

- Las texturas pueden usarse como fondo total, fondo parcial o capa de atmósfera visual.
- Deben funcionar como soporte de la composición, nunca como ruido que reduzca legibilidad.
- Si una textura compite con el contenido, debe suavizarse, recortarse o retirarse.
- También se permite resolver slides únicamente con colores sólidos de la paleta oficial.

### Tipografía

Ubicación: `Tipografías/HelveticaNeue.ttc`

Reglas:

- Usar Helvetica Neue como tipografía principal en títulos, subtítulos, cuerpo y llamados visuales.
- Mantener una jerarquía tipográfica limpia y corporativa.
- Evitar mezclar esta tipografía con otras familias ajenas a la marca.
- Trabajar con pesos tipográficos para crear contraste, no con fuentes adicionales.

### Colores de marca

Ubicación: `Colores/Colores.png`

Paleta aprobada:

- `#EEEEEE`
- `#27D1D4`
- `#393939`

Reglas:

- Solo estos tres colores pueden usarse en fondos, textos, acentos, líneas, botones, bloques y recursos gráficos.
- `#27D1D4` debe funcionar como color de acento principal.
- `#393939` debe priorizarse para texto principal, titulares oscuros y fondos profundos.
- `#EEEEEE` debe usarse para fondos claros, áreas de respiro o textos sobre fondos oscuros.
- No introducir degradados con colores externos a la paleta.
- No usar sombras, brillos o efectos con colores fuera de marca.

## 4. Uso correcto de logos

Ubicación: `Logos/`

Archivos detectados:

- `Logos/Copia de Logo basica para formatos facturacion1-02 (2).png`
- `Logos/Logo basica para formatos facturacion1-03 (2).png`

Clasificación de uso:

### Logo oscuro

Archivo recomendado:

- `Logos/Copia de Logo basica para formatos facturacion1-02 (2).png`

Uso:

- Utilizar sobre fondos claros, especialmente `#EEEEEE`.
- También puede usarse sobre áreas blancas o fondos visuales muy luminosos.
- Es la opción preferente para portadas limpias y cierres con composición clara.

### Logo claro

Archivo recomendado:

- `Logos/Logo basica para formatos facturacion1-03 (2).png`

Uso:

- Utilizar sobre fondos oscuros, especialmente `#393939`.
- También puede usarse sobre texturas oscuras o composiciones con suficiente contraste.
- Nunca colocarlo sobre fondos claros porque perderá visibilidad.

Reglas generales para ambos logos:

- Deben aparecer al comienzo y al final de cada presentación.
- Deben apoyarse directamente sobre fondos sólidos de alto contraste.
- No deben colocarse dentro de cajas, badges, tarjetas, placas o contenedores con fondo independiente.
- No recolorear, deformar, estirar o aplicar efectos.
- Mantener siempre un área de seguridad visual alrededor del logo.
- Verificar contraste antes de exportar o presentar.
- Si el fondo cambia entre slides, elegir la versión del logo que mantenga máxima legibilidad.

## 5. Lineamientos de diseño para las diapositivas

- Diseñar cada slide con una idea principal.
- Todas las presentaciones deben navegarse horizontalmente slide por slide.
- Priorizar mensajes breves, estratégicos y orientados a negocio.
- Mantener composiciones limpias, con jerarquía clara y lectura rápida.
- Evitar bloques largos de texto.
- Usar el color turquesa `#27D1D4` para destacar datos, keywords, cifras o llamados a la acción.
- Reservar `#393939` para estructura, contraste y autoridad visual.
- Usar `#EEEEEE` para generar limpieza, elegancia y respiración visual.
- Integrar texturas como fondos o capas ambientales, siempre subordinadas a la lectura del contenido.
- Verificar que ninguna textura interfiera con la jerarquía tipográfica ni reduzca contraste.
- No usar estilos genéricos o visualmente neutros; cada pieza debe sentirse premium, estratégica y bien dirigida.
- Incluir botones o controles visibles de navegación entre slides.
- Incluir animaciones sutiles en la transición entre slides, sin exagerar movimiento ni comprometer legibilidad.

## 6. Tono editorial y enfoque de contenido

Toda presentación debe escribirse con tono:

- profesional
- consultivo
- seguro
- claro
- orientado a resultados
- propio de un experto en marketing digital

La redacción debe:

- transmitir criterio estratégico
- evitar frases vacías o demasiado promocionales
- enfocarse en valor, posicionamiento, conversión, audiencia, crecimiento o marca
- sonar ejecutiva, moderna y confiable
- ants de decirme que la presentacion está lista revisa tildes y ortografía

## 7. Reglas de implementación HTML/CSS

- Declarar variables CSS para la paleta oficial.
- Cargar la tipografía local desde `Tipografías/HelveticaNeue.ttc` cuando la implementación lo permita.
- Asegurar buena visualización en formato presentación, con proporciones limpias y consistentes.
- Mantener estilos reutilizables entre slides dentro de la misma presentación.
- Tomar el manual de `Brand Manual/Manual basica.pdf` como referencia activa antes de definir layout, ritmo visual y recursos gráficos.
- Validar siempre contraste entre fondo, textura, texto y logo.
- Si una textura compite con el contenido, reducir su protagonismo mediante opacidad, escala, recorte o retiro.
- Resolver la presentación para que funcione dentro de un único viewport visible por slide en escritorio.
- Si hay navegación o transición, implementarla con HTML, CSS y JavaScript de forma suave, clara y estable.
- Instalar y usar Playwright como herramienta de revisión visual del proyecto.
- Antes de confirmar que una presentación está lista, abrirla y revisarla visualmente con Playwright.
- La revisión previa debe comprobar como mínimo que la textura no afecte la legibilidad, que el contraste sea correcto y que los logos estén sobre fondos sólidos.
- Usar Git para registrar avances, cambios y versiones relevantes del trabajo.

Variables CSS sugeridas:

```css
:root {
  --color-light: #eeeeee;
  --color-accent: #27d1d4;
  --color-dark: #393939;
}
```

## 8. Checklist obligatorio antes de dar una presentación por terminada

- La presentación está dentro de su carpeta individual.
- Cada slide ocupa un solo viewport horizontal.
- Usa únicamente la paleta de marca oficial.
- Usa la tipografía Helvetica Neue.
- Sigue como referencia el manual de `Brand Manual/Manual basica.pdf`.
- Incluye logo al inicio.
- Incluye logo al cierre.
- Los logos están sobre fondos sólidos y no dentro de boxes o tarjetas.
- Incluye navegación visible entre slides.
- El logo elegido tiene contraste correcto con su fondo.
- Usa texturas de `Texturas/` o colores sólidos de paleta como fondos.
- La textura no afecta la legibilidad ni invade el contenido.
- El tono del contenido se percibe profesional y estratégico.
- La pieza se siente consistente, premium y alineada con marca.
- El cambio quedó rastreado y registrado en Git.

## 9. Instrucción final de ejecución

Si se crea una nueva presentación en este repositorio, debe respetar este documento como referencia principal de dirección visual, narrativa y de marca. En caso de duda, siempre priorizar claridad, contraste, consistencia y percepción premium.
