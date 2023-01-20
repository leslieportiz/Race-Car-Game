function newNonPlayableCharacter(x, y) {
    let element = newImage('assets/red-character/front.png')
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
        element.src = `./assets/red-character/right.gif`
        await sleep(time)
        return stop()
    }

    async function walkNorth(time) {
        direction = 'north'
        element.src = `./assets/red-character/up.gif`
        await sleep(time)
        return stop()
    }

    async function walkWest(time) {
        direction = 'west'
        element.src = `./assets/red-character/left.gif`
        await sleep(time)
        return stop()
    }

    async function walkSouth(time) {
        direction = 'south'
        element.src = `./assets/red-character/down.gif`
        await sleep(time)
        return stop()
    }

    function stop() {
        direction = null
        element.src = `./assets/red-character/front.png`
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

async function moveNPC() {
    await npc.walkNorth(1400)
    await npc.walkEast(1200)
    await npc.walkSouth(300)
    await npc.walkEast(1500)
    await npc.walkSouth(1500)
    await npc.walkWest(2700)
    npc.walkNorth(400)

}