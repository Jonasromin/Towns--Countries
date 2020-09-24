
fetch('land.json')
.then (response => response.json())
.then (countries => {
    console.log(countries)

fetch('stad.json')
.then(res => res.json())
.then(cities => {
    cities.sort(function(a,b){
        return b.population - a.population;
    })
   
let myCountries = '<h2>Countries</h2>';
countries.forEach(function(country){

myCountries += `
            <div>
            <ul>${country.countryname}</ul>
            </div>



                `;

document.getElementById('mainContent').innerHTML = myCountries

})

let myCities = '<h2>Cities</h2>';
cities.forEach(function(city){

myCountries += `
            <div>
            <ul>
            <li>Stad:${city.stadname} <br> Invånare: ${city.population}</li>

            </ul>
            </div>



                `;

document.getElementById('mainContent').innerHTML = myCountries
   

})

})

})

