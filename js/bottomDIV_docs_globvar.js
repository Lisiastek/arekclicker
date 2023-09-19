export function renderDocs_gvar(Game){
    let tempText = ""
    function addToRender(text){
        tempText += text;
    }


    addToRender(`
    
    <div style="border:white 1px solid;width:200px;color:white;cursor:pointer;border-radius:18px;margin-top:10px;" onclick="game.enterLocaction('docs');">
        <h2>Powróć do Strony Głównej</h2>
    </div>
    <img class="themeBottomDiv" draggable="false" id="statisticsTheme" src="./img/night.png" alt="statistics theme background">
    

    <div style="color:white;">
        Dokumentacja -> GlobVars
        Globalne wartości są wartościami które mogą zostać użyte w każdej praktycznie okazji.<br>
        Są 3 metody używania takich wartości (z czego 2 nasze):
        <br><br>
        Javascript Only
        <div class="codeDocs">
        Document.VAR = value;
        </div>
        <p onclick="game.enterLocaction('docs_gameObj');">
        Game Object
        </p> 
        (UŻYWAJ)
        <div class="codeDocs">
        Game.help.VAR = value;
        </div>
        (Polecam najpierw w 
        <p onclick="game.enterLocaction('docs_index');">
        index.js
        </p> 
        dodać wartość)
    </div>

    `
        
    );

    return tempText;
}
