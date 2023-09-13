// imports from another files
import { click } from './click.js';

// Configuration


const arekclick = 'arekclick';


// final program

// main class
class GameCLASS{
    _arek = 0;
    _arekgained = 0; // total amount of coins gained
    _cheat = false; // is cheats was used

    earn(amount) {
        this._arek += amount;
    }
    

    get arek(){return this._arek;}
    set arek(value){
        if(value > 0)
            this._arek = Number(value);
        else
            this._arek = 0;
    }
    constructor(){
        window.addEventListener("DOMContentLoaded", function(){
            document.getElementById(arekclick).onclick = function(){
                click(Game)
            }; 
        })
    }
    

}

let Game = new GameCLASS();
// commands management
window.game = {
    earn(amount){
            Game._cheat = true;
            Game.earn(amount);
        }

};
