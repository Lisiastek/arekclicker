// function to change locaction in center div in bottom section
export function changeLocaction(Game, locaction){
    Game._stateOfBottomCenter = locaction;
    let div = document.getElementById("centerB");
    div.setAttribute("scene", locaction);

    Game.render();
}