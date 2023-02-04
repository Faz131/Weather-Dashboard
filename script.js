var requestUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=68fb699c2ddc146cb7053a0a93b881bd'
var cityEL = document.getElementById('cityEL');
var tempEL = document.getElementById('tempEL');
var windEL = document.getElementById('windEL');
var humidityEL = document.getElementById('humidityEL');
let searchStoragte = JSON.parse(localStorage.getItem('results'));

var responseText = document.getElementById('responseText');

function getForcast(requestUrl) {
    fetch(requestUrl)
        .then(function (response) {
            console.log(response);
            if (response.status !== 200) {
                responseText.textContent = response.status;
            }
            return response.json();
        });
}

let weather = {

    temperature: {
        temp: '',
        unit: '',
    },
    cloudCover: '',
    city: '',
    state: '',
}

function forecast() {
    cityEL.innerHTML = `${weather.city.value}`;
    tempEL.innerHTML = `${weather.temperature.value} 67°F`;
    windEL.innerHTML = `${weather.wind.value}`;
}




getForcast(requestUrl);
forecast();