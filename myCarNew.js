function myCarNew(x, y) {
    const element = newImage('assets/myCar/front.png')
    element.style.zIndex = 1;

    function handleDirectionChange(direction) {
        if (direction === null) {
            element.src = `assets/myCar/front.png`
        }
        if (direction === 'west') {
            element.src = `assets/myCar/left.gif`
        }
        if (direction === 'north') {
            element.src = `assets/myCar/up.gif`
        }
        if (direction === 'east') {
            element.src = `assets/myCar/right.gif`
        }
        if (direction === 'south') {
            element.src = `assets/myCar/down.gif`
        }
    }

    move(element).withArrowKeys(x, y, handleDirectionChange)

    return {
        element: element
    }
}