// imports
import { renderMain } from "./bottomDIV_main.js";

// render of center div
export function rendercenter(Game){
    renderbottom(Game);
}

function renderbottom(Game){
    let btmDiv = document.getElementById("centerB");

    let temp = "";

    switch(Game._stateOfBottomCenter){
        case 'main':
            temp = renderMain();
            break;
    }


    if(temp != btmDiv.innerHTML){
        btmDiv.innerHTML = temp;
    }


}
