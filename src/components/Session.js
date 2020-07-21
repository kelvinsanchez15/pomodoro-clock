import React from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";

export default function Session({
  sessionTime,
  handleSessionDecrementClick,
  handleSessionIncrementClick,
}) {
  return (
    <div id="session-label" className="time-setter">
      <div
        id="session-decrement"
        className="button"
        onClick={handleSessionDecrementClick}
      >
        <AiOutlineMinusCircle />
      </div>
      <div title="Session Length">
        <div className="time-setter-icon">
          <BsBriefcase />
        </div>
        <div id="session-length">{sessionTime / 60}</div>
      </div>
      <div
        id="session-increment"
        className="button"
        onClick={handleSessionIncrementClick}
      >
        <AiOutlinePlusCircle />
      </div>
    </div>
  );
}
