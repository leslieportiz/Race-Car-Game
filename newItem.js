let percent = 0

  function newItem(url){
    let item = newImage(url)
    item.addEventListener('click', () => {
        item.remove()
        percent += 25
        let percentH1 = document.createElement('h1')
        percentH1.innerText = percent
        inventory.append(percentH1)
        console.log(percent)
    })
    return item
}           