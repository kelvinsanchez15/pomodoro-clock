import React from "react";

export default function Session({
  sessionTime,
  handleSessionDecrementClick,
  handleSessionIncrementClick,
}) {
  return (
    <div id="session-label">
      <button id="session-decrement" onClick={handleSessionDecrementClick}>
        -
      </button>
      <div id="session-length">{sessionTime / 60}</div>
      <button id="session-increment" onClick={handleSessionIncrementClick}>
        +
      </button>
    </div>
  );
}
