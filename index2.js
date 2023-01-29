const car = myCarNew(100, 110)

const enemy = myEnemyNew(150, 110)

moveEnemy()

const tank = fuelStorage()
move(tank).to(0, 800)

//cones
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
// var course = [
//     `${150},${300}`,
//     `${500},${200}`,
//     `${300},${600}`,
//     `${450},${500}`
// ]
// for (i=0;i<course.length;i++){
//     var x = +course[i].substring(0,3)
//     var y = +course[i].substring(8,3).slice(1)
//     move(newItem('assets/trafficCone.png',i)).to(x, y)
// }

move(newItem('assets/trafficCone.png','cone')).to(50, 200)
move(newItem('assets/trafficCone.png','cone')).to(100, 200)
move(newItem('assets/trafficCone.png','cone')).to(150, 200)
move(newItem('assets/trafficCone.png','cone')).to(200, 200)
move(newItem('assets/trafficCone.png','cone')).to(250, 200)
move(newItem('assets/trafficCone.png','cone')).to(250, 250)
move(newItem('assets/trafficCone.png','cone')).to(250, 300)
move(newItem('assets/trafficCone.png','cone')).to(250, 350)
move(newItem('assets/trafficCone.png','cone')).to(250, 400)
move(newItem('assets/trafficCone.png','cone')).to(250, 450)
move(newItem('assets/trafficCone.png','cone')).to(250, 500)
move(newItem('assets/trafficCone.png','cone')).to(250, 500)
move(newItem('assets/trafficCone.png','cone')).to(200, 500)
move(newItem('assets/trafficCone.png','cone')).to(150, 500)
move(newItem('assets/trafficCone.png','cone')).to(100, 500)
move(newItem('assets/trafficCone.png','cone')).to(50, 500)

move(newItem('assets/trafficCone.png','cone')).to(500, 50)
move(newItem('assets/trafficCone.png','cone')).to(500, 100)
move(newItem('assets/trafficCone.png','cone')).to(500, 150)
move(newItem('assets/trafficCone.png','cone')).to(500, 200)
move(newItem('assets/trafficCone.png','cone')).to(550, 200)
move(newItem('assets/trafficCone.png','cone')).to(600, 200)
move(newItem('assets/trafficCone.png','cone')).to(650, 200)
move(newItem('assets/trafficCone.png','cone')).to(700, 200)
move(newItem('assets/trafficCone.png','cone')).to(750, 200)
move(newItem('assets/trafficCone.png','cone')).to(800, 200)








// var collideArray = []
// for(i=0;i<course.length;i++){
//     var x = +course[i].substring(0,3)
//     var y = +course[i].substring(8,3).slice(1)
//     var first = x + 50
//     var second = y + 50
//     var add = `${first},${second},${x},${y}`
//     collideArray.push(add)
// }

//fuel
var pos = [
    `${450},${270}`,
    `${700}, ${500}`,
    `${650},${350}`,
    `${200}, ${600}`
]
for(i = 0; i<pos.length ; i ++){
    var x = +pos[i].substring(0,3)
    var y = +pos[i].substring(8,3).slice(1)
    move(newItem('assets/gas.png',i)).to(x,y)
}

//finish line
move(newImage('assets/finishLine.png')).to(0,650)