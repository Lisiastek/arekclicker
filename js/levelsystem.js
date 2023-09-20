// lv 1 <- na start
// lv 2 <- do awansu 1000
// lv 3 <- do awansu 2000
// lv 4 <- do awansu 5000
// lv 5 <- do awansu 8000
// lv 6 <- do awansu 15000
export function levelSystem(Game){
    switch(Game.stats.level){
        case 1:
            {
                if(Game.stats.xp > Game.stats.xp_max){
                    Game.stats.level = 2;
                    Game.stats.xp_max = 2000;
                    Game.stats.xp -= 1000;
                }
                break;
            }
        case 2:
            {
                if(Game.stats.xp > Game.stats.xp_max){
                    Game.stats.level = 3;
                    Game.stats.xp_max = 5000;
                    Game.stats.xp -= 2000;
                }
                break;
            }
        case 3:
            {
                if(Game.stats.xp > Game.stats.xp_max){
                    Game.stats.level = 4;
                    Game.stats.xp_max = 8000;
                    Game.stats.xp -= 5000;
                }
                break;
            }
        case 4:
            {
                if(Game.stats.xp > Game.stats.xp_max){
                    Game.stats.level = 5;
                    Game.stats.xp_max = 15000;
                    Game.stats.xp -= 8000;
                }
                break;
            }
        case 5:
            {
                if(Game.stats.xp > Game.stats.xp_max){
                    Game.stats.level = 6;
                    Game.stats.xp_max = 30000;
                    Game.stats.xp -= 15000;
                }
                break;
            }

    }
}