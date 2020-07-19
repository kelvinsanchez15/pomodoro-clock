import React, { useState } from "react";
import "./App.css";
import Break from "./components/Break";
import Session from "./components/Session";
import Timer from "./components/Timer";

function App() {
  const [breakTime, setBreakTime] = useState(300);
  const [sessionTime, setSessionTime] = useState(1500);

  const handleBreakDecrementClick = () => {
    if (breakTime <= 60) {
      return;
    }
    setBreakTime(breakTime - 60);
  };

  const handleBreakIncrementClick = () => {
    setBreakTime(breakTime + 60);
  };

  const handleSessionDecrementClick = () => {
    if (sessionTime <= 60) {
      return;
    }
    setSessionTime(sessionTime - 60);
  };

  const handleSessionIncrementClick = () => {
    setSessionTime(sessionTime + 60);
  };

  return (
    <div className="App">
      <Timer sessionTime={sessionTime} />
      <Break
        breakTime={breakTime}
        handleBreakDecrementClick={handleBreakDecrementClick}
        handleBreakIncrementClick={handleBreakIncrementClick}
      />
      <Session
        sessionTime={sessionTime}
        handleSessionDecrementClick={handleSessionDecrementClick}
        handleSessionIncrementClick={handleSessionIncrementClick}
      />
    </div>
  );
}

export default App;
