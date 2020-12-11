// const totalCases = document.querySelector(".total_cases");
// const deaths = document.querySelector(".deaths");
// const recovered = document.querySelector(".recovered");
// const newCases = document.querySelector(".new_cases");
// var settings = {
//   async: true,
//   crossDomain: true,
//   url:
//     "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
//   method: "GET",
//   headers: {
//     "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
//     "x-rapidapi-key": "7ab5bc98e5msh2a02aa319f5d355p1f98bdjsn76fd281af303"
//   }
// };

// $.ajax(settings).done(function(response) {
//   displayData(response);
// });

// function displayData(data) {
//   const parsedData = JSON.parse(data);
//   console.log(parsedData.countries_stat);
//   const countries = parsedData.countries_stat;
//   countries.forEach(function(country) {
//     if (country.country_name == "India") {
//       totalCases.innerHTML = country.cases;
//       deaths.innerHTML = country.deaths;
//       recovered.innerHTML = country.total_recovered;
//       newCases.innerHTML = country.new_cases;
//     }
//   });
// }


window.onload=function(){
    getCovidData();
}

const totalCases = document.querySelector(".total_cases");
const deaths = document.querySelector(".deaths");
const recovered = document.querySelector(".recovered");
const lastUpdate = document.querySelector(".timestamp");


// Replace ./data.json with your JSON feed
url = "https://covid19.mathdro.id/api/countries/india"
// let confirmed,recovered,deaths;

function getCovidData(){
fetch(url)
  .then((response) => {
    return response.json()
  })
  .then((data) => {

    console.log(data)
    // console.log(data.confirmed.value.toLocaleString('en-US'))
    // console.log(data.deaths.value.toLocaleString('en-US'))
    // console.log(data.recovered.value.toLocaleString('en-US'))
    // console.log(data.lastUpdate.substr(0,10))
    
    totalCases.innerHTML = data.confirmed.value.toLocaleString('en-US');
    deaths.innerHTML = data.deaths.value.toLocaleString('en-US');
    recovered.innerHTML = data.recovered.value.toLocaleString('en-US');
    lastUpdate.innerHTML = data.lastUpdate.substr(0,10);
  })
  .catch((err) => {
    // Do something for an error here
  })
  setTimeout(getCovidData,1000);
}
