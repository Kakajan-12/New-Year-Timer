import React from "react";
import moment from "moment";

function Timer() {
  const newYear = moment("1/1/2024 00:00:00");
  const currentDate = moment();

  const days = newYear.diff(currentDate, "days");
  const hours = moment.duration(newYear.diff(currentDate)).hours();
  const minutes = moment.duration(newYear.diff(currentDate)).minutes();
  const seconds = moment.duration(newYear.diff(currentDate)).seconds();

  return (
    <div className="timer__bg">
      <div className="timer__body">
        <div className="timer__items">
          <div className="timer__item">{days}</div>
          <div className="timer__item">Days</div>
        </div>
        <div className="timer__items">
          <div className="timer__item">{hours}</div>
          <div className="timer__item">Hours</div>
        </div>
        <div className="timer__items">
          <div className="timer__item">{minutes}</div>
          <div className="timer__item">Minutes</div>
        </div>
        <div className="timer__items">
          <div className="timer__item">{seconds}</div>
          <div className="timer__item">Seconds</div>
        </div>
      </div>
    </div>
  );
}
export default Timer;
