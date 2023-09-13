import { click } from './click.js';
// bosh

// Configuration


const arekclick = 'arekclick';


class GameCLASS{
    _arek = 0;
    _arekgained = 0;
    _cheat = false;

    Earn(amount) {
        _arek += amount;
    }
    get arek(){return this.arek;}
    set arek(value){
        if(value > 0)
            this._arek = Number(value);
        else
            this._arek = 0;
    }
    

}

let Game = GameCLASS();

window.addEventListener("DOMContentLoaded", function(){
    document.getElementById(arekclick).onclick = function(){
        click(Game)
    }; 
})