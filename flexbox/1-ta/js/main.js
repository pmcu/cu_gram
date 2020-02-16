// Javascript for Index Page
// ábhar don phríomhpharagraf
// ------------------
var lucht = `

    <h2>Tá - 1</h2>
    <img src="../img/tadhg.jpg" alt="">
<h2><strike>Ceart agus Mícheart</strike></h2>
<p>B'fhearr liom ag tús ár dturais
díriú ar a dtig leat a dhéanamh leis a
an fhocal bheag seo, in ionad toiseacht a
scríobh rialacha i gcloich. Má amharctar ar
an fhocal mar uirlis i mbosca d'uirlisí, is
amhlaidh is fearr a n-éireoidh leat i gceann
úsáid an fhocail mar ghléas cainte. B'fhearr i
bhfad smaointiú ar an uirlis mhaith i do láimh féin
ná do thóin a choimheád ar an bhata droighinn i
láimh duine eile.
</p>
<h3>Tá - Jab le déanamh: Cur síos</h3>
<h4>Léargas ón Stair</h4>
<p>
Creidim an scéal a chuala mé agus mé i mo
choileán shoineanta gur fhás an focal <strong>Tá</strong>
as focal ar <strong>Seas</strong> a ba bhunchiall leis. Is
furasta a shamhlú leathnú brí ag teacht i bhfocal a tháinig
ar an tsaol ar tús le <strong>seasamh</strong> a chur in iúl,
is é sin, tacaíocht a bhaint as an talamh le do chuid cos, de
gheall ar a bheith ag amharc uait, mar shampla. Ón bhunphictiúr
den chú ina sheasamh, nochtar pictiúir eile.
</p>
<h4>Seasadh an Giorria</h4>
<ol>
	<li>fanacht</li>
	<li>sos</li>
	<li>ócáid machnaimh</li>
	<li>deireadh le gluaiseacht</li>
	<li>staid reatha</li>
	<li>deireadh(sealadach)le hathrú</li>
</ol>
    <img src="../img/giorria.jpg" alt="">
<h3>Oiliúint an Chon</h3>
<p><q>Suíodh an giorria</q> nach minic
a cuireadh an chomhairle sin ormsa agus mé i
mo choileán faoi oiliúint. I gceantair eile,
cluinter <q>Seasadh an giorria</q>. Agus nach
fusa i bhfad cur síos a dhéanamh ar an rud nach
bhfuil ag gluaiseacht. Is ansin is fearr a bhéarfá
faoi deara an dath, an méid, an chuma, an croí ...
</p>
`
// ábhar don 1ú 'sidebar'
// ------------------
var bealach = `
<h2>Na Seomraí</h2>
<nav>
<ul>
<li><a href="../index.html">Baile </a></li>
<li><a href="#">Is </a></li>
<li><a href="#">Briathar 1</a></li>
</ul>
</nav>
<h4>O Theanga go Céile</h4>
<ul>
	<li><strong>Tá</strong>: is, am, are</li>
	<li><strong>cú</strong>: dog, hound</li>
	<li><strong>aidiacht</strong>: adjective</li>
	<li><strong>seas</strong>: stand</li>
	<li><strong>ainm</strong>: name </li>
	<li><strong>bhíodh</strong>: used to be</li>
	<li><strong>gan</strong>: without</li>
	<li><strong>buí</strong>: yellow</li>
	<li><strong>fada</strong>: long</li>
	<li><strong>beag</strong>: wee,small</li>
	<li><strong>mór</strong>: big</li>
	<li><strong>ceolmhar</strong>: musical</li>
	<li><strong>cróga</strong>: brave</li>
	<li><strong>dóighiúil</strong>: handsome</li>
	<li><strong>ramhar</strong>: fat</li>
	<li><strong>blasta</strong>: tasty</li>
	<li><strong>leadránach</strong>: boring</li>
	<li><strong>uaigneach</strong>: lonely</li>

</ul>
`
//-------------
//ábhar don 2ú 'side bar'
var taobh = `
<h2>Cur Síos</h2>
<h3>Úsáid</h3>
<strong>Trí rud</strong>
<ol>
	<li>Tá</li>
	<li>cú</li>
	<li>aidiacht</li>
</ol>
<ul>
	<li>Tá Tadhg buí.</li>
	<li>Tá Tadhg donn.</li>
	<li>Tá Tadhg beag.</li>
	<li>Tá Tadhg mór.</li>
</ul>

<strong>Trí rud</strong>
<ol>
	<li>Tá</li>
	<li>cú gan ainm</li>
	<li>aidiacht</li>

</ol>

<ul>
	<li>Tá an cú fada.</li>
	<li>Tá an cú ceolmhar.</li>
	<li>Tá an cú dóighiúil.</li>
	<li>Tá an cú cróga.</li>
</ul>
<h4>Am eile - Rud eile</h4>

<ul>
	<li>Bhí an easóg sin fada.</li>
	<li>Beidh an gasúr sin ramhar.</li>
	<li>Bhíodh an obair leadránach.</li>
	<li>Tá an coinín sin ag dul a bheith blasta.</li>
</ul>
<h4>An tOrd</h4>
<strong>Cloigh leis an 1,2,3</strong>
<ul>
	<li><strike> an easóg bhí fada.</strike></li>
	<li><strike>  uaigneach an cat sin beidh.</strike></li>
	<li><strike>  bhíodh deas an obair .</strike></li>
	<li><strike>  coinín sin tá blasta.</strike></li>
</ul>
`
var nota =`
<h2>Nótaí Eile</h2>
<p>Seo áit do nótaí eile agus eolas níos doimhne</p>
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
