// CSS
import "./Todos.css";

// Icon
import plus from "../../assets/icons/plus.png";

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
          <div className="title">
            <h1>Your</h1>
            <h1>Todos</h1>
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
