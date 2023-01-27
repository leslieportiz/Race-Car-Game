let percent = 0

function newItem(url,i){
  let item = newImage(url)
  item.setAttribute('id', `fuel${i}`)
  return item
}           

function newCone(url,i){
  let cone = newImage(url)
  cone.setAttribute('id', `cone${i}`)
  return cone
}       