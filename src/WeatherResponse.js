import React from "react";
import Date from "./Date";
import MetricConversion from "./MetricConversion";

export default function weatherData(props) {
  return (
    <div className="weatherResponse">
      {" "}
      <div className="row">
        <div className="col">
          <img className="image pt-3" src={props.data.iconUrl} alt="Weather icon" />
        </div>
        <div className="col">
          <MetricConversion celsiusTemp={props.data.temp} />
        </div>
      </div>
      <div className="row">
        {" "}
        <div className="col">
          <ul>
            <li>Humidity: {Math.round(props.data.humid)}%</li>
            <li>Wind: {Math.round(props.data.wind)} mph</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>
              <Date date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
