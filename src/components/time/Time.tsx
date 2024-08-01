// CSS
import "./Time.css";

function Time(): JSX.Element {
  return (
    <div className="time flex alignCenter justifyBetween wp-100">
      <div className="title">
        <h1>Notes</h1>
      </div>
      <span>16:20</span>
    </div>
  );
}

export default Time;
