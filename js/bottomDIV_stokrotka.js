export function renderStokrotka(Game){
    let tempText = ""
    function addToRender(text){
        tempText += text;
    }


    addToRender(`
    
    <div class="returnArrowBottomDIV backarrow" onclick="game.enterLocaction('main');">
        <img draggable="false" alt="back_arrow" src="./img/backarrow.png">
    </div>
    <img class="themeBottomDiv" draggable="false" id="stokrotkaTheme" src="./img/stokrotkainside.png" alt="stokrotka inside theme background">
    
    <div class="buyElement" id="stokrotkaObrabuj">
        <img src="./img/spy.png" alt="spyImg">
        <h2 style="display:inline;">Obrabuj sklep</h2> 
        <div>
        +?
        <img style="display: inline;width: 16px;" alt="arek" src="./img/arekliker2.png">
        &nbsp;&nbsp; 7 godzin
        <br>
        -10 C++ Min. 15 lv arka
        </div>
        <div>
            Sklep może zostać zamknięty
        </div>
    </div>

    <div class="buyElement" id="stokrotkaJaskolka">
        <img src="./img/jaskolka.png" alt="jaskolkaImg">
        <h2 style="display:inline;">Jaskolka</h2> 
        <div>
        125,000
        <img style="display: inline;width: 16px;" alt="arek" src="./img/arekliker2.png">
        &nbsp;&nbsp; 7 godzin
        <br>
        -30 C++ +20 energii (MAX 1)
        </div>
        <div>
            lepsze zdobywanie dyplomów
        </div>
        <div>
            -50% ARK/S (20 min) -20% ARK/C (20 min)
        </div>
    </div>

    <div class="buyElement" id="stokrotkaMonster">
        <img src="./img/monster.png" alt="monsteraImg">
        <h2 style="display:inline;">Monster</h2> 
        <div>
        25,000
        <img style="display: inline;width: 16px;" alt="arek" src="./img/arekliker2.png">
        &nbsp;&nbsp; 7 godzin
        <br>
        -5 C++ +80 -50HP energii (MAX 1)
        </div>
        <div>
            lepsze zdobywanie dyplomów
        </div>
        <div>
            -80% ARK/S (20 min) -10% ARK/C (20 min)
        </div>
    </div>
  
    `
        
    );

    return tempText;
}
