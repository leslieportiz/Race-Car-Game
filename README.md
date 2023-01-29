# Race-Car-Game
Project 1

RACE CAR GAME FUNCTIONALITIES:
AIM: TO GET TO THE FINISH LINE BEFORE THE ENEMY WITH AT LEAST 100 MILES PER HOUR.

1. IF YOU REACH FINISH LINE YOU WIN.
move.js

line 103-107
//FINISH LINE
            if (y > 650) {
                window.location = "congrats.html";
            }

THIS CALLS A NEW HTML FILE CALLED CONGRATS.HTML

ADDED A NEXT LEVEL HTML CALLED TEST2.HTML. 

LEVEL 1 SHOWS ALL THE FUNCTIONALITIES
LEVEL 2 SHOWS CONTINUITY OF THE GAME BUT NOT ALL THE FUNCTIONALITIES

2. IF YOU GET TO THE FINISH LINE WITHOUT ENOUGH FUEL.
move.js

line 108-111
if (y > 700 && percent < 100) {
                console.log("Not Enough Fuel!")
                window.location = "notEnoughFuel.html";
}

THIS CALLS A NEW HTML FILE CALLED NOTENOUGHFUEL.HTML

3. OUT OF BOUND FROM CORNER.
move.js

line 150-152
//OUT OF BOUND
            if (x < 50 || x > 800 || y < 50) {
                window.location = "outOfBound.html";
            }

THIS CALLS A NEW HTML FILE CALLED OUTOFBOUND.HTML

4. BUMPING INTO COURSE CONE.
move.js

line 154-169
//BUMP CONE
            if (x >= 100 && y >= 250 && x <= 150 && y <= 300) {
                window.location = "outOfBound.html";
                // console.log("collide")
            }
            if (x >= 450 && y >= 150 && x <= 500 && y <= 200) {
                window.location = "outOfBound.html";
                // console.log("collide")
            }
            if (x >= 250 && y >= 550 && x <= 300 && y <= 600) {
                window.location = "outOfBound.html";
                // console.log("collide")
            }
            if (x >= 400 && y >= 450 && x <= 450 && y <= 500) {
                window.location = "outOfBound.html";
                // console.log("collide")
            }

THIS CALLS A NEW HTML FILE CALLED OUTOFBOUND.HTML

5.COLLECTING FUEL
move.js

line 114-148
//POWER UP 1
            if (x >= 400 && y >= 220 && x <= 450 && y <= 270) {
                percent += 25
                let percentH1 = document.createElement('h1')
                percentH1.innerText = percent
                tank.append(percentH1)
                var fuel = document.getElementById('fuel0')
                // fuel.remove()
            }
            //POWER UP 2
            if (x >= 650 && y >= 450 && x <= 700 && y <= 500) {
                percent += 25
                let percentH1 = document.createElement('h1')
                percentH1.innerText = percent
                tank.append(percentH1)
                var fuel2 = document.getElementById('fuel1')
                // fuel2.remove()
            }
            //POWER UP 3
            if (x >= 600 && y >= 300 && x <= 650 && y <= 350) {
                percent += 25
                let percentH1 = document.createElement('h1')
                percentH1.innerText = percent
                tank.append(percentH1)
                var fuel3 = document.getElementById('fuel2')
                // fuel3.remove()
            }
            //POWER UP 4
            if (x >= 150 && y >= 550 && x <= 200 && y <= 600) {
                percent += 25
                let percentH1 = document.createElement('h1')
                percentH1.innerText = percent
                tank.append(percentH1)
                var fuel4 = document.getElementById('fuel3')
                // fuel4.remove()
            }

SPEED
move.js

line 22-95
function moveCharacter() {
            if (direction === 'west') {
                if (percent == 25) {
                    x -= 2
                }
                else if (percent == 50) {
                    x -= 3
                }
                else if (percent == 75) {
                    x -= 4
                }
                else if (percent >= 100) {
                    x -= 5
                }
                else {
                    x -= 1
                }
            }
            if (direction === 'north') {
                if (percent == 25) {
                    y += 2
                }
                else if (percent == 50) {
                    y += 3
                }
                else if (percent == 75) {
                    y += 4
                }
                else if (percent >= 100) {
                    y += 5
                }
                else {
                    y += 1
                }

            }
            if (direction === 'east') {
                if (percent == 25) {
                    x += 2
                }
                else if (percent == 50) {
                    x += 3
                }
                else if (percent == 75) {
                    x += 4
                }
                else if (percent >= 100) {
                    x += 5
                }
                else {
                    x += 1
                }

            }
            if (direction === 'south') {
                if (percent == 25) {
                    y -= 2
                }
                else if (percent == 50) {
                    y -= 3
                }
                else if (percent == 75) {
                    y -= 4
                }
                else if (percent >= 100) {
                    y -= 5
                }
                else {
                    y -= 1
                }
            }

6. IF YOUR ENEMY REACHES THE FINISH LINE BEFORE YOU, 
YOU LOST.

CODED THE ENEMY TO MOVE TO SPECIFIC COURSE THEN FINISH LINE

myEnemyNew.js
line 83-93
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

7. FOR EVERY HTML, YOU CAN GO BACK TO THE GAME 

<a href="index.html">Go back to the game<a/>

congrats.html
lost.html
notEnoughFuel.html
outOfBound.html



