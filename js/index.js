// Configuration


const arekclick = 'arekclick';



// vars and imports

let arek = 0;



import { click } from "./click";



window.addEventListener("DOMContentLoaded", function(){
    document.getElementById(arekclick).onclick = click; 
})