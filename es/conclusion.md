---
layout: default
title: ¡Felicidades!
number: 8
locale: es
---

¡Ha completado todas las lecciones!

Lo crea o no, sólo _acabamos de empezar_ a explorar lo que se puede lograr con Markdown.
Hay muchas implementaciones "extendidas" de Markdown que dan soporte a
formatos como tablas, listas de definición, notas a pie de página y más.
Ya que no son estándares, no son esenciales para aprender los conceptos básicos, que hemos presentado aquí.

Si le gustaría aprender más sobre esas implementciones de Markdown, está invitado/a
a explorar cualquiera de estas otras apicaciones y tutoriales sobre Markdown. Aquí hay algunas opciones:

{% for link in site.data.resources.links %}
* <{{ link }}>
{% endfor %}
