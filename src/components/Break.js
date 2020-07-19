import React from "react";

export default function Break({
  breakTime,
  handleBreakDecrementClick,
  handleBreakIncrementClick,
}) {
  return (
    <div id="break-label">
      <button id="break-decrement" onClick={handleBreakDecrementClick}>
        -
      </button>
      <div id="break-length">{breakTime / 60}</div>
      <button id="break-increment" onClick={handleBreakIncrementClick}>
        +
      </button>
    </div>
  );
}
