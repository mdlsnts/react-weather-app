import React from "react";

export default function FormattedTime(props) {
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = "0" + hours;
  }
  let minutes = props.date.getMinutes();
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
