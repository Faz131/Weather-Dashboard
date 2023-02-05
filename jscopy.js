// var displayLocal = document.querySelector('.rowsearch');

function getWeather(cityID) {
    var key = '68fb699c2ddc146cb7053a0a93b881bd'
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            displayWeather(data);
            console.log(data);
        })
        .catch(function () {

        });
}

window.onload = function () {
    getWeather(5318313);

}

function displayWeather(d) {

    var fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);
    document.getElementById('description').innerHTML = d.weather[0].description;
    document.getElementById('tempEL').innerHTML = fahrenheit + '&deg;';
    document.getElementById('cityEL').innerHTML = d.name;

    if (description.indexOf('sunny') > 0) {
        document.body.className = 'sunny';
    } else if (description.indexOf('cloudy') > 0) {
        document.body.className = 'cloudy';
    } else if (description.indexOf('rainy') > 0) {
        document.body.className = 'rainy;'
    }

    // console.log(displayWeather);
}