


const arekclick = 'arekclick';



let arek = 0;



const click = function(){
    arek += 1;
    alert(arek);

}


window.addEventListener("DOMContentLoaded", function(){
    document.getElementById(arekclick).onclick = click; 
})