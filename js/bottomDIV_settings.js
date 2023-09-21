export function renderSettings(Game){
    let tempText = ""
    function addToRender(text){
        tempText += text;
    }


    addToRender(`
    <img class="themeBottomDiv" draggable="false" id="settingsTheme" src="./img/night.png" alt="statistics theme background">
        <h1>Ustawienia</h1>
        
        <div class="klm">
        <button class="SetBtn" onclick="location.reload();">Przeładuj stronę</button>
        <button class="SetBtn" onclick="game.checkVersion();">Sprawdź aktualność klienta</button>
        </div>
        ustawienia są dalej robione, nie działa wszystko
        <div class="setting"><input type="checkbox" name="setting_28effect"><label for="setting_28effect">Efekty 28 i 56</label></div>

    `
        
    );

    return tempText;
}
