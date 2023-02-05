

function getWeather(cityID) {

    var key = '68fb699c2ddc146cb7053a0a93b881bd'

    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)

        // fetch(url)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            (displayWeather(data));

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



    var rightNow = dayjs().format(' ' + '(' + 'MMM DD, YYYY' + ')');
    $('#cityEL').append(rightNow);




}

function weatherForecast(cityID) {

}

var forecastkey = '68fb699c2ddc146cb7053a0a93b881bd'
var url = 'http://api.openweathermap.org/data/2.5/forecast?id=5318313&appid=' + forecastkey;

fetch(url)
    .then(function (resp) {

        return resp.json();
    })
    .then(function (resp) {
        console.log(resp)
    })



    .catch(console.err)

// var forecastkey = '68fb699c2ddc146cb7053a0a93b881bd'
// var url = 'http://api.openweathermap.org/data/2.5/forecast?id=5318313&appid=' + forecastkey;
// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         var iconCode = data.weather[0].icon;
//         // Use the iconCode to fetch the icon
//     })
//     .catch(error => {
//         // Create a new image element
//         var iconCode = document.createElement("img");

//         // Set the source URL of the icon
//         iconCode.src = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";

//         // Set the alt text for the icon
//         iconCode.alt = "Weather icon";

//         // Append the icon to the HTML DOM
//         document.body.appendChild(iconCode);
//     });

function displayForecast(f) {


    var weatherRow = document.getElementById('weatherRow');
    weatherRow.innerHTML = resp.daily.map(day => {
        return '<p>Day</p>';
    })
        .join('');
}

