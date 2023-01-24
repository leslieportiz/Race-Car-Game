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

        console.log(x)


        element.style.left = x + 'px'
        element.style.bottom = y + 'px'

        function moveCharacter() {
            if (direction === 'west') {
                x -= 1
            }
            if (direction === 'north') {
                y += 1
            }
            if (direction === 'east') {
                x += 1
            }
            if (direction === 'south') {
                y -= 1
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }

        setInterval(moveCharacter, 1)

        document.addEventListener('keydown', function (e) {
            if (e.repeat) return;
            //FINISH LINE
            if (y > 650) {
                console.log("finish line")
            }
            //POWER UP
            if (x >= 400 && y >= 220 && x <= 450 && y <= 270) {
                console.log("powerUp")
                console.log(percent)
                percent += 25
                let percentH1 = document.createElement('h1')
                percentH1.innerText = percent
                inventory.append(percentH1)
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

