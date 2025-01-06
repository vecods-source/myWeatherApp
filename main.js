const API = "https://api.openweathermap.org/data/2.5/weather?";
const API_key = "b535cc7a02a41becaf56c92951ba9834";


const getCountryName = document.querySelector("#weather-country");
const getCountryTemp = document.querySelector("#weather-tem");
const getCountryWind = document.querySelector(".wind-speed");
const getCountryHumidity = document.querySelector(".humidity-condition");
const getCountryImage = document.querySelector(".weather-details img");
const getUserInput = document.querySelector("#country-search");


const country = getUserInput;

async function displayData(){
    const response = await fetch(API+`appid=${API_key}&q=${country.value}&units=metric`);
    const data = await response.json();

    if(response.status == 200){

        getCountryName.innerHTML = data.name;
        getCountryTemp.innerHTML = data.main.temp+"°C";
        getCountryWind.innerHTML = data.wind.speed+" km/h";
        getCountryHumidity.innerHTML = data.main.humidity+"%";
        getCountryImage.src = `assets/${data.weather[0].main}.png`;
        console.log(response);
    }
    else{
        getCountryName.innerHTML = data.message + ` error code ${data.cod}`;
        getCountryTemp.innerHTML = "";
        getCountryWind.innerHTML = "";
        getCountryHumidity.innerHTML = "";
    }
}

country.addEventListener('keydown', (event)=>{
    switch (event.key){
        case 'Enter':
            displayData();
    }
})
