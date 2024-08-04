// CSS
import "./Todos.css";

// Icon
import plus from "../../assets/icons/plus.png";
import deleteIcon from "../../assets/icons/delete.png";
import edit from "../../assets/icons/edit.png";

// Components
import Time from "../time/Time";
import Calendar from "../calendar/Calendar";
import Weather from "../weather/Weather";

// Hooks
import { useEffect, useRef, useState } from "react";

// Image
import feather from "../../assets/images/feather/feather.png";

// Interfaces
import { ITodo } from "../../interfaces";

function Todo(): JSX.Element {
  let mapTodos: ITodo[] | null = JSON.parse(localStorage.getItem("todos")!);

  const [todos, setTodos] = useState<ITodo[]>([]);

  if (todos.length) mapTodos = todos;

  const inputValue = useRef<HTMLInputElement>(null);

  const addTodo = (): void => {
    const date =
      new Date().getHours() +
      ":" +
      new Date().getMinutes() +
      ", " +
      new Date().getDate() +
      "/" +
      (new Date().getMonth() + 1) +
      "/" +
      new Date().getFullYear();

    const localTodo: ITodo[] | null = JSON.parse(
      localStorage.getItem("todos")!
    );

    if (!inputValue.current?.value?.trim().length) return;

    if (localTodo?.length) {
      setTodos([
        ...localTodo,
        {
          value: inputValue.current.value,
          date,
        },
      ]);
    } else {
      setTodos([
        {
          value: inputValue.current.value,
          date,
        },
      ]);
    }

    inputValue.current.value = "";
  };

  const handleSubmit = (): void => {
    addTodo();
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTodo();
  });

  useEffect(() => {
    todos.length && localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="flex justifyCenter column alignCenter wp-100">
      <div className="todos">
        <Time />

        <div className="row flex justifyBetween alignCenter">
          <Calendar />

          <Weather />
        </div>

        <button
          className="addTodos flex justifyCenter alignCenter"
          onClick={handleSubmit}
        >
          <img src={plus} alt="Plus Icon" />
        </button>

        <div className="input wp-100">
          <input
            type="text"
            ref={inputValue}
            id="input"
            autoComplete="off"
            required
          />
          <label htmlFor="input">Type your todos ...</label>
          <img src={feather} alt="Feather Image" />
        </div>

        <div className="flex column wp-100">
          {mapTodos &&
            mapTodos?.map((todo, i) => {
              return (
                <div className="todo flex alignCenter justifyBetween" key={i}>
                  <h1 className="title">{todo.value}</h1>
                  <h3 className="date">{todo.date}</h3>

                  <div className="button">
                    <span className="edit">
                      <img src={edit} alt="Edit Icon" />
                    </span>
                    <span className="delete">
                      <img src={deleteIcon} alt="Delete Icon" />
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Todo;
