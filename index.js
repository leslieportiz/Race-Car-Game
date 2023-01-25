const car = myCarNew(100, 110)

const enemy = myEnemyNew(150, 110)

moveEnemy()

const tank = fuelStorage()
move(tank).to(0, 800)

for(i = 0; i<850; i+=50) {
    // console.log (i)
    move(newImage('assets/trafficCone.png')).to(i, 0)
}
for(i = 0; i<750; i+=50) {
    // console.log (i)
    move(newImage('assets/trafficCone.png')).to(0, i)
}
for(i = 0; i<750; i+=50) {
    // console.log (i)
    move(newImage('assets/trafficCone.png')).to(850, i)
}

//fuel
var pos = [
    `${450},${270}`,
    `${700}, ${500}`,
    `${650},${350}`,
    `${200}, ${600}`
]
for(i = 0; i<4 ; i ++){
    var x = +pos[i].substring(0,3)
    var y = +pos[i].substring(8,3).slice(1)
    move(newItem('assets/gas.png',i)).to(x,y)
}

//finish line
move(newImage('assets/finishLine.png')).to(0,650)