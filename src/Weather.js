import React from "react";
import "./weather.css";
import Forecast from "./Forecast";

export default function Weather() {
  return (
    <div className="Weather-container ">
      <div className="container p-4">
        {" "}
        
        <div className="row">
          <div className="col">
            <img src="" alt="weather icon" />
          </div>
          <div className="col temp">13.c</div>
          <div className="col">
            <ul>
              <li>Precipitation: 4%</li>
              <li>Humidity: 80%</li>
              <li>Wind: 12 mph</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>
                <h3>Weather</h3>
              </li>
              <li>Friday 13:00</li>
              <li>Cloudy</li>
            </ul>
          </div>
        </div>
       <Forecast/>
      </div>
    </div>
  );
}
