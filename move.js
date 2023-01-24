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
                if ( percent == 75){
                    x -= 2
                }
                else if(percent == 100){
                    x -= 5
                }
                else{
                    x -= 1
                }
            }
            if (direction === 'north') {
                if ( percent == 75){
                    y += 2
                }
                else if(percent == 100){
                    y += 5
                }
                else{
                    y += 1
                }
                
            }
            if (direction === 'east') {
                if ( percent == 75){
                    x += 2
                }
                else if(percent == 100){
                    x += 5
                }
                else{
                    x += 1
                }

            }
            if (direction === 'south') {
                if ( percent == 75){
                    y -= 2
                }
                else if(percent == 100){
                    y -= 5
                }
                else{
                    y -= 1
                }
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
                congrats()
            }
            //POWER UP 1
            if (x >= 400 && y >= 220 && x <= 450 && y <= 270) {
                percent += 25
                let percentH1= document.createElement('h1')
                percentH1.innerText = percent
                inventory.append(percentH1)
                var cone = document.getElementById('cone0')
                cone.remove()
            }
            //POWER UP 2
            if (x >= 650 && y >= 450 && x <= 700 && y <= 500) {
                percent += 25
                let percentH1 = document.createElement('h1')
                percentH1.innerText = percent
                inventory.append(percentH1)
                var cone2 = document.getElementById('cone1')
                cone2.remove()
            }
            //OUT OF BOUND
            if (x<90 || x > 840){
                // console.log("out of bound")
                window.location = "outOfBound.html";
            }
            if (y<90 || y >800){
                // console.log("out of bound")
                window.location = "outOfBound.html";
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

function congrats(){
    // move(newImage('assets/congrats.gif')).to(100, 0)
    // document.addEventListener('freeze')
    window.location = "congrats.html";
}