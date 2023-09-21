var hasdecision = false;
function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
        result = xmlhttp.responseText;
    }
    return result;
}
function checkVar(){
    if(hasdecision) return;
    let result = loadFile("version.txt");
    if(result!="1.3 ALPH"){
        hasdecision = true;
        let decision = confirm("Aktualna wersja twojego klienta to: 1.3 ALPH a powinno być "+String(result)+". Czy chcesz przeładować stronę by uzyskać najnowsze updaty? Uwaga to wykasuje twój postęp jeżeli nie posiadasz savów!");
        if(decision){
            location.reload();
        }
    }
}
setInterval(checkVar,500);