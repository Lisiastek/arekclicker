export function renderStats(Game){
    let div = document.getElementById("stats");
    let temp = "";
    temp += `
        <div>
        <label for="hp">
            <img src="./img/hp.png" width="25">
        </label>
        <progress id="hp" style="accent-color: red;" max="${Game.stats.health_max}" value="${Game.stats.health}"></progress>
        </div>
        <div>
        <label for="cpp">
            <img src="./img/ciplasplasicon.png" width="25">
        </label>
        <progress id="cpp" style="accent-color: blue;" max="${Game.stats.cpp_max}" value="${Game.stats.cpp}"></progress>
        </div>       
        <div>
        <label for="heisenberg">
            <img src="./img/heisenberg.png" width="25">
        </label>
        <progress id="${Game.stats.power_max}" style="accent-color: black;" max="100" value="${Game.stats.power}"></progress>
        </div>  
        <div>
        <label for="energy">
            <img src="./img/energy.png" width="25">
        </label>
        <progress id="energy" style="accent-color: orange;" max="${Game.stats.energy_max}" value="${Game.stats.energy}"></progress>
        </div>  
        <div>
        <label for="food">
            <img src="./img/food.png" width="25">
        </label>
        <progress id="food" style="accent-color: green;" max="${Game.stats.food_max}" value="${Game.stats.food}"></progress>
        </div>  
        <div>
        <label for="xp" style="color:white;">
            ${Game.stats.level} LV (${Game.stats.xp}/${Game.stats.xp_max})
        </label>
        <progress id="xp" style="accent-color: cyan;" max="${Game.stats.xp_max}" value="${Game.stats.xp}"></progress>
        </div> 
    `;

    
    if(div.innerHTML != temp) div.innerHTML = temp;
}