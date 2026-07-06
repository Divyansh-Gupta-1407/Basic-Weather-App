const button = document.getElementById("searchButton");
const cityInput = document.getElementById("cityInput");

const cityName = document.getElementById("name");
const temperature = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("windSpeed");
const description = document.getElementById("description");

function getWeather() {

    if (cityInput.value.trim() === "") {
        alert("Please enter a city name.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=xxxx&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            cityName.textContent = data.name;
            temperature.textContent = `${data.main.temp} °C`;
            humidity.textContent = `${data.main.humidity}%`;
            wind.textContent = `${data.wind.speed} m/s`;
            description.textContent =
                data.weather[0].description
                    .split(" ")
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ");

        })
        .catch(() => {
            alert("City not found.");
        });
}

button.addEventListener("click", getWeather);

cityInput.addEventListener("keypress", function(e){
    if(e.key==="Enter"){
        getWeather();
    }
});
