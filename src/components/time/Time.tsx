// CSS
import "./Time.css";

// Hooks
import { useState } from "react";

function Time(): JSX.Element {
  let time: string = `${
    new Date().getHours() >= 10
      ? new Date().getHours()
      : "0" + new Date().getHours()
  }:${
    new Date().getMinutes() >= 10
      ? new Date().getMinutes()
      : "0" + new Date().getMinutes()
  }`;

  const [clock, setClock] = useState<string>(time);

  const updateTime = (): void => {
    time = `${
      new Date().getHours() >= 10
        ? new Date().getHours()
        : "0" + new Date().getHours()
    }:${
      new Date().getMinutes() >= 10
        ? new Date().getMinutes()
        : "0" + new Date().getMinutes()
    }`;
    setClock(time);
  };

  setInterval(updateTime, 1000);

  return (
    <div className="time flex justifyBetween wp-100">
      <div className="title">
        <h1>Note</h1>
      </div>
      <h3>{clock}</h3>
    </div>
  );
}

export default Time;
