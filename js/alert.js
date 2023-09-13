export function alertShow(){
    const blank = document.createElement('div');
    blank.style.background = "rgba(0,0,0,0.75)";
    blank.style.backgroundFilter = 'blur(3px)';
    blank.style.height = "100vh";
    blank.style.width = "100vw";
    blank.style.zIndex = "5";
    blank.style.position = "static";
}