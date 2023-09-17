export function renderSwiezaki(Game){
    let tempText = ""
    function addToRender(text){
        tempText += text;
    }


    addToRender(`
    
    <div class="returnArrowBottomDIV backarrow" onclick="game.enterLocaction('main');">
        <img draggable="false" alt="back_arrow" src="./img/backarrow.png">
    </div>
    <img class="themeBottomDiv" draggable="false" id="swiezakiTheme" src="./img/infrontofbiedra.png" alt="swiezaki street">
    <img class="character" draggable="false" id="swiezakiScene" onclick="" src="./img/swiezaki.png" alt="swiezaki">
    `
        
    );

    return tempText;
}
