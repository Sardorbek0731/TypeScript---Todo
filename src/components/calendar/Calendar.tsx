// CSS
import "./Calendar.css";

// Icon
import calendar from "../../assets/icons/calendar.png";

// Hooks
import { useState } from "react";

// Interfaces
import { IDate } from "../../interfaces";

function Calendar(): JSX.Element {
  const monthList: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let day: number = new Date().getDate();
  let month: string = monthList[new Date().getMonth()];
  let year: number = new Date().getFullYear();

  let date: IDate = { day, month, year };

  const [currentDate, setCurrentDate] = useState<IDate>(date);

  const updateDate = (): void => {
    day = new Date().getDate();
    month = monthList[new Date().getMonth()];
    year = new Date().getFullYear();

    date = { day, month, year };

    setCurrentDate(date);
  };

  setInterval(updateDate, 1000);

  return (
    <div className="calendar todoItem flex alignCenter">
      <img src={calendar} alt="Calendar Icon" />
      <span className="flex column">
        <h1 className="day">{currentDate.day}</h1>
        <h3 className="year">
          {currentDate.month}, {currentDate.year}
        </h3>
      </span>
    </div>
  );
}

export default Calendar;
