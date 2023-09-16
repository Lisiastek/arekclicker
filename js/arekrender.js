export function arekrender(Game){
    renderinfounder(Game);
    renderArek(Game);
}


function renderArek(Game){
    let arek = document.getElementById('arekclick');
    let newstring = `<img src="./img/${Game.costume}.png" alt="arek">`;
    if(newstring!= arek.innerHTML){
        arek.innerHTML = newstring;
    }
}

function renderinfounder(Game){
    // render number of coins
    let arekC = document.getElementById('arekC');
    // arek render
    let _temp = Game.arek + " arków";
    if((_temp.includes("28"))||(_temp.includes("56"))){
        _temp = _temp.replaceAll("28", `<p class="text28">28</p>`);
        _temp = _temp.replaceAll("56", `<p class="text56">56</p>`);
    }
    if(arekC.innerHTML != _temp) arekC.innerHTML = _temp;
    // arekC.innerHTML = Game.arek + " arków";
    // render information about amount of coins obtained after one click and after one sec
    let arekPS = document.getElementById('perS');
    arekPS.innerHTML = "na sekunde: "+ Game.plusarekclick;

}