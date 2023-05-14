import React from "react";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  const longitude = 74;
  const latitude = 4.7;
  const apiKey = "f49ee1e2561369c11af5b8f8810cf134";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  function handleResponse(response) {
    console.log(response.data.list[0].main);
  }
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Forcast-container m-4">
      {" "}
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="forecast-days">
              <div className="col">Mon</div>{" "}
              <div className="row">
                {" "}
                <img
                  className="forecast"
                  src={"/"}
                  alt="Weather icon"
                />
              </div>
              <div className="row">
                <div className="col">
                  {" "}
                  <span className="min-temp">19°</span>
                  <span className="max-temp"> 30°</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
