function fuelStorage(){
    let inventory = document.createElement('div')
    inventory.style.width = '100%'
    inventory.style.height = '50px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'green'
    document.body.append(inventory)

    let speedOne = 25
    let speedH1 = document.createElement('h1')
    speedH1.innerText = speedOne
    inventory.append(speedH1)

    let speedOTwo = 50
    let speed2H1 = document.createElement('h1')
    speed2H1.innerText = speedOTwo
    inventory.append(speed2H1)
    return inventory
}