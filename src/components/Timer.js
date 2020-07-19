import React, { useState } from "react";

export default function Timer({ sessionTime }) {
  const [timeLeft, setTimeLeft] = useState(sessionTime);
  let minutes = timeLeft / 60;
  let seconds = timeLeft % 60;
  return (
    <div id="timer-label">
      <h1>Status placeholder</h1>
      <div id="time-left">
        {minutes}:{seconds}
      </div>
    </div>
  );
}
