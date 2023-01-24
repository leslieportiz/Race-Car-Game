function myEnemyNew(x, y) {
    let element = newImage('assets/myEnemy/front.png')
    element.style.zIndex = 1;
    
    let direction = null;

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
    await enemy.walkEast(700)
    await enemy.walkNorth(600)
    await enemy.walkEast(1200)
    await enemy.walkNorth(600)
    await enemy.walkEast(700)
    await enemy.walkNorth(1200)

    // await enemy.walkSouth(300)
    // await enemy.walkEast(1500)
    // await enemy.walkSouth(1500)
    // await enemy.walkWest(2700)
    // enemy.walkNorth(400)

}