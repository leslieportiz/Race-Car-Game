// Create the playable character
const pc = newPlayableCharacter(100, 110)

// Create a non-playable character
const npc = newNonPlayableCharacter(50, 300)

// have the NPC start walking east immediately
// npc.walkEast(2000)
moveNPC()

// Create the battery storage
const inventory = newInventory()
move(inventory).to(0, 0)

// Create everything else
move(newImage('assets/trafficCone.png')).to(200, 450)
move(newImage('assets/trafficCone.png')).to(450, 350)
move(newImage('assets/trafficCone.png')).to(160, 250)
move(newImage('assets/trafficCone.png')).to(500, 150)
move(newImage('assets/trafficCone.png')).to(400, 650)
move(newItem('assets/gas.png')).to(600, 600)
move(newItem('assets/gas.png')).to(200, 360)
move(newItem('assets/gas.png')).to(450, 270)
move(newItem('assets/gas.png')).to(600, 150)

//finish line
move(newImage('assets/finishLine.png')).to(0,700)

function finishLine(width,height,color,x,y){
    
}