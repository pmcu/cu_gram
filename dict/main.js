
function fnl(){
var outputAreaRef = document.getElementById("outputArea");
var output = "";

//var word = prompt("Cuir isteach an téarma: ");


var tearmai = {
	ainmfhocal: "Is Rann Cainte an tAinmfhocal a chuireann in iúl dúinn an t-ainm atá ar dhuine, nó ar áit, nó ar rud",
	aidiacht: "Is Rann Cainte an Aidiacht a chuirtear le hainmfhocal chun cáilíocht áirithe a bhaineann leis an duine, nó leis an rud atá i gceist a léiriú",
	briathar: "Is Rann Cainte an Briathar a mbaintear úsáid as chun rud éigin a rá faoi rud éigin eile. Ciallaíonn sé gníomh de ghnáth",
	réamhfhocal: "Is Rann Cainte an Réamhfhocal a thaispeánann an bhaint atá ag rud le rud eile"
};

var word = document.getElementById("text1").value;
	if (tearmai[word] !== undefined)
{
  word = tearmai[word];
}
output = word;

outputAreaRef.innerHTML = output;
};
