export function renderSala28(Game){
    let tempText = ""
    function addToRender(text){
        tempText += text;
    }


    addToRender(`
    
    <div class="returnArrowBottomDIV backarrow" onclick="game.enterLocaction('main');>
        <img draggable="false" alt="back_arrow" src="./backarrow.png">
    </div>
        <h1>Sala 28</h1>
    `
        
    );

    return tempText;
}
