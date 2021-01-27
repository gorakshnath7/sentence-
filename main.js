
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}


function playclip(){
  var audio = document.getElementsByTagName("audio")[0];
           audio.play();
           audio.volume=0.2;
         }
$(document).ready(function() {
     $('.mtrack').on('mouseenter',function(){
     if(!$(this).hasClass('.played')){
     playclip();
     $(this).addClass('.played');
     }
     });
$('.mtrack').on('mouseleave',function(){
 if($(this).hasClass('.played')){
 $(this).removeClass('.played');
audio.pause();

 }
 });
 });

var verbs, noms,sujet,sujet2,conjonction;
async function load() {
  let url = 'https://raw.githubusercontent.com/toxicbloud/SentencesGenerator/main/data.json';
  let obj = await (await fetch(url)).json();
  console.log(obj.noms[0]);
  noms=obj.noms;
  verbs=obj.verbs
  sujet=obj.sujet
  conjonction=obj.conjonction
  sujet2=obj.sujet2
  sentence(); 
}
load();



//noms = ["Jamy","Tallu","Yolande","Le chat","Luigi","Le charisme de Enes","David","Le prof de systeme","Vladimir Poutine","Donald Trump","Toute la S2B","Siphano","Jeff Besos","Maitre Gims","Patrick Balkany","Pierre Sylvain Durif","Edi malou","hitler","staline","putine","pétain","corona","hollande","macron","trump"];
//verbs = ["mange","danse sur","se fait","dab sur","est dans","execute","roule sur","fait une video sur","est en realite","se fait hacker par","parle avec","utilise d'une maniere etrange","sort avec","a une relation tres intime avec","fait un combat a mort avec","se fait battre sur rocket league par","dort avec","enterre","va a la piscine avec","va aux toilettes public avec","attrape","se fait rick roll par","achete des actions sur","fait un feat avec","charge son fusil en voyant"];
//sujet = ["l'ordre 66","une barquette de fraise","ton pere le chauve","Patrick Sebastien","le crush d'Abdel","une fiat panda","l'ordi de Robin","Anto le maitre jedi","un rubick's cube","Casimir","la prof de PPP","son PC gamer","la puissance divine de Paul","Mathieu qui dort","le docteur Raoul","le Covid-19","le gerant du rayon jardinage chez Carrefour","BigFlo et Oli","ta voisine"];
//conjonction = ["et c'est ainsi que","et donc","alors que","pendant que","pourtant"];
//sujet2 = ["fait de la muscu pour impressionner Tibo Inshape","est a 4 pattes chez Phillipe Etchebest","devient le nouveau Pablo Escobar dans son village","roule un bon gros bedo sa mere","devient president au guatemala","crie dans la rue tout les soirs a minuit","fait un striptease devant sa grand mere","reste family friendly devant les enfants","reste dans une camionette devant une ecole maternelle","distribue des affiches pour le modem","reanime Hitler a la Frankenstein","capture un roucoul sur Pokemon GO","se fait passer pour Mathilde 10 ans sur Habbo Hotel"];

function randGen() {
  return Math.floor(Math.random() * 5);
}

function sentence() {
  var rand1 = Math.floor(Math.random() * 10);
  var rand2 = Math.floor(Math.random() * 10);
  var rand3 = Math.floor(Math.random() * 10);
  var rand4 = Math.floor(Math.random() * 5);
  var rand5 = Math.floor(Math.random() * 10);
  var rand6 = Math.floor(Math.random() * 10);

  var content = noms[rand1]+" "+verbs[rand2]+" "+sujet[rand3]+" "+conjonction[rand4]+" "+noms[rand5]+" "+sujet2[rand6]+".";

  document.getElementById('sentence').innerHTML = "&quot;" + content + "&quot;";
};


new Vivus('parent', {
	duration:200, 
  type:"oneByOne"
}, after)

/* fillPath */
let count= 0
function fillPath(classname, color){
	count++
	let path = document.querySelector('.'+classname)
	path.setAttribute('class', `${classname} opacity-${count}`)
}

/* after */
function after(){
	fillPath('letter-1', 'yellow');
  fillPath('letter-2', 'yellow');
  fillPath('letter-3', 'yellow');
  fillPath('letter-4', 'yellow');
  fillPath('letter-5', 'yellow');
  fillPath('letter-6', 'yellow');
  fillPath('letter-7', 'yellow');
}





