export function arekrender(Game){
    renderinfounder(Game);
    renderArek(Game);
}


function renderArek(Game){
    let arek = document.getElementById('arekclick');
    let newstring = `<img src='../img/${Game.costume}.png' alt='arek' style='width: 100%;height:100%;'>`;
    if(newstring!= arek.innerHTML){
        arek.innerHTML = newstring;
    }
}

function renderinfounder(Game){
    // render number of coins
    let arekC = document.getElementById('arekC');
    arekC.innerHTML = Game.arek + " arków";
    // render information about amount of coins obtained after one click and after one sec
    let arekPS = document.getElementById('perS');
    arekPS.innerHTML = "na sekunde: "+ Game.plusarekclick;

}