import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }
  return (
    <div className="dailyForecast">
      <span>{day()}</span>&nbsp; &nbsp;
      <span className="forecastTempMax">{maxTemp()}°</span>{" "}
      <span className="forecastTempMin">{minTemp()}°</span> &nbsp;
      <span id="forecastIcon">
        <WeatherIcon code={props.data.condition.icon} size={24} />
      </span>
    </div>
  );
}
