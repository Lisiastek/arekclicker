// function that runs every 100 miliseconds (0,1sec)

import { centerActioner } from './centeractioner.js';
import { levelSystem } from './levelsystem.js';

export function every100ms(Game){
    Game.earn(Game.plusareksec/10);
    Game.render();
    centerActioner(Game);
    levelSystem(Game);
}