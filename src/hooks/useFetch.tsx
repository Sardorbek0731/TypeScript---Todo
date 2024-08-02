// Hooks
import { useState, useEffect } from "react";

// Interfaces
import { ILocation, IWeather } from "../interfaces";

function useFetch(locationURL: string): [ILocation, IWeather] | null {
  const [data, setData] = useState<[ILocation, IWeather] | null>(null);

  useEffect(() => {
    const fetchLocation = async (): Promise<void> => {
      const res: Response = await fetch(locationURL);
      const location: ILocation = await res.json();

      const fetchWeather = async (): Promise<void> => {
        const res: Response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location.city}&units=metric&appid=96b947a45d33d7dc1c49af3203966408`
        );
        const weather: IWeather = await res.json();

        setData([location, weather]);
      };

      fetchWeather();
    };

    fetchLocation();
  }, [locationURL]);

  return data;
}

export { useFetch };
