// CSS
import "./Todos.css";

// Icon
import plus from "../../assets/icons/plus.png";

// Components
import Time from "../time/Time";
import Calendar from "../calendar/Calendar";
import Weather from "../weather/Weather";
import Input from "../input/Input";

function Todo(): JSX.Element {
  return (
    <div className="flex justifyCenter alignCenter wp-100">
      <div className="todos">
        <Time />

        <div className="row flex justifyBetween alignCenter">
          <Calendar />

          <Weather />
        </div>

        <button className="addTodos flex justifyCenter alignCenter">
          <img src={plus} alt="Plus Icon" />
        </button>

        <Input />
      </div>
    </div>
  );
}

export default Todo;
