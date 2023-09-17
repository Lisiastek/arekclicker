export function renderStatistics(Game){
    let tempText = ""
    function addToRender(text){
        tempText += text;
    }


    addToRender(`
    
    <div style="border:white 1px solid;width:200px;color:white;cursor:pointer;border-radius:18px;margin-top:10px;" onclick="game.enterLocaction('main');">
        <h2>Powróć do mapy</h2>
    </div>
    <img class="themeBottomDiv" draggable="false" id="statisticsTheme" src="./img/night.png" alt="statistics theme background">
    
    <h1 style="color:white;">Statytyki</h1>

    Ilość arekCoinów: ${Game._arek}
    <br/>
    Łączna ilość uzyskanych arekCoinów: ${Game._arekgained}
    <br/>
    Łączna ilość straconych arekCoinów: ${Game._areklost}
    <br/>
    Łączna ilość wydanych arekCoinów: ${Game._arekpaid}
    <br/>
    Czy na tym koncie użyto cheatów: ${Game._cheat ? "Tak" : "nie"}
    <br/>
    Aktualny kostium arka: ${Game._costume}
    <br/>
    Aktualne arki na jedno kliknięcie: ${Game._plusarekclick}
    <br/>
    Aktualne arki na sekundę: ${Game._plusareksec}
    <br/>
    Czy masz raka płuc: Tak

    `
        
    );

    return tempText;
}
