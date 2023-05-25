import React from "react";

export default function WeatherTemperature(props) {
  return (
    <p className="currentTemp">
      {props.celsius}&nbsp;
      <span className="unit">°C</span>
    </p>
  );
}
