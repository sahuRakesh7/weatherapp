const inputBox = document.querySelector(".input-box");
const srecBtn = document.getElementById("sreach-button");
const weather_img = document.querySelector(".weather-img");
const temp = document.querySelector(".temp");
const despr = document.querySelector(".despr");
const dropt = document.getElementById("drop");
const winde = document.getElementById("wind");

async function checkWeather(city){
    const api_key ="b1c70ff6ca63fbe35781b1610913ad51";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}` ;
    const weather_data = await fetch(`${url}`).then(response => response.json());
    
    temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

    despr.innerHTML = `${weather_data.weather[0].
     description}`;

    dropt.innerHTML = `${weather_data.main.humidity}%`;
    winde.innerHTML = `${weather_data.wind.speed}Km/H`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "assets/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "assets/clear.png";
            break;
        case 'Rain':
            weather_img.src = "assets/rain.png";
            break;
        case 'Snow':
            weather_img.src = "assets/snow.png";    
            break;
        case 'Mist':
            weather_img.src = "assets/mist.png";
            break;

    }
    
    console.log(weather_data);
}

srecBtn.addEventListener("click", ()=>{
    checkWeather(inputBox.value);
});