import React from "react";
import Date from "./Date";
import MetricConversion from "./MetricConversion";

export default function weatherData(props) {
  return (
    <div className="weatherResponse">
      {" "}
      <div className="row">
        <div className="col">
          <img src={props.data.iconUrl} alt="Weather icon" />
        </div>
        <MetricConversion celsiusTemp={props.data.temp} />
        <div className="col">
          <ul>
            <li>Humidity: {Math.round(props.data.humid)}</li>
            <li>Wind: {Math.round(props.data.wind)} mph</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>
              <h3>Weather</h3>
            </li>
            <li>
              <Date date={props.data.date} /> time{" "}
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
