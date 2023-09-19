export function renderDocs(Game){
    let tempText = ""
    function addToRender(text){
        tempText += text;
    }


    addToRender(`
    
    <div style="border:white 1px solid;width:200px;color:white;cursor:pointer;border-radius:18px;margin-top:10px;" onclick="game.enterLocaction('information');">
        <h2>Powróć do Informacji</h2>
    </div>
    <img class="themeBottomDiv" draggable="false" id="statisticsTheme" src="./img/night.png" alt="statistics theme background">
    
    <h1 style="color:white;">Dokumentacja</h1>
    <div id="buttonsdocs">
        <button onclick="game.enterLocaction('docs_globvar');">Globalne wartości</button>
        <button onclick="game.enterLocaction('docs_scenesfront');">Sceny - Wygląd</button>
        <button onclick="game.enterLocaction('docs_scenesback');">Sceny - Funkcjonalność</button>
        <button onclick="game.enterLocaction('docs_gameobj');">Obiekt Game</button>
        <button onclick="game.enterLocaction('docs_items');">Itemy</button>
        <button onclick="game.enterLocaction('docs_console');">Konsola</button>
        <button onclick="game.enterLocaction('docs_render');">Rendering</button>
        <button onclick="game.enterLocaction('docs_timeevents');">Eventy czasowe</button>
        
        
        <button onclick="game.enterLocaction('docs_others');">inne</button>
    </div>

    `
        
    );

    return tempText;
}
