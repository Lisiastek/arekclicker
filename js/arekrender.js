export function arekrender(Game){
    renderinfounder(Game);
    renderArek(Game);
}


function renderArek(Game){
    let arek = document.getElementById('arekclick');
    arek.style.backgroundImage = "../img/arekliker2.png";
}

function renderinfounder(Game){
    // render number of coins
    let arekC = document.getElementById('arekC');
    arekC.innerHTML = Game.arek + " arków";
    // render information about amount of coins obtained after one click and after one sec
    let arekPS = document.getElementById('perS');
    arekPS.innerHTML = "na sekunde: "+ Game.plusarekclick;

}