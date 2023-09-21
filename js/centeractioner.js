import { kasynoAction } from "./bottomDIV_kasyno_action.js";
import { settingsAction } from "./bottomDIV_settings_action.js";

export function centerActioner(Game){
    switch(Game._stateOfBottomCenter){
        case "kasyno":
            kasynoAction(Game);
            break;
        case "settings":
            settingsAction(Game);
            break;
    }
}