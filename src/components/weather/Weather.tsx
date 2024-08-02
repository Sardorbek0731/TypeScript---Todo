// CSS
import "./Weather.css";

// Icon
import sun from "../../assets/icons/sun.png";

// Hooks
import { useFetch } from "../../hooks/useFetch";

function Weather(): JSX.Element {
  const url = "http://ip-api.com/json/?fields=61439";

  const { data } = useFetch(url);

  console.log(data);

  return (
    <div className="weather todoItem flex alignCenter">
      <img src={sun} alt="Sun Icon" />
      <span className="flex column">
        <h1 className="celsius">31°C</h1>
        <h3 className="region">, UZ</h3>
      </span>
    </div>
  );
}

export default Weather;
