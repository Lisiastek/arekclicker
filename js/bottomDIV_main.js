export function renderMain(Game){
    let tempText = ""
    function addToRender(text){
        tempText += text;
    }


    addToRender(`
        <div class="centerBottomLocation openLocaction" id="sala28" onclick="game.enterLocaction('sala28');">
            <img class="centerBottomLocationImage openLocactionImage" src="./img/sala28.png" draggable="false">
            <h2 class="centerBottomLocationText openLocactionText">Sala 28</h2>
        </div>

        <div class="centerBottomLocation openLocaction" id="mietek" onclick="game.enterLocaction('mietek');">
            <img class="centerBottomLocationImage openLocactionImage" src="./img/mietek.png" draggable="false">
            <h2 class="centerBottomLocationText openLocactionText">Żul Mietek</h2>
        </div>

        <div class="centerBottomLocation openLocaction" id="swiezaki" onclick="game.enterLocaction('swiezaki');">
            <img class="centerBottomLocationImage openLocactionImage" src="./img/swiezaki.png" draggable="false">
            <h2 class="centerBottomLocationText openLocactionText">Gang świeżaków</h2>
        </div>

        <div class="centerBottomLocation openLocaction" id="kasyno" onclick="game.enterLocaction('kasyno');">
            <img class="centerBottomLocationImage openLocactionImage" src="./img/heisenberg-spongebob.png" draggable="false">
            <h2 class="centerBottomLocationText openLocactionText">kasyno</h2>
        </div>
    `);

    return tempText;
}
