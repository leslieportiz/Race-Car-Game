function myEnemyNew(x, y) {
    let element = newImage('assets/myEnemy/front.png')
    element.style.zIndex = 1;
    
    let direction = null;

    function moveCharacter() {
        if (direction === 'west') {
            x -= 0.5
        }
        if (direction === 'north') {
            y += 0.5
        }
        if (direction === 'east') {
            x += 0.5
        }
        if (direction === 'south') {
            y -= 0.5
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(moveCharacter, 1)

    async function walkEast(time) {
        direction = 'east'
        element.src = `./assets/myEnemy/right.gif`
        await sleep(time)
        return stop()
    }

    async function walkNorth(time) {
        direction = 'north'
        element.src = `./assets/myEnemy/up.gif`
        await sleep(time)
        return stop()
    }

    async function walkWest(time) {
        direction = 'west'
        element.src = `./assets/myEnemy/left.gif`
        await sleep(time)
        return stop()
    }

    async function walkSouth(time) {
        direction = 'south'
        element.src = `./assets/myEnemy/down.gif`
        await sleep(time)
        return stop()
    }

    function stop() {
        direction = null
        element.src = `./assets/myEnemy/front.png`
    }

    //enemy won
    // if(y > 650){
    //     console.log("you lost")
    // }
    

    return {
        element: element,
        walkWest: walkWest,
        walkNorth: walkNorth,
        walkEast: walkEast,
        walkSouth: walkSouth,
        stop: stop
    }

    
}

function sleep(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

async function moveEnemy() {
    await enemy.walkEast(1300)
    await enemy.walkNorth(1700)
    await enemy.walkEast(2000)
    await enemy.walkNorth(1000)
    await enemy.walkWest(1400)
    await enemy.walkNorth(2300)
    // move(newImage('assets/loser.gif')).to(100, 0)
    // await document.addEventListener('freeze')
    window.location = "lost.html";
}