var fetchTest = function() {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&units=imperial&exclude=hourly,daily&appid=dd7a493122beb7790f631bdbe9c4f3cf")
}
console.log(fetchTest)

fetchTest()
/*
function fetchWeather() {
    //need either buttons or elements to target coordinate for selected Park
let lat = document.querySelector("latitude").value //needs to be updated
let lon = document.querySelector("longitude").value //needs to be updated
let apiWeatherKey = "dd7a493122beb7790f631bdbe9c4f3cf"
let units = 'imperial'
let url = ("https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${apiWeatherKey}")

fetch(url)
    .then(response => response.json())
    .then(data => {

    })
    .catch(console.error)

}
fetchWeather()
console.log(response)
*/