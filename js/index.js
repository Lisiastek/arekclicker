// imports from another files
import { click } from './click.js';
import { alertShow} from './alert.js';
import { every100ms } from './every100ms.js';
import { arekrender } from './arekrender.js';
import { rendercenter } from './centerrender.js';
import { changeLocaction } from './bottomDIV_changelocaction.js';
import { upgrades } from './upgrades.js';
import { shopGen } from './shop.js';
import { renderStats } from './renderstats.js';
import {clickAc} from './clickaction.js';
 
// Configuration


const arekclick = 'arekclick';


// final program

// main class
class GameCLASS{
    _arek = 0; // amount of coins
    _arekgained = 0; // total amount of coins gained
    _areklost = 0; // total amount of coins lost
    _arekpaid = 0; // total amount of coins used to purchase something
    _plusarekclick = 1; // amount of coins that you get after click
    _plusareksec = 0; // amount of coins that you get after one sec 
    _cheat = false; // is cheats was used
    _costume = 'arekliker2'; // costume of arek
    _canvasBackground = false;
    _canvasBackgroundContext = false;

    _stateOfBottomCenter = 'main'; // scene of bottom center

    _mietekDialogue = "WItam stałego bywalca :3";

    _upgrades = upgrades;
    _upgradesTable = [];

    stats = {
        health: 100,
        health_max: 100,
        cpp: 50,
        cpp_max: 100,
        power: 0,
        power_max: 0,
        energy: 100,
        energy_max: 100,
        food: 45,
        food_max: 100,
        level: 1,
        level_max: 999,
        xp: 0,
        xp_max: 1000,
    };

 
    help = {"maloCiastek":0, "mnoznik":0};


    getUpgradesTable(){

        let temp = Object.entries(this._upgrades);
        let newTable = [];
        for(const [key, value] of temp){
            newTable.push([key, value]);
        }      

        newTable = newTable.sort((x,y) => {
            if(x[1].importance < x[1].importance) return -1;
            if(x[1].importance > x[1].importance) return 1;
            return 0;
        });
        this._upgradesTable = newTable;
    }

    isObtained(id){
        return this._upgrades[id].obtained != 0
    }
    numObtained(id){
        return this._upgrades[id].obtained
    }
    howMuchCost(id){
        let cost = this._upgrades[id].basicCost * 1
        for(let i=1; i<=this._upgrades[id].obtained; i++) cost += cost * this._upgrades[id].costMultiplier
        return Math.round(cost, 2)
    }
    isAvaliable(id){


        // check if player's has all required buldings before
        // this._upgrades[id].needToHaveBefore.forEach(() => {

        // })
        if(this._upgrades[id].useNeedToHaveBefore){
            for(const [key, value] of Object.entries(this._upgrades[id].needToHaveBefore)){
                if(this.numObtained(key) < value) return false
            }
        }


        if(this._upgrades[id].useLocalizationsAvailable){
            if(!(this._upgrades[id].LocalizationsAvailable.includes(this._stateOfBottomCenter))) return false;
        }
        if(this._upgrades[id].obtained >= this._upgrades[id].maxAmountToBuy) return false;


        // level checking
        if(this._upgrades[id].levelMin != -1 && this._upgrades[id].levelMin <= this.stats.level) return false;
        if(this._upgrades[id].levelMax != -1 && this._upgrades[id].levelMax >= this.stats.level) return false;


        return true;


    }
    
    isBuyable(id){
        if(this.isAvaliable(id)==false) return false;

        // check if player's wallet is enough to this purchase, if not return false
        if(!(this._arek >= this.howMuchCost(id))) return false;

        // max amount to buy
       
        return true;
    }

    buy(id){
        if(!(this.isBuyable(id))) return false;
        this._arek -= this.howMuchCost(id);
        this._arekpaid += this.howMuchCost(id);
        this._upgrades[id].obtained += 1;
        this.stats.xp += this._upgrades[id].xpObtainedAfterbuy;

        this.getUpgradesTable();
        this.countPerClick();
        this.countPerSec();
        return true;
    }

