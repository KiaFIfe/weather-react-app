import React, { useState } from "react";
import "./weather.css";
import Forecast from "./Forecast";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({run: false});
  function showWeather(response) {
    setWeatherData({
      icon : response.data.weather[0].icon,
      run: true,
      temp: response.data.main.temp,
      humid: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${icon}@2x.png`
    });
  }
  function handleSubmit(event) {
    event.PreventDefault();
  }

  if (weatherData.run) {
    return (
      <div className="Weather-container ">
        <div className="container p-4">
          {" "}
          <h2 className="mb-3">{city}</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search for a city"
              onChange={(cityName) => setCity(cityName.target.value)}
            />
            <input type="submit" />
          </form>
          <div className="row">
            <div className="col">
              <img src={weatherData.iconUrl} alt="Weather icon"/>

            </div>
            <div className="col temp">{Math.round(weatherData.temp)}°c</div>
            <div className="col">
              <ul>
                <li>Humidity: {Math.round(weatherData.humid)}</li>
                <li>Wind: {Math.round(weatherData.wind)} mph</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>
                  <h3>Weather</h3>
                </li>
                <li>Friday 13:00</li>
                <li className="text-capitalize">{weatherData.description}</li>
              </ul>
            </div>
          </div>
          <Forecast />
        </div>
      </div>
    );
  } else {
    let city = "Paris";
    const apiKey = "f49ee1e2561369c11af5b8f8810cf134";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);

    return "Loading...";
  }
}
