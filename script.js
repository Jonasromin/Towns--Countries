
fetch('land.json')
.then (response => response.json())
.then (countries => {

let myCountries = '<h2>Countries</h2>';
let i = 1;
countries.forEach(function(country){

myCountries += `
            <div id=country${country.id}>
            ${country.countryname}
            </div>
                `;
})
document.getElementById('mainContent').innerHTML = myCountries

fetch('stad.json')
.then(res => res.json())
.then(cities => {
    cities.sort(function(a,b){
        return b.population - a.population;
    })
    let sverige = document.getElementById('country1');
    let finland = document.getElementById('country2');
    let norge = document.getElementById('country3');

    cities.forEach(function(city){

        if (city.countryid == 1){
            sverige.insertAdjacentHTML("beforeend", `<ul><li>Stad: ${city.stadname} <br>Invånare: ${city.population}</li></ul>`)
        }
        else if (city.countryid == 2){
            finland.insertAdjacentHTML("beforeend", `<ul><li>Stad:${city.stadname} <br>Invånare: ${city.population}</li></ul>`)
        }
        else{
            norge.insertAdjacentHTML("beforeend", `<ul><li>Stad:${city.stadname} <br>Invånare: ${city.population}</li></ul>`)
        }
    })
})
})

