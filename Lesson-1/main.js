'use strict'
const elList = document.querySelector(`.list`)

const renderCountries = function (data) {
    const html = `
    <div class="col-3">
        <div class="card-country">
            <img src="${data.flags.png}" alt="">
                <h3>${data.name.common}</h3>
                <p>Population: ${data.population}</p>
                <p>Region: ${data.region}</p>
                <h1>${data.name.official}</h1>
        </div>
    </div>
    `

    elList.insertAdjacentHTML("beforeend", html)
}

const getCountryData = function (country) {
    const request = fetch(`https://restcountries.com/v3.1/name/${country}`)
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
