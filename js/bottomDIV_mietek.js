export function renderMietek(Game){
    let tempText = ""
    function addToRender(text){
        tempText += text;
    }

    // if(!("_mietekDialogue" in Game)){
    //     Game._mietekDialogue = "?";
    // }
    

    addToRender(`
    
    <div class="returnArrowBottomDIV backarrow" onclick="game.enterLocaction('main');">
        <img draggable="false" alt="back_arrow" src="./img/backarrow.png">
    </div>
        <img class="themeBottomDiv" draggable="false" id="mietekTheme" src="./img/zulstreet.png" alt="zul street">
        <img class="character" draggable="false" id="mietekScene" onclick="game.clickMietek();" src="./img/mietek.png" alt="mietek">
        <div class="bubble" id="mietekBubble">
            <p id="mietekDialogue">${Game._mietekDialogue}</p>
        </div>
        <div class="buyElement" id="ziola">
            <img src="./img/ziola.png" alt="ziola">
            <h3>Zioła</h3>8,000
            <img style="display: inline;width: 16px;" alt="arek" src="./img/arekliker2.png">
            <br>
            +10% ARK/S -10 HP -20 C++
        </div>
        <div class="buyElement" id="heisenbergMietek">
            <img src="./img/heisenbergMietek.png" alt="heisenbergMietekImg">
            <h3>Niebieska meta</h3>50,000
            <img style="display: inline;width: 16px;" alt="arek" src="./img/arekliker2.png">
            <br>
            +25% ARK/S -5 HP -40 C++
        </div>
    `
        
    );


    return tempText;
}
// function mdiag(text){
//     let mietekDialogue = document.getElementById("mietekDialogue");
//     mietekDialogue.textContent = text;

// }