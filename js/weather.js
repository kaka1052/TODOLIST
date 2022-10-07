const weather = document.querySelector("#weather");
const API_key = "4520e7c3fec62dec20b70ba4a7ef72f1";

navigator.geolocation.getCurrentPosition(okCallback);
function okCallback(data) {
  const lat = data.coords.latitude;
  const lon = data.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric&lang=kr`;

  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      weather.innerText = `${res.weather[0].description} ${res.main.temp}℃ @ ${res.name}`;
    });
}
