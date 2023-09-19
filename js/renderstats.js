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
        <div>
        <label for="heisenberg">
            <img src="./img/heisenberg.png" width="25">
        </label>
        <progress id="heisenberg" max="100" value="100">
        </div>  
        <div>
        <label for="energy">
            <img src="./img/energy.png" width="25">
        </label>
        <progress id="energy" max="100" value="100">
        </div>  
        <div>
        <label for="food">
            <img src="./img/food.png" width="25">
        </label>
        <progress id="food" max="100" value="100">
        </div>  
        <div>
        <label for="xp" style="color:white;">
            5 LV (200/300)
        </label>
        <progress id="xp" max="100" value="100">
        </div> 
    `;

    
    
    div.innerHTML = temp;
}