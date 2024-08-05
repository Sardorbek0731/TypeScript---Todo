// CSS
import "./Todos.css";

// Icon
import plusIcon from "../../assets/icons/plus.png";
import deleteIcon from "../../assets/icons/delete.png";
import editIcon from "../../assets/icons/edit.png";

// Components
import Time from "../time/Time";
import Calendar from "../calendar/Calendar";
import Weather from "../weather/Weather";

// Hooks
import { ChangeEvent, useEffect, useRef, useState } from "react";

// Image
import feather from "../../assets/images/feather/feather.png";

// Interfaces
import { IEdit, ITodo } from "../../interfaces";

function Todo(): JSX.Element {
  let mapTodos: ITodo[] = JSON.parse(localStorage.getItem("todos")!);

  const [todos, setTodos] = useState<ITodo[]>([]);
  const [edit, setEdit] = useState<IEdit>({ boolean: false, id: 0 });
  const [editValue, setEditValue] = useState<string>("");

  if (todos.length > 0) mapTodos = todos;

  const inputValue: React.RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null);

  const addTodo = (): void => {
    const mapTodos: ITodo[] = JSON.parse(localStorage.getItem("todos")!);

    const date: Date = new Date();
    const hour: number = date.getHours();
    const minutes: number = date.getMinutes();
    const day: number = date.getDate();
    const month: number = date.getMonth() + 1;
    const year: number = date.getFullYear();
    const clock: string = `${hour}:${minutes}, ${day}.${month}.${year}`;

    inputValue.current &&
      inputValue.current.value.trim().length > 1 &&
      mapTodos &&
      setTodos([
        ...mapTodos,
        {
          value: inputValue.current.value,
          id: mapTodos.length,
          date: clock,
        },
      ]);

    inputValue.current &&
      inputValue.current.value.trim().length > 1 &&
      !mapTodos &&
      setTodos([
        {
          value: inputValue.current.value,
          id: 0,
          date: clock,
        },
      ]);

    if (inputValue.current && inputValue.current.value.length > 1)
      inputValue.current.value = "";
  };

  const handleDelete = (id: number): void => {
    const newTodos = mapTodos.filter((todo) => {
      return todo.id !== id;
    });

    if (newTodos.length) {
      setTodos(newTodos);
    } else {
      localStorage.clear();

      setTodos([]);
    }

    addTodo();
  };

  const setEditValueFunc = (event: ChangeEvent<HTMLInputElement>) => {
    const localTodo: ITodo[] = JSON.parse(localStorage.getItem("todos")!);

    localTodo.map((todo, i) => {
      if (todo.id === edit.id) {
        localTodo[i].value = event.target.value;

        setTodos(localTodo);
      }
    });

    setEditValue(event.target.value);

    document.addEventListener("keyup", (e) => {
      const localTodo: ITodo[] = JSON.parse(localStorage.getItem("todos")!);

      localTodo.map((todo, i) => {
        if (todo.id === edit.id) {
          if (e.key === "Enter" && localTodo[i].value.length > 1) {
            setEdit({ boolean: false, id: edit.id });
          }
        }
      });
    });
  };

  const savedEdit = () => {
    const localTodo: ITodo[] = JSON.parse(localStorage.getItem("todos")!);

    localTodo.map((todo, i) => {
      if (todo.id === edit.id) {
        if (localTodo[i].value.length > 1) {
          setEdit({ boolean: false, id: edit.id });
        }
      }
    });
  };

  const handleEdit = (id: number): void => {
    const localTodo: ITodo[] = JSON.parse(localStorage.getItem("todos")!);

    setEdit({ boolean: !edit.boolean, id });

    localTodo.map((todo, i) => {
      if (todo.id === id) {
        setEditValue(localTodo[i].value);
      }
    });
  };

  const showTodo = () => {
    document.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        addTodo();
      }
    });
  };

  const handleSubmit = (): void => {
    addTodo();
  };

  useEffect(() => {
    todos.length > 0 && localStorage.setItem("todos", JSON.stringify(todos));
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
          <img src={plusIcon} alt="Plus Icon" />
        </button>

        <div className="input wp-100">
          <input
            type="text"
            defaultValue={inputValue.current?.value || ""}
            ref={inputValue}
            onChange={showTodo}
            id="input"
            autoComplete="off"
            required
          />
          <label htmlFor="input">Type your todos ...</label>
          <img src={feather} alt="Feather Image" />
        </div>

        <div className="flex column wp-100">
          {mapTodos &&
            mapTodos?.map((todo) => {
              return (
                <div
                  className="todo flex alignCenter justifyBetween"
                  key={todo.id}
                >
                  {edit.boolean && edit.id === todo.id ? (
                    <>
                      <input
                        type="text"
                        value={editValue}
                        onChange={setEditValueFunc}
                        autoComplete="off"
                        required
                      />

                      <span className="editSaveBtn" onClick={savedEdit}>
                        Saqlash
                      </span>
                    </>
                  ) : (
                    <>
                      <h1 className="title">{todo.value}</h1>

                      <span className="date">{todo.date}</span>

                      <div className="button">
                        <span
                          className="edit"
                          onClick={() => handleEdit(todo.id)}
                        >
                          <img src={editIcon} alt="Edit Icon" />
                        </span>
                        <span
                          className="delete"
                          onClick={() => handleDelete(todo.id)}
                        >
                          <img src={deleteIcon} alt="Delete Icon" />
                        </span>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Todo;
