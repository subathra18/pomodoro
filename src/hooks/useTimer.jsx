import React from "react";
import { DEFAULT_TIMER, MINUTES_TO_MILLISECONDS } from "../utils/constants";
const DELAY = 1000;

const useTimer = (onTimerEnd) => {
  let timerID = React.useRef();
  const [minutes, setMinutes] = React.useState(DEFAULT_TIMER);
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    //when the timer is finished running
    if (minutes == 0 && seconds == 0) {
      clearTimer();
      onTimerEnd();
    }
  });

  const onInterval = (endTime) => {
    const currentTime = new Date().getTime();
    const diff = Math.round((endTime - currentTime) / 1000);
    const mins = Math.floor(diff / 60);
    const secs = Math.ceil(diff % 60);
    setMinutes(mins);
    setSeconds(secs);
  };

  const startTimer = () => {
    const startTime = new Date().getTime();
    let minutesToCalculate = minutes;

    //when the timer is finished running and we are starting over all again
    if (minutes == 0 && seconds == 0) {
      minutesToCalculate = DEFAULT_TIMER;
      setMinutes(DEFAULT_TIMER);
    }

    const millisecs = seconds * 1000;
    const timerEnd = new Date(
      startTime + minutesToCalculate * MINUTES_TO_MILLISECONDS + millisecs
    );

    timerID.current = setInterval(() => {
      onInterval(timerEnd);
    }, DELAY);
  };

  const pauseTimer = () => {
    clearTimer();
  };

  const resumeTimer = () => {
    startTimer();
  };

  const clearTimer = () => {
    clearInterval(timerID.current);
  };

  const resetTimer = () => {
    setMinutes(DEFAULT_TIMER);
    setSeconds(0);
  };

  const stopTimer = () => {
    clearTimer();
    resetTimer();
  };

  return {
    startTimer,
    stopTimer,
    pauseTimer,
    resumeTimer,
    minutes,
    seconds,
  };
};

export default useTimer;
