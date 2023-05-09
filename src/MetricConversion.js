import { useState } from "react";
import React from "react";

export default function MetricConversion(props) {
  const [unit, setUnit] = useState("celsius");
  function showFar(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCel(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function changeFar() {
    return (props.celsiusTemp * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div>
        {" "}
        <div className="col temp pt-5 pb-3">
          {Math.round(props.celsiusTemp)}°
          <span className="links">
            {" "}
            C |
            <a className="links" href="/" onClick={showFar}>
              {" "}
              F
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {" "}
        <div className="col temp">
          {Math.round(changeFar())}°{" "}
          <span className="links">
            {" "}
            <a className="links" href="/" onClick={showCel}>
              C
            </a>{" "}
            | F
          </span>
        </div>
      </div>
    );
  }
}
