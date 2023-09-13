export function arekrender(Game){
    renderinfounder(Game);
}

function renderinfounder(Game){
    // render number of coins
    let arekC = document.getElementById('arekC');
    arekC.innerHTML = Game.arek + " arków";
    // render information about amount of coins obtained after one click and after one sec
    let arekPS = document.getElementById('perS');
    arekPS.innerHTML = "na sekunde: "+ Game.plusarekclick;

}