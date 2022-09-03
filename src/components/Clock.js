// import react modules
import React from "react";
import { useState, useEffect } from "react";

// import style
import "../style/components/Clock.css";

const Clock = () => {
  const [time, setTime] = useState("");

  function formatTime(val) {
    if (val < 10) {
      return "0";
    } else {
      return "";
    }
  }

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);

  function tick() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    setTime(
      hours +
        ":" +
        formatTime(minutes) +
        minutes +
        ":" +
        formatTime(seconds) +
        seconds
    );
  }
  return (
    <div className="clock">
      <div className="screen">
        <h1 className="time">{time}</h1>
      </div>
    </div>
  );
};

export default Clock;
