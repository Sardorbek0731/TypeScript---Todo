// CSS
import "./Weather.css";

// Icon
import sun from "../../assets/icons/sun.png";

function Weather(): JSX.Element {
  return (
    <div className="weather todoItem flex alignCenter">
      <img src={sun} alt="Sun Icon" />
      <span className="flex column">
        <h1 className="celsius">31°C</h1>
        <h3 className="region">Urgench, UZ</h3>
      </span>
    </div>
  );
}

export default Weather;
