import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [message, setMessage] = useState("");
  const [city, setCity] = useState(props.defaultCity);
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
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      city: response.data.city,
      coordinates: response.data.coordinates,
    });
  }

  function search() {
    const apiKey = "o1tc4ebff6db3c7b81795bb7e3b230a1";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
    setMessage(event.target.value);
  }

  if (load) {
    return (
      <div className="weather">
        <div className="row">
          <div className="col-4">
            <h5>
              <strong>Today is: </strong>
              <FormattedDate date={weather.date} />
            </h5>
          </div>
          <div className="col-2">
            <h4>
              <FormattedTime date={weather.date} />
            </h4>
          </div>
          <div className="col-6">
            <form className="searchForm" onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="enter city..."
                className="search-form"
                onChange={handleCityChange}
                value={message}
              />
              <button className="btn-search" onClick={() => setMessage("")}>
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h3>{weather.city}</h3>
            <div className="currentIcon">
              <WeatherIcon code={weather.icon} size={80} />
            </div>
            <WeatherTemperature celsius={weather.temperature} />
            <p className="text-capitalize currentDescr">
              {weather.description}
            </p>
            <div className="row ">
              <div className="col-6 " id="detailsL">
                <ul>
                  <li>Feels like: {weather.feelsLike}°C</li>
                  <li>Pressure: {weather.pressure} hPa</li>
                </ul>
              </div>
              <div className="col-6" id="detailsR">
                <ul>
                  <li>Humidity: {weather.humidity}%</li>
                  <li>Wind: {weather.wind} km/h</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-6">
            <WeatherForecast coordinates={weather.coordinates} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
