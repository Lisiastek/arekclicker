export function alertShow(){
    const blank = document.createElement('div');
    blank.style.background = "rgba(0,0,0,0.75)";
    blank.style.height = "100vh";
    blank.style.width = "100vw";
    blank.style.zIndex = "5";
    blank.style.position = "fixed";
    blank.style.display = "flex";
    blank.style.right = "0";
    blank.style.top = "0";
    blank.id = "blank";
    blank.style['backdrop-filter'] = 'blur(4px)';
    blank.style.alignItems = "center";
    blank.style.justifyItems = "center";
    blank.style.justifyContent = "center";

    const blankMessage = document.createElement('div');
    blank.appendChild(blankMessage);

    blankMessage.innerHTML = `<h2>Informacja</h2>
        <p>Gra jest w celach edukacyjnych, <b>nie ma na celu szkalowania żadnej osoby</b> w tym zwłaszcza osób tutaj przedstawionych,
        wszelakie zdjęcia oraz informacje tutaj są zamieszczone w ramach żartu, nie należy ich brać na poważnie. 
        <br/><br/>
        Dodatkowo strona zbiera pliki cookies które są wymagane do prawidłowego działania tej strony. Wszelakie pliki cookies są używane wyłącznie
        do zapisu postępu w grze.
        <br /></br >
        <h3>Klikając "Akceptuję" obwieszczam że zapoznałem się z sprawami tutaj napisanymi i się z nimi zgadzam.<h3>
        <button id='buttonblankmessage' onclick='acceptblank()' style='padding: 10px;outline: none; background: none;border: none; border: 1px solid rgb(5, 203, 117);'>Akceptuję</button>`;

    blankMessage.style.background = 'cyan';
    blankMessage.style.borderRadius = "10%";
    blankMessage.style.width = "50%";
    blankMessage.style.height = "400px";
    blankMessage.style.padding = "2%";
    // let button = document.getElementById('buttonblankmessage'); 
    // button.innerHTML = "Akceptuję";


    document.body.appendChild(blank);

}