'use strict'
const elList = document.querySelector(`.list`)

const renderFoods = function (data) {
    const html = `
    <div class="col-3">
        <div class="card-food">
                <h3>${data.name.id}</h3>
                <p>${data.name}</p>
                <p>${data.price}$</p>
                <img src="${data.img.png}" alt="">
                <h1>${data.name.official}</h1>
        </div>
    </div>
    `

    elList.insertAdjacentHTML("beforeend", html)
}

const getCountryData = function (country) {
    const request = fetch(`https://food-service-layer-app.herokuapp.com/food/1`)
        .then(res => res.json())
        .then(data => renderCountries(...data))
}

getCountryData("germany")
getCountryData("usa")
getCountryData("brazil")
getCountryData("iceland")
getCountryData("Afghanisatn")
getCountryData("aland islands")
getCountryData("albania")
getCountryData("algeria")
