// Javascript for Index Page
// ábhar don phríomhpharagraf
// ------------------
var lucht = `

    <h2>Plean an Chon</h2>
    <img src="img/tadhg.jpg" alt="">
<h3>An Chéad Iarracht</h3>
<p>
Chonacthas domh gur mhaith cur chuige simplí
a úsáid: cur chuige ina mbeadh earnálacha tábhachtacha
á bplé, agus teideal mór fóirsteanach le gach ceann. Bharúil mé
chomh maith gur deas díriú ar dhornán bheag earnálach ar tús.
Seo thíos an cineál cur chuige a tháinig i mo cheann.
</p>
<h4>Trí Rud</h4>
<ol>
	<li>Tá - príomhúsáidí</li>
	<li>Is - príomhúsáidí</li>
	<li>Briathar - príomhúsáidí</li>
</ol>
`
// ábhar don 1ú 'sidebar'
// ------------------
var bealach = `
<h2>Na Seomraí</h2>
<p>
Má bhíonn seomra ann do
gach earnáil atá a plé, beifear
in ann cnag a bhualadh
ar dhoras an tseomra. Seo thíos na doirse
i láthair na huaire. Cuirfear leo le himeacht
aimsire; ach b'fhearr gan rogha rófhairsing
ann ar leathanach amháin in am ar bith.
</p>
<nav>
<ul>
<li><a href = "1-ta/index.html">Tá </a></li>
<li><a href="#">Is </a></li>
<li><a href="#">Briathar 1</a></li>
</ul>
</nav>

`
//-------------
//ábhar don 2ú 'side bar'
var taobh = `
<h2>Tadhg</h2>
<p>
Is mise Tadhg, cú de na cúnna gramadaí.
Ní cú acadúil mé, faoina hata chearnógach; ach de bharr mo chuid seilge
fada, i ngleanta an léinn Ghaeilge, d'éirigh suim sa ghramadach
ionam, agus chaith mé an-chuid ama ag smúrthacht agus ag tógáil
eolais faoi chomhréir agus faoi fhoirmeacha focal, gur éirigh
mé seort eolach go leor faoi dheireadh, ar na cúrsaí údaí, de réir mo bharúla féin.
Madadh flaithiúil go maith mé, rud a chuir i mo cheann nár mhsite
cuid dá bhfuil bailithe ann ó thaobh na gramadaí a roinnt leat. Más
amaideach bómánta leat a mbreacaim, tá cead agat cuidiú con eile a lorg, ar ndóighe.
</p>

`
var nota =`

<h2>Nótaí breise</h2>
<h3>Údarás - Príomhfhoinsí</h3>
<ul>
	<li>Réchúrsa Gramadaí</li>
	<li>Graiméar na mBráithre Críostaí</li>
	<li>New Irish Grammar</li>
	<li>Gramadach na Gaeilge</li>
</ul>


`
//  *** cód don leathanach HTML
document.getElementById('lucht-div').innerHTML=`
 ${lucht}
`
document.getElementById('bealach-div').innerHTML=`
 ${bealach}
`

document.getElementById('taobh-div').innerHTML=`
 ${taobh}
`

document.getElementById('nota-div').innerHTML=`
 ${nota}
`
