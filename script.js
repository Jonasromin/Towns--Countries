
fetch('land.json')
.then (response => response.json())
.then (countries => {

let myCountries = '<h2>Countries</h2>';
let i = 1;
countries.forEach(function(country){

myCountries += `
            <div id=country${country.id}>
            <strong>${country.countryname}</strong>
            <br>
            <br>
            <ul id=ul${country.id}></ul>
            </div>
            <br>
            <hr>
                `;
})
document.getElementById('mainContent').innerHTML = myCountries

fetch('stad.json')
.then(res => res.json())
.then(cities => {
    cities.sort(function(a,b){
        return b.population - a.population;
    })
    let sverige = document.getElementById('ul1');
    let finland = document.getElementById('ul2');
    let norge = document.getElementById('ul3');

    cities.forEach(function(city){

        if (city.countryid == 1){
            sverige.insertAdjacentHTML("beforeend", `<li>Stad: ${city.stadname}<br>Invånare: ${city.population}</li>`)
        }
        else if (city.countryid == 2){
            finland.insertAdjacentHTML("beforeend", `<li>Stad:${city.stadname} <br>Invånare: ${city.population}</li>`)
        }
        else{
            norge.insertAdjacentHTML("beforeend", `<li>Stad:${city.stadname} <br>Invånare: ${city.population}</li>`)
        }
    })
})
})

