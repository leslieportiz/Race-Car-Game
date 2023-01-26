function move(element) {
    element.style.position = 'fixed'


    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
        // console.log(left + bottom)
    }

    function moveWithArrowKeys(left, bottom, callback) {
        let direction = null;
        let x = left;
        let y = bottom;

        // console.log(x)


        element.style.left = x + 'px'
        element.style.bottom = y + 'px'

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
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }

        setInterval(moveCharacter, 1)

        document.addEventListener('keydown', function (e) {
            if (e.repeat) return;
            // console.log(x)
            // console.log(y)
            //FINISH LINE
            if (y > 700 && percent >= 100) {
                //if percent not equal to 100, cannot win, make a pop up div that says fuel not enough
                window.location = "congrats.html";
            }
            if (y > 700 && percent < 100) {
                console.log("Not Enough Fuel!")
                window.location = "notEnoughFuel.html";
            }

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
            // OUT OF BOUND
            if (x < 50 || x > 800 || y < 50) {
                window.location = "outOfBound.html";
            }

            if (x >= 100 && y >= 250 && x <= 150 && y <= 300) {
                window.location = "outOfBound.html";
                console.log("collide")
            }
            if (x >= 450 && y >= 150 && x <= 500 && y <= 200) {
                window.location = "outOfBound.html";
                console.log("collide")
            }
            if (x >= 250 && y >= 550 && x <= 300 && y <= 600) {
                window.location = "outOfBound.html";
                console.log("collide")
            }
            if (x >= 400 && y >= 450 && x <= 450 && y <= 500) {
                window.location = "outOfBound.html";
                console.log("collide")
            }

            if (e.key === 'ArrowLeft') {
                direction = 'west'
            }
            if (e.key === 'ArrowUp') {
                direction = 'north'

            }
            if (e.key === 'ArrowRight') {
                direction = 'east'
            }
            if (e.key === 'ArrowDown') {
                direction = 'south'
            }
            callback(direction)
        })

        document.addEventListener('keyup', function (e) {
            direction = null
            callback(direction)
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}

// function congrats(){
//     // move(newImage('assets/congrats.gif')).to(100, 0)
//     // document.addEventListener('freeze')
//     window.location = "congrats.html";
// }