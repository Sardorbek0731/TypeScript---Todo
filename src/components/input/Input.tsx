// CSS
import "./Input.css";

function Input(): JSX.Element {
  return (
    <div className="input wp-100">
      <input type="text" placeholder="Type your todos ..." autoComplete="off" />
    </div>
  );
}

export default Input;
