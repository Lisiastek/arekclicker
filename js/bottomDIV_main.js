export function renderMain(Game){
    let tempText = ""
    function addToRender(text){
        tempText += text;
    }


    addToRender(`
        <img class="themeBottomDiv" draggable="false" id="Map01Theme" src="./img/mapa_01.png" alt="mapa 01">

        <div class="centerBottomLocation openLocaction" id="sala28" onclick="game.enterLocaction('sala28');">
            <img class="centerBottomLocationImage openLocactionImage" src="./img/sala28.png" draggable="false">
            <h2 class="centerBottomLocationText openLocactionText">Sala 28</h2>
        </div>

        <div class="centerBottomLocation openLocaction" id="mietek" onclick="game.enterLocaction('mietek');">
            <img class="centerBottomLocationImage openLocactionImage" src="./img/mietek.png" draggable="false">
            <h2 class="centerBottomLocationText openLocactionText" id="mietekText">Żul Mietek</h2>
        </div>

        <div class="centerBottomLocation openLocaction" id="stokrotka" onclick="game.enterLocaction('stokrotka');">
            <img class="centerBottomLocationImage openLocactionImage" src="./img/stokrotka.png" draggable="false">
        </div>

        <div class="centerBottomLocation openLocaction" id="swiezaki" onclick="game.enterLocaction('swiezaki');">
            <img class="centerBottomLocationImage openLocactionImage" src="./img/swiezaki.png" draggable="false">
            <h2 class="centerBottomLocationText openLocactionText" id="swiezakiText">Gang świeżaków</h2>
        </div>

        <div class="centerBottomLocation openLocaction" id="kasyno" onclick="game.enterLocaction('kasyno');">
            <img class="centerBottomLocationImage openLocactionImage" src="./img/arekvegas.png" draggable="false">
        </div>

        <div class="centerBottomLocation ${Game.stats.level >= 3 ? "openLocaction":"closeLocaction"}" id="las" onclick="${Game.stats.level >= 3 ? "game.enterLocaction('las');" : ""}">
            <img class="centerBottomLocationImage ${Game.stats.level >= 3 ? "openLocactionImage":"closeLocactionImage"}" src="./img/las.png" draggable="false">
            <h2 class="centerBottomLocationText ${Game.stats.level >= 3 ? "openLocactionText" : "closeLocactionText"}" id="lasText">LAS (LV 3)</h2>
        </div>

    `);

    return tempText;
}
