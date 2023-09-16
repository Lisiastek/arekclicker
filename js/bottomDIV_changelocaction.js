// function to change locaction in center div in bottom section
export function changeLocaction(Game, locaction){
    Game._stateOfBottomCenter = locaction;
    Game.render();
}