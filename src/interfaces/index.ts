export interface ILocation {
  city: string;
  countryCode: string;
}

export interface IWeather {
  main: {
    temp: number;
  };
  weather: {
    icon: string;
  }[];
}

export interface ITodo {
  value: string;
  date: string;
  id: number;
}
