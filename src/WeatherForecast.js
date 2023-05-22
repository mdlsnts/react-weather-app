import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="dailyForecast">
        <span>Thursday</span>&nbsp; &nbsp;
        <span className="forecastTempMax">22°</span>{" "}
        <span className="forecastTempMin">17°</span> &nbsp;
        <span id="forecastIcon">
          <WeatherIcon code="01d" size={24} />
        </span>
      </div>
    </div>
  );
}
