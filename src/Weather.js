import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  return (
    <div className="weather">
      <form>
        <input
          type="search"
          placeholder="enter city..."
          className="search-form"
        />
        <button className="btn-search">Search</button>
      </form>
      <h3>Tokyo</h3>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Clear Sky</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png"
            alt="weather-icon"
          />
          6°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
