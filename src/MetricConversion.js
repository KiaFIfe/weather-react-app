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
        <div className="col temp">
          {Math.round(props.celsiusTemp)}°c |{" "}
          <a href="/" onClick={showFar}>
            F
          </a>
        </div>
        ;
      </div>
    );
  } else {
    return (
      <div>
        {" "}
        <div className="col temp">
          {Math.round(changeFar())}°{" "}
          <a href="/" onClick={showCel}>
            C
          </a>{" "}
          | F
        </div>
        ;
      </div>
    );
  }
}