    // counts areks number obtained per click 
    countPerClick(){
        let sum = 1;

        this._upgradesTable.forEach((element) => {
            // add basic
            let temp = 0;
            for(let i=1; i <= element[1].obtained; i++)
            temp += element[1].addtoClickNum + element[1].addtoClickNum * element[1].addtoClickMultiplierLocal * (element[1].obtained-1);

            // upgrades counting

            this._upgradesTable.forEach((elementUPRG) => {
                if(elementUPRG[1].multiplierAnotherItemsClick.hasOwnProperty(element[0])){
                    temp += temp * elementUPRG[1].multiplierAnotherItemsClick[element[0]];
                }
            });

            console.log(sum, temp);
            sum += temp;

        });
        
        this._upgradesTable.forEach((element) => {
            for(let i=1; i <= element[1].obtained; i++)
            sum = sum + sum * element[1].addtoClickMultiplierGlobal;
        });

        this._plusarekclick = sum;
        
    }

    // counts areks number obtained per second
    countPerSec(){
        let sum = 0;

        this._upgradesTable.forEach((element) => {
            let temp = 0;

            for(let i=1; i <= element[1].obtained; i++)
            temp += element[1].addtoSecNum + element[1].addtoSecNum * element[1].addtoSecMultiplierLocal * (element[1].obtained-1);


            this._upgradesTable.forEach((elementUPRG) => {
                if(elementUPRG[1].multiplierAnotherItemsSec.hasOwnProperty(element[0])){
                    temp += temp * elementUPRG[1].multiplierAnotherItemsSec[element[0]];
                }
            });

            sum += temp;
        });
        
        this._upgradesTable.forEach((element) => {
            for(let i=1; i <= element[1].obtained; i++)
            sum = sum + sum * element[1].addtoSecMultiplierGlobal;
        });

        this._plusareksec = sum;
        
    }

    _shinenumbering = 0;
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
    // function to add xp
    addExp(amount){
        this.stats.xp += amount;
    }

    // render everything that can be change (automatically doing every 100ms)
    render(){
        arekrender(Game);
        rendercenter(Game);
        shopGen(Game);
        renderStats(Game);
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
        this.getUpgradesTable();
        
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
    // for helping actions
    do(deaction){
        clickAc(Game, deaction);
    },
    // allows you to add particular amount of money through web browser
    earn(amount){
            Game._cheat = true;
            Game.earn(amount);
        },
    addExp(amount){
        Game._cheat = true;
        Game.stats.xp += amount;
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
        changeLocaction(Game, locaction);   
    },
    clickMietek(){
        let audio = new Audio('./audio/uhm.mp3');
        audio.play();
        let num = Math.round(Math.random() * 5);
        switch(num){
            case 0:
                Game._mietekDialogue = "zboczeńcu! Co ty wyprawiasz???!!!!";
                break;
            case 1:
                Game._mietekDialogue = "Ouh....         ";
                break;            
            case 2:
                Game._mietekDialogue = "Handlujesz czy nie????";
                break;
            case 3:
                Game._mietekDialogue = "Gapisz mi sie na bebech?";
                break;
            case 4:
                Game._mietekDialogue = "Wor do ciebie a ty do jeziora, czy jakoś tak";
                break;     
            case 5:
                Game._mietekDialogue = "Znasz kononowicza, czy nie?";
                break;          
        }
        
    },
    buy(itemName){
        Game.buy(itemName);
    },
    // buy(itemName){
    //     if(game.upgradesClick.has)
    // },
    // forcefully show alert that had you got at the beginning
    showAlert(){
        document.getElementById('blank').style.display = "flex";
    }

};

// Game._upgrades.ciplasplasbook.obtained = 10;
// Game.countPerClick();
// console.log(Game._plusarekclick);