// purpose of this is just reacting after clicking at "thing" to obtaining coins (thing here was used because we dont want to refer to actual person)
export function click(Game){
    Game.earn(Game._plusarekclick);
    Game.stats.xp += 5;
    Game.render();
}
