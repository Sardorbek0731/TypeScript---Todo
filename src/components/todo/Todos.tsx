// CSS
import "./Todos.css";

// Icon
import plus from "../../assets/icons/plus.png";
import calendar from "../../assets/icons/calendar.png";

// Components
import Time from "../time/Time";
import User from "../userInfo/User";
import Weather from "../weather/Weather";
import Input from "../input/Input";

// Hooks
import { useState } from "react";

// Interfaces
import { IDate } from "../../interfaces";

function Todo(): JSX.Element {
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
    <div className="flex justifyCenter alignCenter wp-100">
      <div className="todos">
        <Time />

        <User />

        <div className="row flex justifyBetween alignCenter">
          <div className="date flex alignCenter">
            <img src={calendar} alt="Calendar Icon" />
            <span className="flex column justifyBetween">
              <h1 className="day">{currentDate.day}</h1>
              <h3 className="year">
                {currentDate.month}, {currentDate.year}
              </h3>
            </span>
          </div>

          <Weather />
        </div>

        <button className="addTodos flex justifyCenter alignCenter">
          <img src={plus} alt="Plus Icon" />
        </button>

        {/* <Input /> */}
      </div>
    </div>
  );
}

export default Todo;
