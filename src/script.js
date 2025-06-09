function displayTime() {
  let vancouverDateElement = document.querySelector("#vancouver-date");
  if (vancouverDateElement) {
    vancouverDateElement.innerHTML = moment().format("MMMM Do YYYY");
  }
  let vancouverTimeElement = document.querySelector("#vancouver-time");
  if (vancouverTimeElement) {
    vancouverTimeElement.innerHTML = moment()
      .tz("America/Vancouver")
      .format("h:mm:ss [<small>]A[</small>]");
  }
  let barcelonaDateElement = document.querySelector("#barcelona-date");
  if (barcelonaDateElement) {
    barcelonaDateElement.innerHTML = moment().format("MMMM Do YYYY");
  }
  let barcelonaTimeElement = document.querySelector("#barcelona-time");
  if (barcelonaTimeElement) {
    barcelonaTimeElement.innerHTML = moment()
      .tz("Europe/Madrid")
      .format("h:mm:ss [<small>]A[</small>]");
  }
  let jakartaDateElement = document.querySelector("#jakarta-date");
  if (jakartaDateElement) {
    jakartaDateElement.innerHTML = moment().format("MMMM Do YYYY");
  }
  let jakartaTimeElement = document.querySelector("#jakarta-time");
  if (jakartaTimeElement) {
    jakartaTimeElement.innerHTML = moment()
      .tz("Asia/Jakarta")
      .format("h:mm:ss [<small>]A[</small>]");
  }
}
displayTime();
setInterval(displayTime, 1000);

function displayCity(event) {
  let chosenCity = event.target.value;
  let city = chosenCity.split("/")[1];
  let date = moment().format("MMMM Do YYYY");
  let time = moment().tz(chosenCity).format("h:mm:ss [<small>]A[</small>]");
  let cityContainer = document.querySelector("#city-container");
  cityContainer.innerHTML = `<div class="city">
          <div>
            <h2>${city}</h2>
            <div class="date">${date}</div>
          </div>
          <div class="time">${time}</div>
        </div>`;
}

let selectCityElement = document.querySelector("#select-city");
selectCityElement.addEventListener("change", displayCity);
