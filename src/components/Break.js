import React from "react";
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineCoffee,
} from "react-icons/ai";

export default function Break({
  breakTime,
  handleBreakDecrementClick,
  handleBreakIncrementClick,
}) {
  return (
    <div id="break-label" className="time-setter">
      <div
        id="break-decrement"
        className="button"
        onClick={handleBreakDecrementClick}
      >
        <AiOutlineMinusCircle />
      </div>
      <div title="Break Length">
        <div className="time-setter-icon">
          <AiOutlineCoffee />
        </div>
        <div id="break-length">{breakTime / 60}</div>
      </div>
      <div
        id="break-increment"
        className="button"
        onClick={handleBreakIncrementClick}
      >
        <AiOutlinePlusCircle />
      </div>
    </div>
  );
}
