const elList = document.querySelector(".row")


const renderCountries = function(data) {
    const html = `
    <div class="col-3">
    <div class="card-country">
    <img src="${data.img}"></img>
    <h3>Name: ${data.name}</h3>
    <p>Price: ${data.price}</p>
    <p>Bowls: ${data.bowls}</p>
    </div>
    </div>
    `

    elList.insertAdjacentHTML("beforeend", html)
}

const getNumber  = function(number) {
    const request = fetch(`https://food-service-layer-app.herokuapp.com/food/${number}`) 
    .then(res => res.json())
    .then(data => renderCountries(...data))

}



getNumber(1)
getNumber(2)
getNumber(3)
getNumber(4)
