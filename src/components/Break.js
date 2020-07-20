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
      <div id="break-decrement" onClick={handleBreakDecrementClick}>
        <AiOutlineMinusCircle />
      </div>
      <div>
        <AiOutlineCoffee />
        <div id="break-length">{breakTime / 60}</div>
      </div>
      <div id="break-increment" onClick={handleBreakIncrementClick}>
        <AiOutlinePlusCircle />
      </div>
    </div>
  );
}
