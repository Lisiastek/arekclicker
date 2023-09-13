// imports from another files
import { click } from './click.js';
import { alertShow} from './alert.js';
import { every100ms } from './every100ms.js';
import { arekrender } from './arekrender.js';

// Configuration


const arekclick = 'arekclick';


// final program

// main class
class GameCLASS{
    _arek = 0;
    _arekgained = 0; // total amount of coins gained
    _areklost = 0;
    _plusarekclick = 1;
    _plusareksec = 0;
    _cheat = false; // is cheats was used

    earn(amount) {
        this._arek += amount;
        if(amount > 0)
        this._arekgained += amount;
        else
        this._areklost += amount;
    }
    render(){
        arekrender(Game);
    }
    

    get arek(){return this._arek;}
    set arek(value){
        if(value > 0)
            this._arek = Number(value);
        else
            this._arek = 0;
    }
    get plusarekclick(){return this._plusarekclick;}
    set plusarekclick(value){
        if(value > 0)
            this._plusarekclick = Number(value);
        else
            this._plusarekclick = 0;
    }   
    get plusareksec(){return this._plusareksec;}
    set plusareksec(value){
        if(value > 0)
            this._plusareksec = Number(value);
        else
            this._plusareksec = 0;
    }   
    
    constructor(){
        window.addEventListener("DOMContentLoaded", function(){
            document.getElementById(arekclick).onclick = function(){
                click(Game)
            }; 
        })
        setInterval(() => {
            every100ms(Game);
        }, 100);
        alertShow();
        this.render();
    }
    

}

let Game = new GameCLASS();
// commands management
window.game = {
    earn(amount){
            Game._cheat = true;
            Game.earn(amount);
        },
    setPlusArekSec(amount){
        Game._cheat = true;
        Game.plusareksec = amount;
    },
    setPlusArekClick(amount){
        Game._cheat = true;
        Game.plusarekclick = amount;
    },
    showAlert(){
        document.getElementById('blank').style.display = "flex";
    }

};
