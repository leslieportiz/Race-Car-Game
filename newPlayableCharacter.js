function newPlayableCharacter(x, y) {
    const element = newImage('assets/player1/front.png')
    element.style.zIndex = 1;

    function handleDirectionChange(direction) {
        if (direction === null) {
            element.src = `assets/player1/front.png`
        }
        if (direction === 'west') {
            element.src = `assets/player1/left.gif`
        }
        if (direction === 'north') {
            element.src = `assets/player1/up.gif`
        }
        if (direction === 'east') {
            element.src = `assets/player1/right.gif`
        }
        if (direction === 'south') {
            element.src = `assets/player1/down.gif`
        }
    }

    move(element).withArrowKeys(x, y, handleDirectionChange)

    return {
        element: element
    }
}