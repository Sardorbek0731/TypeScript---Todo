// CSS
import "./Weather.css";

// Hooks
import { useFetch } from "../../hooks/useFetch";
import { ILocation, IWeather } from "../../interfaces";

// Interfaces

function Weather(): JSX.Element | null {
  const data: [ILocation, IWeather] | null = useFetch(
    "http://ip-api.com/json/?fields=61439"
  );

  return (
    data && (
      <div className="weather todoItem flex alignCenter">
        <div className="weatherIcon flex justifyCenter alignCenter">
          <img
            src={`http://openweathermap.org/img/wn/${data[1].weather[0].icon}.png`}
            alt="Weather Icon"
          />
        </div>
        <span className="flex column">
          <h1 className="celsius">{Math.round(data[1].main.temp)}°</h1>
          <h3 className="region">
            {data[0].city}, {data[0].countryCode}
          </h3>
        </span>
      </div>
    )
  );
}

export default Weather;
