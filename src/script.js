function displayTime() {
  let vancouverDateElement = document.querySelector("#vancouver-date");
  vancouverDateElement.innerHTML = moment().format("MMMM Do YYYY");
  let vancouverTimeElement = document.querySelector("#vancouver-time");
  vancouverTimeElement.innerHTML = moment()
    .tz("America/Vancouver")
    .format("h:mm:ss [<small>]A[</small>]");
  let barcelonaDateElement = document.querySelector("#barcelona-date");
  barcelonaDateElement.innerHTML = moment().format("MMMM Do YYYY");
  let barcelonaTimeElement = document.querySelector("#barcelona-time");
  barcelonaTimeElement.innerHTML = moment()
    .tz("Europe/Madrid")
    .format("h:mm:ss [<small>]A[</small>]");
  let jakartaDateElement = document.querySelector("#jakarta-date");
  jakartaDateElement.innerHTML = moment().format("MMMM Do YYYY");
  let jakartaTimeElement = document.querySelector("#jakarta-time");
  jakartaTimeElement.innerHTML = moment()
    .tz("Asia/Jakarta")
    .format("h:mm:ss [<small>]A[</small>]");
}
displayTime();
setInterval(displayTime, 1000);
