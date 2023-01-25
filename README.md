# Race-Car-Game
Milestone Project 1

RACE CAR GAME FUNCTIONALITIES:
AIM: TO GET TO THE FINISH LINE BEFORE THE ENEMY.

1. IF YOU REACH FINISH LINE YOU WIN.
move.js

line 77
//FINISH LINE
            if (y > 650) {
                window.location = "congrats.html";
            }

THIS CALLS A NEW HTML FILE CALLED CONGRATS.HTML

2. IF YOUR ENEMY REACHES THE FINISH LINE BEFORE YOU, YOU LOST.

CODED THE ENEMY TO MOVE TO SPECIFIC COURSE THEN FINISH LINE

myEnemyNew.js
line 83
async function moveEnemy() {
    await enemy.walkEast(1300)
    await enemy.walkNorth(900)
    await enemy.walkEast(2200)
    await enemy.walkNorth(1200)
    await enemy.walkEast(1200)
    await enemy.walkNorth(2800)
    // move(newImage('assets/loser.gif')).to(100, 0)
    // await document.addEventListener('freeze')
    window.location = "lost.html";
}

CALLS A NEW WINDOW CALLED LOST.HTML

3. IF YOU GO OUT OF BOUND YOU LOOSE:
move.js 
line 99
//OUT OF BOUND
            if (x<90 || x > 900 || y<90 || y >800){
                window.location = "outOfBound.html";
            }
        
CALLS A NEW HTML TO OPEN

4. FOR EVERY HTML, YOU CAN GO BACK TO THE GAME 

<a href="index.html">Go back to the game<a/>

5. YOU CAN POWER UP AND SPEED UP BY GOING THROUGH CHEVRON
move.js 
line 81
//POWER UP 1
            if (x >= 400 && y >= 220 && x <= 450 && y <= 270) {
                percent += 25
                let percentH1= document.createElement('h1')
                percentH1.innerText = percent
                tank.append(percentH1)
                var fuel = document.getElementById('fuel0')
                fuel.remove()
            }
            //POWER UP 2
            if (x >= 650 && y >= 450 && x <= 700 && y <= 500) {
                percent += 25
                let percentH1 = document.createElement('h1')
                percentH1.innerText = percent
                tank.append(percentH1)
                var fuel2 = document.getElementById('fuel1')
                fuel2.remove()
            }

6. FOR ME TO REMOVE EACH CHEVRON AS I USED IT, I HAD TO DECLARE A FOR LOOP:
index.js 
line 57
//fuel
var pos = [
    `${450},${270}`,
    `${700}, ${500}`
]
for(i = 0; i<2 ; i ++){
    var x = +pos[i].substring(0,3)
    var y = +pos[i].substring(8,3).slice(1)
    move(newItem('assets/gas.png',i)).to(x,y)
}

POS IS AN ARRAY OF POSITIONS (X, Y COORDINATES) WHERE I WANT EACH CHEVRON TO BE POSITIONED. 
FOR EVERY i UNTIL IT IS LESS THAN 2, I DECLARED A NEW VARIABLE X AND Y AND MADE IT = TO POS[i]
I THEN USED THE move() function and newItem() function and passed the url for the image and the index.

IN THE newItem.js FILE YOU WILL SEE newItem(url,i) 
and you will use the passed variables to set the new image and to set an id for each chevron. (this is needed to delete specific 
chevron image by id reffered to in power up conditions. 

