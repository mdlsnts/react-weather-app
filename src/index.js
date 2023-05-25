import React from "react";
import ReactDOM from "react-dom/client";
import Weather from "./Weather";
import "./weather.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <h1>pastel weather</h1>
      <Weather defaultCity="Warsaw" />
      <footer>
        Project coded by&nbsp;
        <a
          href="https://linktr.ee/martadlsnts"
          target="_blank"
          rel="noreferrer"
          className="footer-link"
        >
          Marta Delos Santos
        </a>
        , open-sourced on&nbsp;
        <a
          href="https://github.com/mdlsnts/shecodes-react-app"
          target="_blank"
          rel="noreferrer"
          className="footer-link"
        >
          GitHub
        </a>
      </footer>
    </div>
  </React.StrictMode>
);
