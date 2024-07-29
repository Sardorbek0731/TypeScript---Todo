// CSS
import "./Todos.css";

// Icon
import plus from "../../assets/icons/plus.png";

// Components
import User from "../userInfo/User";
import Weather from "../weather/Weather";

function Todo(): JSX.Element {
  return (
    <div className="flex justifyCenter alignCenter wp-100">
      <div className="todos">
        <User />

        <div className="row flex justifyBetween alignCenter">
          <div className="date flex alignCenter">
            <span className="day">27</span>
            <div className="flex column justifyBetween">
              <span className="month">July</span>
              <span className="yearAndWeek">2024, Saturday</span>
            </div>
          </div>

          <Weather />
        </div>

        <div className="addTodos flex justifyCenter wp-100">
          <button className="flex justifyCenter alignCenter">
            <img src={plus} alt="Plus Icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
