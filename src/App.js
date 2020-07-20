import React, { useState, useEffect } from "react";
import "./App.css";
// Components imports:
import Break from "./components/Break";
import Session from "./components/Session";
import Timer from "./components/Timer";
// Audio import:
import alarmBeep from "./sounds/Electronic_Beeping_Alarm_Clock.mp3";
// Icons imports:
import {
  AiOutlinePlayCircle,
  AiOutlinePauseCircle,
  AiOutlineReload,
} from "react-icons/ai";

function App() {
  const [breakTime, setBreakTime] = useState(300); // 300/60 = 5 minutes
  const [sessionTime, setSessionTime] = useState(1500); // 1500/60 = 25 minutes
  const [timeLeft, setTimeLeft] = useState(sessionTime);
  const [isRunning, setIsRunning] = useState(false);
  const [status, setStatus] = useState(true);

  const playAudio = () => {
    const audio = document.getElementById("beep");
    audio.currentTime = 0;
    audio.play();
  };

  const resetAudio = () => {
    const audio = document.getElementById("beep");
    audio.pause();
    audio.currentTime = 0;
  };

  useEffect(() => {
    setTimeLeft(sessionTime);
  }, [sessionTime]);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearInterval(timer);
    } else if (isRunning && timeLeft === 0) {
      setStatus(!status);
      if (status) {
        setTimeLeft(breakTime);
        playAudio();
      } else {
        setTimeLeft(sessionTime);
        playAudio();
      }
    }
  }, [isRunning, timeLeft, breakTime, sessionTime, status]);

  // Buttons handlers
  const handleStartStopClick = () => {
    setIsRunning(!isRunning);
  };

  const handleResetClick = () => {
    setIsRunning(false);
    setStatus(true);
    setBreakTime(300);
    setSessionTime(1500);
    setTimeLeft(sessionTime);
    resetAudio();
  };

  const handleBreakDecrementClick = () => {
    if (breakTime <= 60) {
      return;
    }
    setBreakTime(breakTime - 60);
  };

  const handleBreakIncrementClick = () => {
    if (breakTime >= 3600) {
      return;
    }
    setBreakTime(breakTime + 60);
  };

  const handleSessionDecrementClick = () => {
    if (sessionTime <= 60) {
      return;
    }
    setSessionTime(sessionTime - 60);
  };

  const handleSessionIncrementClick = () => {
    if (sessionTime >= 3600) {
      return;
    }
    setSessionTime(sessionTime + 60);
  };

  return (
    <div className="App">
      <div className="app-container">
        <h1>Pomodoro Clock</h1>
        <Timer timeLeft={timeLeft} isRunning={isRunning} status={status} />
        <div className="time-controls-wrapper">
          <div id="start_stop" onClick={handleStartStopClick}>
            {isRunning ? <AiOutlinePauseCircle /> : <AiOutlinePlayCircle />}
          </div>
          <div id="reset" onClick={handleResetClick}>
            <AiOutlineReload />
          </div>
        </div>
        <div className="time-setters-wrapper">
          <Session
            sessionTime={sessionTime}
            handleSessionDecrementClick={handleSessionDecrementClick}
            handleSessionIncrementClick={handleSessionIncrementClick}
          />
          <Break
            breakTime={breakTime}
            handleBreakDecrementClick={handleBreakDecrementClick}
            handleBreakIncrementClick={handleBreakIncrementClick}
          />
        </div>
        <audio id="beep" src={alarmBeep}></audio>
      </div>
    </div>
  );
}

export default App;
