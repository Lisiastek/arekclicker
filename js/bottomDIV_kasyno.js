export function renderKasyno(Game){
    let tempText = ""
    function addToRender(text){
        tempText += text;
    }

    addToRender(`
    
    <div class="returnArrowBottomDIV backarrow" onclick="game.enterLocaction('main');">
        <img draggable="false" alt="back_arrow" src="./img/backarrow.png">
    </div>
        <h1>Kasyno</h1>
    <div>
        <span id="myCookieCounter">${"Ciastka: "+Math.round(Game._arek * 100)/100}</span><br>

        <input type="text" id="cookies">
        <button type="submit" id="myButton">Losuj</button><br><br>

        <span id="myCookiesAfterWin">${Game.help.maloCiastek==0?"":Game.help.maloCiastek}</span><br>
        <span id="myMultiplier">${Game.help.mnoznik==0?"":Game.help.mnoznik}</span>
    </div>
    `
        
    );




    return tempText;
}

