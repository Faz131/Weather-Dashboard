// let requestUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=Tucson,AZ&appid=68fb699c2ddc146cb7053a0a93b881bd'
var cityEL = document.getElementById('cityEL');
var tempEL = document.getElementById('tempEL');
var windEL = document.getElementById('windEL');
var humidityEL = document.getElementById('humidityEL');
var searchResults = document.querySelector('.rowsearch')
let searchStoragte = JSON.parse(localStorage.getItem('results'));

var responseText = document.getElementById('responseText');

function getApi(cityID) {

    fetch('http://api.openweathermap.org/data/2.5/forecast?q=Tucson&appid=68fb699c2ddc146cb7053a0a93b881bd')

        .then(function (response) {
            // console.log(response);
            return response.json();
        })
        .then(function (data) {
            for (var i = 0; i < data.length; i++) {
                var createLi = document.createElement('li');

                link.textContent = data[i].cityEL;

            }

        })

}











let cityName = document.createElement("li");
cityName.innerHTML = "Tucson";
document.getElementById("cityEL").appendChild(cityName);

let cityTemp = document.createElement("p");
cityTemp.innerHTML = "";
document.getElementById("tempEL").appendChild(cityTemp);



getApi();
// forecast();