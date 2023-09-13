import { click } from './click.js';
// bosh

// Configuration


const arekclick = 'arekclick';


class GameCLASS{
    _arek = 0;
    _arekgained = 0;
    _cheat = false;

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
    

}

let Game = new GameCLASS();
window.game = {
    earn(){
            Game._cheat = true;
            Game.Earn(amount);
        }

};

window.addEventListener("DOMContentLoaded", function(){
    document.getElementById(arekclick).onclick = function(){
        click(Game)
    }; 
})