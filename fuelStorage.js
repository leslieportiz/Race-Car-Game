function fuelStorage(){
    let tank = document.createElement('div')
    tank.style.width = '100%'
    tank.style.height = '50px'
    tank.style.display = 'flex'
    tank.style.flexDirection = 'row'
    tank.style.alignItems = 'center'
    tank.style.justifyContent = 'space-evenly'
    tank.style.border = '2px solid black'
    tank.style.backgroundColor = 'green'
    document.body.append(tank)

    // let speedOne = 25
    // let speedH1 = document.createElement('h1')
    // speedH1.innerText = speedOne
    // tank.append(speedH1)

    // let speedOTwo = 50
    // let speed2H1 = document.createElement('h1')
    // speed2H1.innerText = speedOTwo
    // tank.append(speed2H1)
    return tank
}