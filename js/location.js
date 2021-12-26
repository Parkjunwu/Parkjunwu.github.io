const geoLocation = document.querySelector(".location")

if('geolocation' in navigator) {
  /* 위치정보 사용 가능 */
  navigator.geolocation.getCurrentPosition(async(position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4b2f64ba5a0df00aee7fe6c6e5ba8a0f&units=metric`
  const weather = await fetch(url).then(res => res.json()).catch(()=>alert("Cannot get weather."))
  // console.log(weather)
  console.log(weather.name,
  weather.weather[0].description,
  weather.main.temp)
  geoLocation.innerText = `${weather.name}
  Temperature
  ${weather.main.temp}°C
  Weather
  ${weather.weather[0].description}`
});
} else {
  /* 위치정보 사용 불가능 */
  geoLocation.innerText = "Cannot get location data"
}

