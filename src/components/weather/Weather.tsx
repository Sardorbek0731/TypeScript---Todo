// CSS
import "./Weather.css";

// Icon
import sun from "../../assets/icons/sun.png";

function Weather(): JSX.Element {
  return (
    <div className="weather flex alignCenter">
      <img src={sun} alt="Sun Icon" />
      <div className="flex column">
        <span className="celsius">31°C</span>
        <div className="region">
          <h3>Urgench, UZ</h3>
        </div>
      </div>
    </div>
  );
}

export default Weather;
