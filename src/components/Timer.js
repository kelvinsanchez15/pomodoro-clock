import React from "react";

export default function Timer({ timeLeft, isRunning, status }) {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  return (
    <div
      className="timer-wrapper"
      style={
        isRunning
          ? status
            ? { borderColor: "#f2c700" }
            : { borderColor: "#8bcc4a" }
          : {}
      }
    >
      <div id="timer-label">
        {isRunning ? (status ? "FOCUS" : "BREAK") : "POMODORO CLOCK"}
      </div>
      <div id="time-left">
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </div>
    </div>
  );
}
