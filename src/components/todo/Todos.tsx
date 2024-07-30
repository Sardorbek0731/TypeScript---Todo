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
          <div className="title">
            <h1>Your</h1>
            <h1>Todos</h1>
          </div>
          <Weather />
        </div>

        <button className="addTodos flex justifyCenter alignCenter">
          <img src={plus} alt="Plus Icon" />
        </button>
      </div>
    </div>
  );
}

export default Todo;
