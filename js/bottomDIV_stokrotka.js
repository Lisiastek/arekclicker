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
    
  
    `
        
    );

    return tempText;
}
