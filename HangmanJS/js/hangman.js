
// Fuege Array zu String
function combineArrayToString(wortArr){
    s = "";
    for(let i in wortArr){
        s += wortArr[i];
    }
    return s
}

function buttonPress(buchstabe){
    let change = false;
    for(let i in gesWortArray){
        if(gesWortArray[i] == buchstabe){
            stricheArray[i] = buchstabe + " "; 
            change = true;     
        }
    }

    if(change == false){
        nichtImWort();
    }

    if (verloren()==false){
        striche = combineArrayToString(stricheArray);
        document.getElementById('unbekannt').innerHTML = striche;
        document.getElementById(buchstabe).style.visibility="hidden";
        gewonnen();
    }
}

function verloren(){
    if(Leben == lose){
        document.getElementById('unbekannt').innerHTML = combineArrayToString(gesWortArray);
        document.getElementById('Buchstabensalat').style.visibility="hidden";
        document.getElementById('Siegertext').innerHTML = "Du hast leider verloren";
        document.getElementById('restartButton').className = "reload";
        return true;
    }
    return false;
}

function nichtImWort(){
    Leben = Leben + 1
    document.getElementById('Leben').innerHTML = `verbrauchte Leben: ${Leben} von ${lose}`;
    verloren();
}

function gewonnen(){
    let zaehler = 0;
    for(let i in stricheArray){
        if(stricheArray[i] != "_ "){
            zaehler = zaehler + 1;
        }
    }

    if(zaehler == gesWortArray.length){
        document.getElementById('Siegertext').innerHTML = "Hurra! Du hast das richtige Wort erraten!";
        document.getElementById('restartButton').className = "reload";
    }
}

// Gesuchtes Wort festlegen:
let zahl = Math.floor((Math.random() * woerter.length));
let gesuchtesWort = woerter[zahl]
let Leben = 0;
let lose = 7;

// Gestrichelte Linien darstellen
let stricheArray = []
let gesWortArray = []

for(var i = 0; i < gesuchtesWort.length; i++){
    stricheArray.push("_ ")
    gesWortArray.push(gesuchtesWort[i])
}

let striche = combineArrayToString(stricheArray);
document.getElementById('unbekannt').innerHTML = striche;
document.getElementById('Leben').innerHTML = "verbrauchte Leben: " + Leben + " von " + lose;