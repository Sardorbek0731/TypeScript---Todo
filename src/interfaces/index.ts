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
  id: number;
  date: string;
}

export interface IEdit {
  boolean: boolean;
  id: number;
}
