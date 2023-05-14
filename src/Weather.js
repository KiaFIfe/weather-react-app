import React, { useState } from "react";
import "./weather.css";
import Forecast from "./Forecast";
import WeatherResponse from "./WeatherResponse";
import axios from "axios";

export default function Weather(props) {
  const [city, setCity] = useState(props.city);
  const [weatherData, setWeatherData] = useState({ run: false });
  function showWeather(response) {
    console.log(response.data.coord);
    let icon = response.data.weather[0].icon;
    setWeatherData({
      run: true,
      coord:response.data.coord,
      date: new Date(response.data.dt * 1000),
      temp: response.data.main.temp,
      humid: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${icon}@2x.png`,
    });
  }
  function searchCity() {
    const apiKey = "f49ee1e2561369c11af5b8f8810cf134";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(url).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }
  function search(event) {
    setCity(event.target.value);
  }

  if (weatherData.run) {
    return (
      <div>
        <div className="container p-4">
          <div className="weather-container">
            {" "}
            <h2 className="text-capitalize title-city">{city}</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Search for a city"
                onChange={search}
                className="m-3"
              />
              <input type="submit" />
            </form>
            <WeatherResponse data={weatherData} />
            <Forecast coord={weatherData.coord} />
          </div>
        </div>
      </div>
    );
  } else {
    searchCity();
    return "Loading...";
  }
}
