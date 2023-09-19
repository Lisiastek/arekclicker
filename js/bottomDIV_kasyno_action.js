export function kasynoAction(Game){
    document.getElementById("myButton").onclick = function(){
        let myCookiesToLose = Number(document.getElementById("cookies").value);
        let randomValue = Math.floor(Math.random() * 100);
    
        if(myCookiesToLose > Game._arek) {
            Game.help.maloCiastek = "Masz za mało arków!";
        }
    
        else if(myCookiesToLose<0) {
            Game.help.maloCiastek = "Liczba arków musi być dodatnia!";
        }
        else if(isNaN(myCookiesToLose)) {
            Game.help.maloCiastek = "Nie wolno tak";
        }
        else {
            document.getElementById("cookies").value = 0;
            if(randomValue<5) {
                let myMultiplier = Math.floor(Math.random() * 10)+2;
                myCookiesToLose*=myMultiplier;
                Game._arek+=myCookiesToLose;
                Game.help.maloCiastek = "Wygrałeś " + myCookiesToLose + " arków!"
                Game.help.mnoznik = "Mnożnik: X" + myMultiplier
            }
            else {
                Game._arek-=myCookiesToLose
                Game.help.maloCiastek = "Przegrałeś!";
                Game.help.mnoznik = ""; 
            }
        }
        
    }
}