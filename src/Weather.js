import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";

export default function Weather(props) {
  const [message, setMessage] = useState("");
  const [city, setCity] = useState(props.defaultCity);
  const [load, setLoad] = useState(false);
  const [weather, setWeather] = useState({});
  function showWeather(response) {
    console.log(response.data.dt);
    setLoad(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      feelsLike: Math.round(response.data.main.feels_like),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      city: response.data.name,
    });
  }

  function search() {
    const apiKey = "e51522573561c800f57438ff00949faf";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

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
              <WeatherIcon code={weather.icon} />
            </div>
            <p className="currentTemp">
              {weather.temperature}
              <small className="unit">°C</small>
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
    search();
    return "Loading...";
  }
}
