// imports from another files
import { click } from './click.js';
import { alertShow} from './alert.js';
import { every100ms } from './every100ms.js';
import { arekrender } from './arekrender.js';
import { rendercenter } from './centerrender.js';
import { changeLocaction } from './bottomDIV_changelocaction.js';
 
// Configuration


const arekclick = 'arekclick';


// final program

// main class
class GameCLASS{
    _arek = 0; // amount of coins
    _arekgained = 0; // total amount of coins gained
    _areklost = 0; // total amount of coins lost
    _plusarekclick = 1; // amount of coins that you get after click
    _plusareksec = 0; // amount of coins that you get after one sec 
    _cheat = false; // is cheats was used
    _costume = 'arekliker2'; // costume of arek
    _canvasBackground = false;
    _canvasBackgroundContext = false;

    _stateOfBottomCenter = 'main'; // scene of bottom center

    // safe way to get costume
    get costume(){
        return this._costume;
    }

    // earn particular amount of coins, amount means here amount of this coins
    earn(amount) {
        this._arek += amount;
        if(amount > 0)
        this._arekgained += amount;
        else
        this._areklost += amount;
    }
    // render everything that can be change (automatically doing every 100ms)
    render(){
        arekrender(Game);
        rendercenter(Game);
    }
    simulateclick(){
        click(Game)
    }
    
    // safe way to access coins (arekCoins)
    get arek(){return this._arek;}
    set arek(value){
        if(value > 0)
            this._arek = Number(value);
        else
            this._arek = 0;
    }

    // safe way to access amount of coins that you get after click (arekCoins)
    get plusarekclick(){return this._plusarekclick;}
    set plusarekclick(value){
        if(value > 0)
            this._plusarekclick = Number(value);
        else
            this._plusarekclick = 0;
    } 

    // safe way to access amount of coins that you get after one sec (arekCoins)
    get plusareksec(){return this._plusareksec;}
    set plusareksec(value){
        if(value > 0)
            this._plusareksec = Number(value);
        else
            this._plusareksec = 0;
    }   


    constructor(){
        
        window.addEventListener("DOMContentLoaded", function(){
            // adding on clicks
            document.getElementById(arekclick).onclick = function(){
                click(Game)

            

            }; 

            // canvas background
            this._canvasBackground = document.getElementById('backgroundCanvas');
            this._canvasBackgroundContext = this._canvasBackground.getContext("2d");

            
            
        })

        // adding automatic updating
        setInterval(() => {
            every100ms(Game);
        }, 100);

        // alert
        alertShow();

        // idle page behavior
        document.addEventListener('visibilitychange',
        () => {
            if(document.hidden){
                this._temptitle = document.title;
                document.title = "AC: " + this._arek;
                this._tempinactivityfunc = setInterval(() => {
                    document.title = "AC: " + this._arek;
                }, 1000);
            }
            else {
                document.title = this._temptitle;
                clearInterval(this._tempinactivityfunc)
            }
        });


    }
    

}

let Game = new GameCLASS(); // declare game

// function to change locaction (not exactly that function but function that redirects onclicks to actual function)

Game.render(); // first render to make game faster available

// commands management (from console)
window.game = {
    // allows you to add particular amount of money through web browser
    earn(amount){
            Game._cheat = true;
            Game.earn(amount);
        },
    // allows you to forcefully set amount of coins getting after one sec
    setPlusArekSec(amount){
        Game._cheat = true;
        Game.plusareksec = amount;
    },
    // allows you to forcefully set amount of coins getting after one click
    setPlusArekClick(amount){
        Game._cheat = true;
        Game.plusarekclick = amount;
    },
    enterLocaction(locaction){
        changeLocaction(Game, Locaction);   
    },
    // forcefully show alert that had you got at the beginning
    showAlert(){
        document.getElementById('blank').style.display = "flex";
    }

};
