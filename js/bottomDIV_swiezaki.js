export function renderSwiezaki(Game){
    let tempText = ""
    function addToRender(text){
        tempText += text;
    }


    addToRender(`
    
    <div class="returnArrowBottomDIV backarrow" onclick="game.enterLocaction('main');">
        <img draggable="false" alt="back_arrow" src="./img/backarrow.png">
    </div>
    <img class="themeBottomDiv" draggable="false" id="swiezakiTheme" src="./img/stokrotka-parking.png" alt="swiezaki street">
    <img class="character" draggable="false" id="swiezakiScene" onclick="" src="./img/swiezaki.png" alt="swiezaki">
    
    <div class="buyElement" id="januszSwie">
        <img src="./img/arekliker2.png" alt="areklikerImg">
        <h3>żebrz</h3> +20-500
        <img style="display: inline;width: 16px;" alt="arek" src="./img/arekliker2.png">
        <br>
        -10 HP -10 C++ +5 janusz.
    </div>
    <div class="buyElement" id="warSwiezaki">
        <img src="./img/sword.png" alt="swordImg">
        <h2 style="display:inline;">Wyzwij na wojne</h2> 
        <div>
        +20k-50k
        <img style="display: inline;width: 16px;" alt="arek" src="./img/arekliker2.png">
        -10 HP 
        <br>
        -10 C++ 
        <br>
        Min. 8 lv arka
        </div>
    </div>
    
    `
        
    );

    return tempText;
}
