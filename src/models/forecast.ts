export interface IMainForecast {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface IWeatherForecast {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface ICloudsForecast {
  all: number;
}

export interface IWindForecast {
  speed: number;
  deg: number;
  gust: number;
}

export interface ISnowForecast {
  '3h': number;
}

export interface ISysForecast {
  pod: string;
}

export interface IListForecast {
  dt: number;
  main: IMainForecast;
  weather: IWeatherForecast[];
  clouds: ICloudsForecast;
  wind: IWindForecast;
  visibility: number;
  pop: number;
  snow: ISnowForecast;
  sys: ISysForecast;
  dt_txt: string;
}

export interface ICoordForecast {
  lat: number;
  lon: number;
}

export interface ICityForecast {
  id: number;
  name: string;
  coord: ICoordForecast;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface IForecastData {
  cod: string;
  message: number;
  cnt: number;
  list: IListForecast[];
  city: ICityForecast;
}

export interface IWeeklyForecast {
  date: string;
  temp: number,
  icon: string
}
