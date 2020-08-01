---
layout: default
title: Conclusion
number: 8
locale: fr
---
Vous avez terminé toutes les leçons !

Croyez-le ou non, nous ne faisons _que commencer_ à explorer ce qui peut être accompli avec le Markdown. Il existe de nombreuses implémentations "étendues" de Markdown qui prennent en charge les tableaux, les listes de définitions, les notes de bas de page et plus encore. Parce que ils ne sont pas standard, ils ne sont pas essentiels à l'apprentissage des bases, comme nous l'avons présentés ici.

Si vous souhaitez en savoir plus sur ces implémentations du Markdown, vous êtes les bienvenus pour explorer un certain nombre d'autres applications et tutoriels Markdown. En voici quelques-unes :

{% for link in site.data.resources.links %}
* <{{ link }}>
{% endfor %}
