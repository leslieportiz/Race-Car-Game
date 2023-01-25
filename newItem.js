let percent = 0

function newItem(url,i){
  let item = newImage(url)
  item.setAttribute('id', `fuel${i}`)
  return item
}           