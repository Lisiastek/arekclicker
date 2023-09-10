import { click } from './click.js';
// bosh

// Configuration


const arekclick = 'arekclick';



// vars and imports

let arek = 0;



window.addEventListener("DOMContentLoaded", function(){
    document.getElementById(arekclick).onclick = function(){
        arek = click(arek);
    }; 
})