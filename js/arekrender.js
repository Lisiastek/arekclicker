export function arekrender(Game){
    renderinfounder(Game);
    renderArek(Game);
}


function renderArek(Game){
    let arek = document.getElementById('arekclick');
    arek.innerHTML = "<img src='../img/arekliker2.png' alt='arek' style='width: 100%;height:100%;'>";
}

function renderinfounder(Game){
    // render number of coins
    let arekC = document.getElementById('arekC');
    arekC.innerHTML = Game.arek + " arków";
    // render information about amount of coins obtained after one click and after one sec
    let arekPS = document.getElementById('perS');
    arekPS.innerHTML = "na sekunde: "+ Game.plusarekclick;

}