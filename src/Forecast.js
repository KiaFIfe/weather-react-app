import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
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
                <img className="forecast" src={props.data.iconUrl} alt="Weather icon" />
              </div>
              <div className="row">
                <span className="col">19</span>
                <span className="col">30</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="forecast-days">
              <div className="col">Mon</div>{" "}
              <div className="row">
                {" "}
                <img className="forecast" src={props.data.iconUrl} alt="Weather icon" />
              </div>
              <div className="row">
                <span className="col">19</span>
                <span className="col">30</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="forecast-days">
              <div className="col">Mon</div>{" "}
              <div className="row">
                {" "}
                <img className="forecast" src={props.data.iconUrl} alt="Weather icon" />
              </div>
              <div className="row">
                <span className="col">19</span>
                <span className="col">30</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="forecast-days">
              <div className="col">Mon</div>{" "}
              <div className="row">
                {" "}
                <img className="forecast" src={props.data.iconUrl} alt="Weather icon" />
              </div>
              <div className="row">
                <span className="col">19</span>
                <span className="col">30</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="forecast-days">
              <div className="col">Mon</div>{" "}
              <div className="row">
                {" "}
                <img className="forecast" src={props.data.iconUrl} alt="Weather icon" />
              </div>
              <div className="row">
                <span className="col">19</span>
                <span className="col">30</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
