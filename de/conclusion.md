---
layout: default
title: ¡Glückwunsch!
number: 8
locale: de
---

Sie haben alle Lektionen abgeschlossen!

Ob Sie es glauben oder nicht, wir haben gerade _erst angefangen_ zu entdecken, was mit Markdown möglich ist.
Es gibt viele „erweiterte“ Anwendungen von Markdown, die verschiedene Formate wie Tabellen, Definitionslisten, Fußnoten und mehr unterstützen. Da es sich dabei nicht um Standardformate handelt, sind sie für das Lernen der Grundlagen, wie wir sie hier vorgestellt haben, nicht unbedingt erforderlich.

Wenn Sie mehr über diese Markdown- Anwendungen erfahren möchten, können Sie sich gerne mit anderen Markdown-Applikationen und Tutorials beschäftigen. Hier sind nur ein paar:

{% for link in site.data.resources.links %}
* <{{ link }}>
{% endfor %}
