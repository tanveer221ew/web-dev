const apiKey = 'fc7c7556489e44f052bc6632dad524a7';

function getWeather() {
    const city = document.getElementById("search").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("city").textContent = data.name;
            document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
            document.getElementById("wind-speed").textContent = `Wind speed: ${data.wind.speed} m/s`;

        })
        .catch(error => console.error('Error:', error));
        document.getElementById("container").style.height = "300px"
        setTimeout(() =>{
            document.getElementById("city").style.display = "block"
            document.getElementById("humidity").style.display = "block"
            document.getElementById("wind-speed").style.display = "block"
            document.getElementById("weather-icon").style.display = "block"
            document.getElementById("weather-icon").style.opacity = "1"
        }, 500)

}