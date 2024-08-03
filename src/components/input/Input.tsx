// CSS
import "./Input.css";

// Image
import feather from "../../assets/images/feather/feather.png";

function Input(): JSX.Element {
  return (
    <div className="input wp-100">
      <input type="text" id="input" autoComplete="off" />
      <label htmlFor="input">Type your todos ...</label>
      <img src={feather} alt="Feather Image" />
    </div>
  );
}

export default Input;
