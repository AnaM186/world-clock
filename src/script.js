function displayTime() {
  //Vancouver
  let vancouverElement = document.querySelector("#vancouver");
  if (vancouverElement) {
    let vancouverDateElement = document.querySelector("#vancouver .date");
    let vancouverTimeElement = document.querySelector("#vancouver .time");

    vancouverDateElement.innerHTML = moment().format("MMMM Do YYYY");
    vancouverTimeElement.innerHTML = moment()
      .tz("America/Vancouver")
      .format("h:mm:ss [<small>]A[</small>]");
  }
  //Barcelona
  let barcelonaElement = document.querySelector("#barcelona");
  if (barcelonaElement) {
    let barcelonaDateElement = document.querySelector("#barcelona .date");
    let barcelonaTimeElement = document.querySelector("#barcelona .time");

    barcelonaDateElement.innerHTML = moment().format("MMMM Do YYYY");
    barcelonaTimeElement.innerHTML = moment()
      .tz("Europe/Madrid")
      .format("h:mm:ss [<small>]A[</small>]");
  }
  //Jakarta
  let jakartaElement = document.querySelector("#jakarta");
  if (jakartaElement) {
    let jakartaDateElement = document.querySelector("#jakarta .date");
    let jakartaTimeElement = document.querySelector("#jakarta .time");

    jakartaDateElement.innerHTML = moment().format("MMMM Do YYYY");
    jakartaTimeElement.innerHTML = moment()
      .tz("Asia/Jakarta")
      .format("h:mm:ss [<small>]A[</small>]");
  }
}
displayTime();
setInterval(displayTime, 1000);

function displayCity(event) {
  let chosenCity = event.target.value;
  if (chosenCity === "current") {
    chosenCity = moment.tz.guess();
  }
  let city = chosenCity.replace("_", " ").split("/")[1];
  let date = moment().format("MMMM Do YYYY");
  let time = moment().tz(chosenCity).format("h:mm:ss [<small>]A[</small>]");
  let cityContainer = document.querySelector("#city-container");
  cityContainer.innerHTML = `<div class="city">
          <div>
            <h2>${city}</h2>
            <div class="date">${date}</div>
          </div>
          <div class="time">${time}</div>
        </div>
        <a href="index.html">All cities</a>`;
}

let selectCityElement = document.querySelector("#select-city");
selectCityElement.addEventListener("change", displayCity);
