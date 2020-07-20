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
      <div id="break-length">
        <div>
          <AiOutlineCoffee />
        </div>
        {breakTime / 60}
      </div>
      <div id="break-increment" onClick={handleBreakIncrementClick}>
        <AiOutlinePlusCircle />
      </div>
    </div>
  );
}
