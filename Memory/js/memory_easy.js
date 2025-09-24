function Klotz(name) {
    this.name = name;
    this.getFilePath = function(){
        return "img/" + this.name + ".png";
    }    
}

var pair01 = new Klotz("pair01");
var pair02 = new Klotz("pair02");
var pair03 = new Klotz("pair03");
var pair04 = new Klotz("pair04");
var pair05 = new Klotz("pair05");
var pair06 = new Klotz("pair06");
var pair07 = new Klotz("pair07");
var pair08 = new Klotz("pair08");
var pair09 = new Klotz("pair09");
var pair10 = new Klotz("pair10");
var pair11= new Klotz("pair11");
var pair12 = new Klotz("pair12");

var pairArray = [pair01,pair01,pair02,pair02,pair03,pair03,pair04,pair04,pair05,pair05,pair06,pair06,pair07,pair07,pair08,pair08,pair09,pair09,pair10,pair10,pair11,pair11,pair12,pair12];
var mixedArray = mixing(pairArray);

var counter = 0;
var gedreht = [];
var fertig = pairArray.length/2;
var versuche = 0;

function check(){
    return mixedArray[gedreht[1]].name == mixedArray[gedreht[0]].name;
}
function mixing(array){
    var currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

function getBack(){
    while(gedreht.length != 0){
        var text = `<a onclick="buttonPress(${gedreht[gedreht.length-1]})"><img src="img/backside.png"</img></a>`;
        document.getElementById(`Bild${gedreht[gedreht.length-1]}`).innerHTML = text;
        gedreht.pop();    
    }
}

function buttonPress(i){
    if(counter == 0){
        var pair = mixedArray[i];
        var text = `<img src="${pair.getFilePath()}"</img>`;
        document.getElementById(`Bild${i}`).innerHTML = text;
        gedreht.push(i);
        counter += 1;
    }
    else if(counter == 1){
        var pair = mixedArray[i];
        gedreht.push(i);
        counter += 1;
        if(check()==true){
            var text = `<img src="${pair.getFilePath()}"</img>`;
            document.getElementById(`Bild${i}`).innerHTML = text;
            gedreht.pop();
            gedreht.pop();
            fertig -= 1;
            counter = 0;

            if(fertig == 0){
                text = `<button class="reload" id="finish" onClick="window.location.reload(true)">Neustarten</button>`;
                document.getElementById("Ende").innerHTML = text;
            }

        }
        else{
            var text = `<a onclick="buttonPress(${i})"><img src="${pair.getFilePath()}"</img></a>`;
            document.getElementById(`Bild${i}`).innerHTML = text;
            var text = `<a onclick="buttonPress(${gedreht[0]})"><img src="${mixedArray[gedreht[0]].getFilePath()}"</img></a>`;
            document.getElementById(`Bild${gedreht[0]}`).innerHTML = text;
            versuche += 1;
            document.getElementById("versuche").innerHTML = `Daneben getippt: ${versuche} mal`;
        }
    }
    else{
        counter = 1;
        getBack();
        var pair = mixedArray[i];
        var text = `<img src="${pair.getFilePath()}"</img>`;
        document.getElementById(`Bild${i}`).innerHTML = text;
        gedreht.push(i);
    }
}

document.getElementById("versuche").innerHTML = `Daneben getippt: ${versuche} mal`;