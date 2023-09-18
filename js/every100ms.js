// function that runs every 100 miliseconds (0,1sec)
export function every100ms(Game){
    Game.earn(Game.plusareksec/10);
    Game.render();
}