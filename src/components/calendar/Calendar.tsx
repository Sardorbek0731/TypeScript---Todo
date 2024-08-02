// CSS
import "./Calendar.css";

// Icon
import calendar from "../../assets/icons/calendar.png";

// Hooks
import { useDate } from "../../hooks/useDate";

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

  const date: Date = useDate();

  return (
    <div className="calendar todoItem flex alignCenter">
      <img src={calendar} alt="Calendar Icon" />
      <span className="flex column">
        <h1 className="day">{date.getDate()}</h1>
        <h3 className="year">
          {monthList[date.getMonth()]}, {date.getFullYear()}
        </h3>
      </span>
    </div>
  );
}

export default Calendar;
