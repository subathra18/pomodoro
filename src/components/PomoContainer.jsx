import React from "react";
import Button from "./Button";
import useTimer from "../hooks/useTimer";
import timerAudio from "../assets/sounds/timesUp.mp3";
const status = {
  STARTED: "started",
  STOPPED: "stopped",
  PAUSED: "paused",
  RESUMED: "resumed",
};

const PomoContainer = () => {
  var audio = new Audio(timerAudio);

  const onTimerEnd = () => {
    console.log("timer ended");
    audio.play();
  };
  const { startTimer, stopTimer, pauseTimer, resumeTimer, minutes, seconds } =
    useTimer(onTimerEnd);
  const [timerStatus, setTimerStatus] = React.useState(status.STOPPED);

  React.useEffect(() => {
    minutes == 0 && seconds == 0 ? setTimerStatus(status.STOPPED) : "";
  }, [minutes, seconds]);

  const onStart = () => {
    setTimerStatus(status.STARTED);
    startTimer();
  };

  const onStop = () => {
    setTimerStatus(status.STOPPED);
    stopTimer();
  };

  const onPause = () => {
    setTimerStatus(status.PAUSED);
    pauseTimer();
  };

  const onResume = () => {
    setTimerStatus(status.RESUMED);
    resumeTimer();
  };

  const getButtonDetails = () => {
    switch (timerStatus) {
      case status.STOPPED:
        return { label: "START", clickHandler: onStart };
      case status.STARTED:
        return { label: "pause", clickHandler: onPause };
      case status.PAUSED:
        return { label: "resume", clickHandler: onResume };
      case status.RESUMED:
        return { label: "pause", clickHandler: onPause };
    }
  };

  return (
    <div className=" flex  justify-center uppercase items-center  shadow-xl">
      <div className=" mt-16  w-1/3 h-64  bg-brown rounded-lg">
        <div className="flex justify-center items-center  text-center my-2">
          <div className="card w-96 h-36  shadow-xl">
            <div className="text-8xl  tracking-wide font-bold card-body">
              <div>
                <span className="countdown font-mono text-8xl">
                  <span style={{ "--value": minutes }}></span>:
                  <span style={{ "--value": seconds }}></span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  justify-center items-center gap-10 mt-5">
          <Button onClickHandler={getButtonDetails().clickHandler}>
            {getButtonDetails().label}
          </Button>
          <Button onClickHandler={onStop}>STOP</Button>
        </div>
      </div>
    </div>
  );
};

export default PomoContainer;
