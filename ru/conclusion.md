---
layout: default
title: Congratulations!
number: 8
locale: en
---

You've completed all the lessons!

Believe it or not, we've only _just begun_ exploring what can be accomplished
with Markdown. There are many "extended" implementations of Markdown that support
formats like tables, definition lists, footnotes, and more. Because
they're non-standard, they're not essential to learning the basics, as we've
introduced here.

If you'd like to know more about these Markdown implementations, you're welcome
to explore any number of other Markdown apps and tutorials. Here are just a few:

{% for link in site.data.resources.links %}
* <{{ link }}>
{% endfor %}
