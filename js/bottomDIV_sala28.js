export function renderMain(Game){
    let tempText = ""
    function addToRender(text){
        tempText += text;
    }


    addToRender(`Jesteś w sali 28!`);

    return tempText;
}
