import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [load, setLoad] = useState(false);
  const [weather, setWeather] = useState({});

  function showWeather(response) {
    setLoad(true);
    setWeather({
      temperature: Math.round(response.data.temperature.current),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: `https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "o1tc4ebff6db3c7b81795bb7e3b230a1";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="serach"
          placeholder="type your city..."
          onChange={updateCity}
        />
        <button type="submit" value="Search">
          Search
        </button>
      </form>
    </div>
  );

  if (load) {
    return (
      <div className="Weather">
        {form}
        <p>{city} right now:</p>
        <ul>
          <li>Temperature: {weather.temperature}°C</li>
          <li>Wind speed: {weather.wind}km/h</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Weather description: {weather.description}</li>
          <li>
            <img src={weather.icon} alt="weather-icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
