import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <p className="currentTemp">
        {props.celsius}&nbsp;
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={convertFahrenheit} className="unitLink">
            {" "}
            °F
          </a>
        </span>
      </p>
    );
  } else {
    let fahrenheitTemp = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <p className="currentTemp">
        {fahrenheitTemp}&nbsp;
        <span className="unit">
          <a href="/" onClick={convertCelsius} className="unitLink">
            °C{" "}
          </a>{" "}
          | °F
        </span>
      </p>
    );
  }
}
