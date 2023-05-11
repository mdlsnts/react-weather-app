import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [load, setLoad] = useState(false);
  const [weather, setWeather] = useState({});
  function showWeather(response) {
    console.log(response.data);
    setLoad(true);
    setWeather({
      temperature: Math.round(response.data.temperature.current),
      feelsLike: Math.round(response.data.temperature.feels_like),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.temperature.humidity,
      pressure: response.data.temperature.pressure,
      description: response.data.condition.description,
      icon: `https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
  }

  if (load) {
    return (
      <div className="weather">
        <div className="row">
          <div className="col-6">
            <h5>
              <strong>Today is:</strong> Thursday, May 11th 2023
            </h5>
          </div>
          <div className="col-6">
            <form className="searchForm">
              <input
                type="search"
                placeholder="enter city..."
                className="search-form"
              />
              <button className="btn-search">Search</button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h3>{props.defaultCity}</h3>
            <img src={weather.icon} alt="weather-icon" />

            <p className="currentTemp">
              {weather.temperature} <small className="unit">°C</small>
            </p>

            <p className="text-capitalize currentDescr">
              {weather.description}
            </p>
            <div className="row">
              <div className="col-6">
                <ul>
                  <li>Feels like: {weather.feelsLike}°C</li>
                  <li>Pressure: {weather.pressure} hPa</li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li>Humidity: {weather.humidity}%</li>
                  <li>Wind: {weather.wind} km/h</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "o1tc4ebff6db3c7b81795bb7e3b230a1";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);

    return "Loading...";
  }
}
