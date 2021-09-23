---
layout: default
title: 恭喜！
number: 8
locale: zh-tw
---

你已經完成了全部的課程！

不論你相不相信，我們才剛開始探索能以 Markdown 達到的事物。Markdown 有許多「延伸」的實作版本，支援了表格、定義清單、註腳……等功能。
但因為他們並非標準，對於瞭解基本用法也沒有助益，所以我們在課程並未提及。

如果你對於其他 Markdown 實作很感興趣，儘管去探索其他 Markdown 的 Apps 或教學。我們列出了一些：

{% for link in site.data.resources.links %}
* <{{ link }}>
{% endfor %}
