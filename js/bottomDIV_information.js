export function renderInformation(Game){
    let tempText = ""
    function addToRender(text){
        tempText += text;
    }


    addToRender(`
    
    <div style="border:white 1px solid;width:200px;color:white;cursor:pointer;border-radius:18px;margin-top:10px;" onclick="game.enterLocaction('main');">
        <h2>Powróć do mapy</h2>
    </div>
    <img class="themeBottomDiv" draggable="false" id="statisticsTheme" src="./img/night.png" alt="statistics theme background">
    
    <h1 style="color:white;">Informacje</h1>

    <h2>Gra zrobiona przez Lisiastego, Minosekgga i Nuru</h2><br><br>
    <button onclick="game.enterLocaction('docs');">Dokumentacja</button>
    `
        
    );

    return tempText;
}
