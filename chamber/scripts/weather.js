const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');
const forecast = document.querySelector('#forecast1');
const forecast2 = document.querySelector('#forecast2');
const forecast3 = document.querySelector('#forecast3');
const tempOne = document.querySelector('#tempone');
const tempTwo = document.querySelector('#temptwo');
const tempThree = document.querySelector('#tempthree');  

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=32.8491&lon=-109.7602&appid=47842b19cf0f21f5374df87e8621f068&units=imperial';
const forecasturl = 'https://api.openweathermap.org/data/2.5/forecast?lat=32.8491&lon=-109.7602&appid=47842b19cf0f21f5374df87e8621f068&units=imperial';



async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(response.text);
        }
    } catch (error) {
            console.log(error);
        }
}
apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

async function apiForecast() {
    try {
        const response = await fetch(forecasturl);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error(response.text);
        }
    } catch (error) {
            console.log(error);
        }
}
apiForecast();

const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function displayForecast(data) {
    const firstDay = weekDay[new Date(`${data.list[0].dt_txt}`).getDay()]; 
    const oneT = `${Math.round(data.list[0].main.temp)} &deg;F`;
    const secondDay = weekDay[new Date(`${data.list[3].dt_txt}`).getDay()];
    const twoT = `${Math.round(data.list[4].main.temp)} &deg;F`;
    const thirdDay = weekDay[new Date(`${data.list[11].dt_txt}`).getDay()]; 
    const threeT = `${Math.round(data.list[11].main.temp)} &deg;F`;
    
    forecast.innerHTML = firstDay;
    forecast2.innerHTML = secondDay;
    forecast3.innerHTML = thirdDay;
    tempOne.innerHTML = oneT;
    tempTwo.innerHTML = twoT;
    tempThree.innerHTML = threeT;
}