import React from "react";

export default function Weather() {
  return (
    <div className="weather">
      <div className="row">
        <div className="col-6">
          <h5>Today is: Thursday, May 11th 2023</h5>
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
          <h3>Tokyo</h3>
          <img
            src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png"
            alt="weather-icon"
          />

          <p className="currentTemp">
            18 <small className="unit">°C</small>
          </p>

          <p className="currentDescr">Clear Sky</p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>Highest: 22°C</li>
                <li>Lowest: 15°C</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity: 72%</li>
                <li>Wind: 13 km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
