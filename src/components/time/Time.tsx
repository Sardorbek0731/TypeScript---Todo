// CSS
import "./Time.css";

// Hooks
import { useDate } from "../../hooks/useDate";

function Time(): JSX.Element {
  const date: Date = useDate();

  return (
    <div className="time flex justifyBetween wp-100">
      <div className="title">
        <h1>Note</h1>
      </div>
      <h3>
        {date.getHours() >= 10 ? date.getHours() : "0" + date.getHours()}:
        {date.getMinutes() >= 10 ? date.getMinutes() : "0" + date.getMinutes()}
      </h3>
    </div>
  );
}

export default Time;
