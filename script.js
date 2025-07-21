const apiKey = "Enter your API key";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
   const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

   if (response.status == 404) {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
   } else {

      var data = await response.json();

      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".tem").innerHTML = Math.round(data.main.temp) + "°c";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
console.log(data)
setCardBackground(data.weather[0].main);

      if (data.weather[0].main == "Clouds") {
         weatherIcon.src = "./images/clouds.png"
      }

      else if (data.weather[0].main == "Clear") {
         weatherIcon.src = "./images/clear.png";
      }

      else if (data.weather[0].main == "Drizzle") {
         weatherIcon.src = "./images/drizzle.png";
      }
      else if (data.weather[0].main == "Mist") {
         weatherIcon.src = "./images/mist.png";
      }
      else if (data.weather[0].main == "Rain") {
         weatherIcon.src = "./images/rain.png";
      }
      else if (data.weather[0].main == "Snow") {
         weatherIcon.src = "./images/snow.png";
      }

      document.querySelector(".weather").style.display = "block"
      document.querySelector(".error").style.display = "none"
   }

};

function setCardBackground(condition) {
   const card = document.querySelector(".card");

   switch (condition) {
      case "Clear":
         card.style.background = "linear-gradient(135deg, #f6d365, #fda085)"; 
         break;
      case "Clouds":
         card.style.background = "linear-gradient(135deg, #d7d2cc, #304352)"; 
         break;
      case "Rain":
         card.style.background = "linear-gradient(135deg, #00c6fb, #005bea)"; 
         break;
      case "Drizzle":
         card.style.background = "linear-gradient(135deg, #89f7fe, #66a6ff)"; 
         break;
      case "Snow":
         card.style.background = "linear-gradient(135deg, #e0eafc, #cfdef3)"; 
         break;
      case "Mist":
         card.style.background = "linear-gradient(135deg, #606c88, #3f4c6b)"; 
         break;
      default:
         card.style.background = "linear-gradient(135deg, #89f7fe, #66a6ff)"; 
         break;
   }


}

searchBtn.addEventListener("click", () => {
   checkWeather(searchBox.value);
})


document.querySelector("body").style.backgroundColor = " #304352"
