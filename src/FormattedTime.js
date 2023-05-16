import React from "react";

export default function FormattedTime() {
  let now = new Date();
  let hours = now.getHours();
  if (hours < 10) {
    hours = "0" + hours;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return (
    <span className="currentTime">
      <span>{hours}</span>
      <span id="separator">:</span>
      <span>{minutes}</span>
    </span>
  );
}
