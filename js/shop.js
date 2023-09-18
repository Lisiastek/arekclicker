export function shopGen(Game){
    let where = document.getElementById("upgradeParent");
    let text = "";
    Game._upgradesTable.forEach(element => {
        if(element[1].showInRightMenu){
            text += `<div class="upgrades" onclick="game.buy('element[0]');"><img src="${element[1].rightMenuImg}"></div>`;
        }
    });
    if(where.innerHTML != text) where.innerHTML = text;
}