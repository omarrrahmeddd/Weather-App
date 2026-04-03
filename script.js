const apiKey = "bfd3034dec7ec83b570214791094003f";

const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let Searchbox = document.getElementById("searchBox");
let SearchBtn = document.getElementById("searchBtn");

async function getweather(city){

    let res = await fetch(`${URL}${city}&appid=${apiKey}`);

    let data = await res.json();

    if(data.cod === 404){
    alert("City not found");
    return;
    }

   document.querySelector(".city").innerText = data.name;
   document.querySelector(".degree").innerText = Math.round(data.main.temp) + "°C";
   document.querySelector(".humidity").innerText =  data.main.humidity + "%";
   document.querySelector(".windd").innerText = data.wind.speed + " km/h";

}

SearchBtn.addEventListener("click", () => {
    getweather(Searchbox.value);
});

//ENTER KEY
Searchbox.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        getweather(Searchbox.value);
    }
});
// default city
getweather("Cairo");


