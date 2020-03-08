
function fnl(){
var outputAreaRef = document.getElementById("outputArea");
var outputAreaRef2 = document.getElementById("outputArea2");
var listArea = document.getElementById("list");

var output = "";
var output2 ="";
var output3 ="";

	//
//var word = prompt("Cuir isteach an téarma: ");


const tearmai = {
	ainmfhocal: `
	Is Rann Cainte an tAinmfhocal a chuireann in iúl
	dúinn an t-ainm atá ar dhuine, nó ar áit, nó ar rud`,
	forainm: `
	Is Rann Cainte an an forainm a chuirtear in áit ainfhocail.
	Déanann forainm tagairt do dhuine nó do rud gan an duine
	nó an rud a ainmniú`,
	aidiacht: `
	Is Rann Cainte an Aidiacht a chuirtear le hainmfhocal
	chun cáilíocht áirithe a bhaineann leis an duine, nó leis an rud atá i gceist a léiriú`,
	briathar: `
	Is Rann Cainte an Briathar a mbaintear úsáid as chun rud éigin a rá
	faoi rud éigin eile. Ciallaíonn sé gníomh de ghnáth`,
	réamhfhocal: `
	Is Rann Cainte an Réamhfhocal a thaispeánann an bhaint atá
	ag rud le rud eile`,
	dobhriathar: `
	Is Rann Cainte an Dobhriathar a chuireann teora le brí briathair,
	aidiacht, nó dobhriathar eile `
};

var samplai = {
	ainmfhocal: `Pól, Béal Feirste, cat, loch, airde `,
	forainm: `mé, tú, sé, sí, muid, seo, sin, siúd`,
	aidiacht: `bán, mór, cróga, amaideach, áirithe`,
	briathar: `bí(tá), ith, ól, siúl, léim, scríobh, léigh`,
	réamhfhocal: `i, ar, ag, faoi, roimh, le, fríd`,
	dobhriathar: `go gasta, go leor, beagnach`

};



var word = document.getElementById("text1").value;

if (tearmai[word] !== undefined)
{
  word = tearmai[word];
}

output = word;
var word = document.getElementById("text1").value;
if (samplai[word] !== undefined)
{
 word = samplai[word];
}

output2 = word;

outputAreaRef.innerHTML = output;
outputAreaRef2.innerHTML = output2;

//const keys = Object.keys(tearmai)
//for (const key of keys)
//console.log(key)
//}
var output3 = '';
const keys = Object.keys(tearmai)
for (const key of keys){
console.log(key)
	output3 += '<li><strong>' + key +'</strong></li>';
}
document.getElementById('list').innerHTML= output3;

};
