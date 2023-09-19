export function renderStats(Game){
    let div = document.getElementById("stats");
    let temp = "";
    temp += `
        <div>
        <label for="hp">
            <img src="./img/hp.png" width="25">
        </label>
        <progress id="hp" max="100" value="50">
        </div>
        <div>
        <label for="cpp">
            <img src="./img/ciplasplasicon.png" width="25">
        </label>
        <progress id="cpp" max="100" value="100">
        </div>       
    `;

    
    
    div.innerHTML = temp;
}