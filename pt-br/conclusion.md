---
layout: default
title: Parabéns!
number: 8
locale: pt-br
---

Você completou todas as lições!

Acredite ou não, nós apenas _começamos_ a explorar o que pode ser realizado
com Markdown. Existem muitas implementações "estendidas" de Markdown que suportam
formatos como tabelas, listas de definições, notas de rodapé e muito mais. Como
não são padrões, não são essenciais para aprender o básico, como apresentamos aqui.

Se você quiser saber mais sobre essas implementações de Markdown, sinta-se à vontade
para explorar qualquer número de outros aplicativos e tutoriais de Markdown. Aqui estão apenas alguns:

{% for link in site.data.resources.links %}
* <{{ link }}>
{% endfor %}
