export function alertShow(){
    const blank = document.createElement('div');
    blank.style.background = "rgba(0,0,0,0.75)";
    blank.style.backgroundFilter = 'blur(3px)';
    blank.style.height = "100vh";
    blank.style.width = "100vw";
    blank.style.zIndex = "5";
    blank.style.position = "fixed";
    blank.style.display = "flex";
    blank.style.justifyContent = "center";
    blank.style.alignContent = "center";
    blank.style.right = "0";
    blank.style.left = "0";

    const blankMessage = document.createElement('div');
    blank.appendChild(blankMessage);

    blankMessage.innerHTML = "Test";


    document.body.appendChild(blank);

}