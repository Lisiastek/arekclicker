// imports
import { renderMain } from "./bottomDIV_main.js";
import { renderSala28 } from "./bottomDIV_sala28.js";
import { renderMietek } from "./bottomDIV_mietek.js";
import { renderSwiezaki } from "./bottomDIV_swiezaki.js";
import { renderKasyno } from "./bottomDIV_kasyno.js";
import { renderStatistics } from "./bottomDIV_statistics.js";
import { renderStokrotka } from "./bottomDIV_stokrotka.js";
import { renderDocs } from "./bottomDIV_docs.js";
import { renderInformation } from "./bottomDIV_information.js";
import { renderDocs_gvar } from "./bottomDIV_docs_globvar.js";
import { renderLas } from "./bottomDIV_las.js";

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
        case 'kasyno':
            temp = renderKasyno(Game);
            break;
        case 'statistics':
            temp = renderStatistics(Game);
            break;
        case 'stokrotka':
            temp = renderStokrotka(Game);
            break;
        case 'information':
            temp = renderInformation(Game);
            break;
        case 'docs':
            temp = renderDocs(Game);
            break;   
        case 'docs_globvar':
            temp = renderDocs_gvar(Game);
            break;     
        case 'las':
            temp = renderLas(Game);
            break;
    }

    let temp5 = document.getElementById("temp");
    temp5.innerHTML = temp;

    if(temp5.innerHTML != btmDiv.innerHTML){
        btmDiv.innerHTML = temp5.innerHTML;
    }


}
