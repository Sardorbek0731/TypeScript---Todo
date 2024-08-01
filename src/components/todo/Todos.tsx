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

function Todo(): JSX.Element {
  return (
    <div className="flex justifyCenter alignCenter wp-100">
      <div className="todos">
        <Time />

        <User />

        <div className="row flex justifyBetween alignCenter">
          <div className="date flex alignCenter">
            <img src={calendar} alt="Calendar Icon" />
            <span className="flex column justifyBetween">
              <h1 className="day">20</h1>
              <h3 className="year">February, 2024</h3>
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
