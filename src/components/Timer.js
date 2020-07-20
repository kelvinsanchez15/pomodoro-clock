import React from "react";

export default function Timer({ timeLeft }) {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  return (
    <div id="timer-label">
      <div id="time-left">
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </div>
      <div>STATUS</div>
    </div>
  );
}
