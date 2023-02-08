var searchEl = document.getElementById('search-input');

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

function weatherForecast() {

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




$('#searchButton').click(function () {
    var saveSearch = $('#search-input').val();
    // console.log('City', saveSearch);


    localStorage.setItem('City', JSON.stringify(saveSearch));

});
document.getElementById('search-input').innerHTML
    = JSON.parse(localStorage.getItem('City'));


// function citySearch(query) {
//     var searchCity = searchEl.value;
//     console.log(searchCity);

//     var key = '68fb699c2ddc146cb7053a0a93b881bd'
//     var requestUrl = `https://api.openmap.org/search?q=${query}&appid=${key}`;

//     fetch(requestUrl)
//         .then(function (resp) {

//             return resp.json();
//         })
//         .then(function (resp) {
//             // console.log(resp)


//         })

// }

// searchButton.addEventListener('click', citySearch);

