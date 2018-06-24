function placeHero(x, y) {
    var hero = document.getElementById('hero');
    x = Math.max(0, Math.min(350, x));
    y = Math.max(0, Math.min(350, y));

    hero.style.left = x + 'px';
    hero.style.top = y + 'px';
    hero_x = x;
    hero_y = y;
    
}

var hero_x; // current hero x coordinate
var hero_y; // current hero y coordinate

function placeGhost(x, y) {
    var ghost = document.getElementById('ghost');
    x = Math.max(0, Math.min(350, x));
    y = Math.max(0, Math.min(350, y));

    ghost.style.left = x + 'px';
    ghost.style.top = y + 'px';
    ghost_x = x;
    ghost_y = y;
    
}

var ghost_x; // current hero x coordinate
var ghost_y; // current hero y coordinate
 
placeGhost(400, 400);
 
placeHero(0, 0);

let move = 0;


document.addEventListener('keyup', function(event){
    console.log(event);
    if(event.keyCode == 39) {
        if (move%2 == 1){
            placeHero(hero_x + 50, hero_y);
        }
        else {
            placeGhost(ghost_x + 50, ghost_y);
        }
        
    } else if 
        (event.keyCode == 37) {
        if (move%2 == 1){
            placeHero(hero_x - 50, hero_y);
        }
        else {
            placeGhost(ghost_x - 50, ghost_y);
        }
    }
    
    else if (event.keyCode == 38){
        if (move%2 == 1){
            placeHero(hero_x, hero_y - 50);
        }
        else {
            placeGhost(ghost_x, ghost_y - 50);
        }
    }
    else
        if(event.keyCode == 40) {
            if (move%2 == 1){
                placeHero(hero_x, hero_y + 50);
            }
            else {
                placeGhost(ghost_x, ghost_y + 50);
            }
        }
        move++;
        console.log(move);
    
});