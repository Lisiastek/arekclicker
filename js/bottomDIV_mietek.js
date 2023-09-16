export function renderMietek(Game){
    let tempText = ""
    function addToRender(text){
        tempText += text;
    }


    addToRender(`
    
    <div class="returnArrowBottomDIV backarrow" onclick="game.enterLocaction('main');">
        <img draggable="false" alt="back_arrow" src="./img/backarrow.png">
    </div>
        <img class="themeBottomDiv" draggable="false" id="mietekTheme" src="./img/zulstreet.png" alt="zul street">
        <img class="character" draggable="false" id="mietekScene" src="./img/mietek.png" alt="mietek">
        <div class="bubble" id="mietekBubble">
            <p id="mietekDialogue">Witaj czego potrzebujesz?</p>
        </div>
    `
        
    );

    return tempText;
}
