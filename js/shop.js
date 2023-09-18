export function shopGen(Game){
    let where = document.getElementById("upgradeParent");
    let text = "";
    console.log(Game._upgrades);
    Game._upgradesTable.forEach(element => {
        if(element[1].showInRightMenu){
            text += `<div class="upgrades" onclick="game.buy('${element[0]}');">
            <img src="${element[1].rightMenuImg}" draggable="false">
            <p class="upgradesAmount" draggable="false">
                ${Game.howMuchCost(element[0])}
                <img src="./img/arekliker2.png" alt="arek coin" draggable="false">
            </p>
            <p class="obtainedAmount" draggable="false">
                ${element[1].obtained}
            </p>
            </div>`;
        }
    });
    if(where.innerHTML != text) where.innerHTML = text;
}