---
layout: page
title: Eolas
permalink: /about/
---
![tadhg](/assets/img/tadhg.jpg)

Cúrsaí gramadaí de réir Thaidhg féin a phléifear ar an tsuíomh
seo. Ba mhaith leis modh oibre úr a úsáid, ach san am chéanna
a bheith ag tarraingt as na seantoibreacha is fearr údarás.

> Má bhogann tú as an tseanchró chuig cró nua, is annamh a bhíonn
> fonn ort gach rud a fhágáil i do dhiaidh.
> Tadhg - Cú na Gramadaí

<hr>
<h4>Na Naisc</h4>
{% for ceang site.data.nasc %}
{{ ceang.nasc}}, {{ ceang.seort}}, {{ ceang.eolas}} <br>
{% endfor  %}

