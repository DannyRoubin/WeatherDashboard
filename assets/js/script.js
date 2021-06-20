//Pulling over elements from html
//section here has elements from left bar of website
var citySearchBar = document.querySelector("#citySearchBar");
var citySearchBarButton = document.querySelector("#citySearchBarButton");
var AustinButton = document.querySelector("#AustinButton");
var ChicagoButton = document.querySelector("#ChicagoButton");
var NewYorkButton = document.querySelector("#NewYorkButton");
var OrlandoButton = document.querySelector("#OrlandoButton");
var SanFranciscoButton = document.querySelector("#SanFranciscoButton");
var SeattleButton = document.querySelector("#SeattleButton");
var DenverButton = document.querySelector("#DenverButton");
var AtlantaButton = document.querySelector("#AtlantaButton");

//html elements in top left box showing current conditions
var currentCity = document.querySelector("#currentCity");
var currentCityDate = document.querySelector("#currentCityDate");
var currentDayImg = document.querySelector("#currentDayImg");
var currentCityTemp = document.querySelector("#currentCityTemp");
var currentCityWind = document.querySelector("#currentCityWind");
var currentCityHumidity = document.querySelector("#currentCityHumidity");
var currentCityUVI = document.querySelector("#currentCityUVI");

//html elements for next day of selected city
var day1 = document.querySelector("#day1");
var day1img = document.querySelector("#day1img");
var day1temp = document.querySelector("#day1temp");
var day1wind = document.querySelector("#day1wind");
var day1humidity = document.querySelector("#day1humidity");

//html elements for next day of selected city
var day2 = document.querySelector("#day2");
var day2img = document.querySelector("#day2img");
var day2temp = document.querySelector("#day2temp");
var day2wind = document.querySelector("#day2wind");
var day2humidity = document.querySelector("#day2humidity");

//html elements for next day of selected city
var day3 = document.querySelector("#day3");
var day3img = document.querySelector("#day3img");
var day3temp = document.querySelector("#day3temp");
var day3wind = document.querySelector("#day3wind");
var day3humidity = document.querySelector("#day3humidity");

//html elements for next day of selected city
var day4 = document.querySelector("#day4");
var day4img = document.querySelector("#day4img");
var day4temp = document.querySelector("#day4temp");
var day4wind = document.querySelector("#day4wind");
var day4humidity = document.querySelector("#day4humidity");

//html elements for next day of selected city
var day5 = document.querySelector("#day5");
var day5img = document.querySelector("#day5img");
var day5temp = document.querySelector("#day5temp");
var day5wind = document.querySelector("#day5wind");
var day5humidity = document.querySelector("#day5humidity");

//small function to display the current day
function displayDay() {
  $("#currentCityDate").text(moment().format("[(]M/D/YYYY[)]"));
}
setInterval(displayDay, 1000);

//Request url's for each of the preset buttons
var requestUrlAustin =
  "https://api.openweathermap.org/data/2.5/weather?q=Austin&units=imperial&appid=55838ae1992975e39fe364d4c0e5deb7";
// var requestUrlChicago = 'https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=55838ae1992975e39fe364d4c0e5deb7'
// var requestUrlNewYork = 'https://api.openweathermap.org/data/2.5/weather?q=NewYork&units=imperial&appid=55838ae1992975e39fe364d4c0e5deb7'
// var requestUrlOrlando = 'https://api.openweathermap.org/data/2.5/weather?q=Orlando&units=imperial&appid=55838ae1992975e39fe364d4c0e5deb7'
// var requestUrlSanFrancisco = 'https://api.openweathermap.org/data/2.5/weather?q=SanFrancisco&units=imperial&appid=55838ae1992975e39fe364d4c0e5deb7'
// var requestUrlSeattle = 'https://api.openweathermap.org/data/2.5/weather?q=Seattle&units=imperial&appid=55838ae1992975e39fe364d4c0e5deb7'
// var requestUrlDenver = 'https://api.openweathermap.org/data/2.5/weather?q=Denver&units=imperial&appid=55838ae1992975e39fe364d4c0e5deb7'
// var requestUrlAtlanta = 'https://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&appid=55838ae1992975e39fe364d4c0e5deb7'

function showResponseAustin(event) {
  // Prevent default action
  event.preventDefault();

  // Browser Fetch Method for each of the buttons
  fetch(requestUrlAustin)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("Fetch Response \n-------------");
      console.log(data);

      console.log(data.main.temp);
      console.log(data.name);
      currentCity.innerHTML = (data.name);
      currentCityTemp.innerHTML = "Temp: " + (data.main.temp) + "&deg; F";
      currentCityWind.innerHTML = "Wind: " + (data.wind.speed) + "MPH";
      currentCityHumidity.innerHTML = "Humidity: " + (data.main.humidity) + "%";
      console.log(data.coord.lon);
      console.log(data.coord.lat);
      var lon = data.coord.lon;
      var lat = data.coord.lat;
      var requestUrlAustin2 = "https:api.openweathermap.org/data/2.5/onecall?lat=" +lat +"&lon=" +lon +"&units=imperial&appid=55838ae1992975e39fe364d4c0e5deb7";
      //-------------------------------------------------------------------------------------------------------------------------------------------------------
      fetch(requestUrlAustin2)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log("Fetch Response \n-------------");
          console.log(data);
          currentCityUVI.innerHTML = "UVI: " + (data.current.uvi);
         // day1temp.innerHTML = "Temp: " + (data.daily.0.temp);
        });
    });
}

AustinButton.addEventListener("click", showResponseAustin);
