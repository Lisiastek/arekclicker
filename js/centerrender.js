// imports
import { renderMain } from "./bottomDIV_main.js";
import { renderSala28 } from "./bottomDIV_sala28.js";
import { renderMietek } from "./bottomDIV_mietek.js";
import { renderSwiezaki } from "./bottomDIV_swiezaki.js";

// render of center div
export function rendercenter(Game){
    renderbottom(Game);
}

function renderbottom(Game){
    let btmDiv = document.getElementById("centerB");

    let temp = "";

    switch(Game._stateOfBottomCenter){
        case 'main':
            temp = renderMain(Game);
            break;
        case 'sala28':
            temp = renderSala28(Game);
            break;
        case 'mietek':
            temp = renderMietek(Game);
            break;
        case 'swiezaki':
            temp = renderSwiezaki(Game);
            break;
    }


    if(temp != btmDiv.innerHTML){
        btmDiv.innerHTML = temp;
    }


}
