const locationIn = document.getElementById("locationName");

function conversion(val) {
  return Math.floor(val - 273);
}

// https://api.openweathermap.org/data/2.5/weather?q={location}&appid={api}

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        locationIn.value +
        "&appid=" +
        config.apiKey
    )
      .then((res) => res.json())
      .then((data) => {
        const tempMarkup = `<h2>${conversion(data.main.temp)}°C</h2>`;
        const skyMarkup = `<h3>${data.weather[0].main}</h3>`;
        const locationMarkup = `<h4>${data.name}</h4>`;

        document
          .getElementById("temp")
          .insertAdjacentHTML("beforeend", tempMarkup);
        document
          .getElementById("sky")
          .insertAdjacentHTML("beforeend", skyMarkup);
        document
          .getElementById("location")
          .insertAdjacentHTML("beforeend", locationMarkup);
      })
      .catch((error) => alert("Wrong city name"));

    locationName.value = "";
  }
});
