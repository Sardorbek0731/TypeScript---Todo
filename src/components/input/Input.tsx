// CSS
import "./Input.css";

// Icon
import right from "../../assets/icons/right.png";

function Input(): JSX.Element {
  return (
    <div className="input wp-100">
      <input type="text" placeholder="Type your todos ..." autoComplete="off" />
      <img src={right} alt="Right Icon" />
    </div>
  );
}

export default Input;
