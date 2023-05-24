import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data[0].temperature.max);
    return `${temperature}`;
  }
  function minTemp() {
    let temperature = Math.round(props.data[0].temperature.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDate();

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
        <WeatherIcon code={props.data[0].condition.icon} size={24} />
      </span>
    </div>
  );
}
