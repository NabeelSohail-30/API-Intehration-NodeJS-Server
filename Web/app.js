let getWeather = () => {

    let cityName = document.querySelector("#city").value;
    document.querySelector(".main").style.display = "block";

    let body = document.querySelector("body");

    axios.get(`http://localhost:5005/weather`)
        .then(function (response) {
            console.log("response is success");
            console.log(response.data);

            document.querySelector("#main-data").innerHTML = `${response.data.name} ${response.data.main.temp}<sup>o</sup>C`;
            document.querySelector("#icon").src = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
            document.querySelector("#weather").value = response.data.weather[0].main;
            document.querySelector("#weatherDesc").value = response.data.weather[0].description;
            document.querySelector("#temp").value = response.data.main.temp + 'C';
            document.querySelector("#feelsLike").value = response.data.main.feels_like + 'C';
            document.querySelector("#maxTemp").value = response.data.main.temp_max + 'C';
            document.querySelector("#minTemp").value = response.data.main.temp_min + 'C';
            document.querySelector("#pressure").value = response.data.main.pressure + '%';
            document.querySelector("#humidity").value = response.data.main.humidity + '%';
            document.querySelector("#visibility").value = response.data.visibility + '%';
            document.querySelector("#windSpeed").value = response.data.wind.speed + ' mph';
            document.querySelector("#windDirection").value = response.data.wind.deg + ' degree';
            document.querySelector("#cloud").value = response.data.clouds.all + '%';

        })
        .catch(function (error) {
            console.log(error);
        })
}
