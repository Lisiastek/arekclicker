export function renderLas(Game){
    let tempText = ""
    function addToRender(text){
        tempText += text;
    }


    addToRender(`
    
    <div class="returnArrowBottomDIV backarrow" onclick="game.enterLocaction('main');">
        <img draggable="false" alt="back_arrow" src="./img/backarrow.png">
    </div>
        <h1>Las jeszcze nie jest gotowy</h1>
    `
        
    );

    return tempText;
}
