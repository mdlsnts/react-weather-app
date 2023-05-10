import React from "react";
import ReactDOM from "react-dom/client";
import Weather from "./Weather";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>Weather Search Engine</h1>
    <Weather />
    <footer>
      Project coded by&nbsp;
      <a
        href="https://linktr.ee/martadlsnts"
        target="_blank"
        rel="noreferrer"
        class="footer-link"
      >
        Marta Delos Santos
      </a>
      , open-sourced on&nbsp;
      <a
        href="https://github.com/mdlsnts/shecodes-react-app"
        target="_blank"
        rel="noreferrer"
        class="footer-link"
      >
        Github
      </a>
    </footer>
  </React.StrictMode>
);
