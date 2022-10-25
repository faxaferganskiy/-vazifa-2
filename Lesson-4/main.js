const elDiv = document.querySelector(".div")
const elResult = document.querySelector(".result")
const newDiv = document.createElement("div")
elDiv.appendChild(newDiv)
newDiv.setAttribute("class", "row")
elResult.textContent = `result ${daryoPostlari.length}`

for (let news of daryoPostlari) {
    const newH1 = document.createElement("h3")
    // const newCategoria = document.createElement("h3")
    const newImg = document.createElement("img")
    const newCategoria = document.createElement("p")
    const newP = document.createElement("p")
    const colDiv = document.createElement("div")
    const newButton = document.createElement("button")
    const link = document.createElement("a")
    const thumbnail = document.createElement("p")
    

    newImg.setAttribute("src", news.photo)
    newP.setAttribute("id", news.id )
   
    link.setAttribute("href", news.links)
    newButton.setAttribute("class", "btn-lg")
    newButton.setAttribute("class", "btn-lg")
    colDiv.setAttribute("class", "col-3 card")
    colDiv.setAttribute("style", "padding: 10px;")
    newImg.setAttribute("style", "border-radius: 100px;")

    thumbnail.textContent = news.thumbnail
    newH1.textContent = news.title
    newButton.textContent = "LINK"
    newP.textContent = `ID: ${news.id}` 
    newCategoria.textContent = news.categories
    

    

    elDiv.appendChild(newDiv)
    newDiv.appendChild(colDiv)
    colDiv.appendChild(newImg)
    colDiv.appendChild(newH1)
    colDiv.appendChild(newCategoria)
    colDiv.appendChild(newP)
    colDiv.appendChild(newButton)
}
