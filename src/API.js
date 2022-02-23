export default function getWeather() {
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=Paris&appid=5e05e57090785df86ea12df5897b33c0"
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
}
