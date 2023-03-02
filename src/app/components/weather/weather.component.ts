import {
  IForecastData,
  IWeeklyForecast,
  IListForecast,
} from './../../../models/forecast';
import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  @Input() city: string;
  @Input() units: string;
  weather: IListForecast;
  forecast: IForecastData;
  stateOptions: any[];
  advice: string;
  weeklyForecast: IWeeklyForecast[] = [];
  cityName: string;

  constructor(private weatherService: WeatherService) {
    this.stateOptions = [
      { label: '°C', value: 'metric' },
      { label: '℉', value: 'imperial' },
    ];
  }

  ngOnInit() {
    this.getWeatherDataToday();
    this.units = 'metric';
  }

  getWeatherDataToday() {
    this.city = this.city ? this.city : 'Moscow';
    this.units = this.units ? this.units : 'metric';

    this.weatherService.getForecast(this.city, this.units).subscribe((res) => {
      this.forecast = res;
      this.weather = res.list[0];
      this.cityName = this.forecast.city.name;
      this.getAdvice(this.weather.main.temp, this.weather.weather[0].id);
      this.getWeeklyForecast(this.forecast.list);
    });
  }

  getWeeklyForecast(data: IListForecast[]) {
    this.weeklyForecast = [];
    for (let i = 0; i < data.length; i = i + 8) {
      this.weeklyForecast.push({
        date: data[i].dt_txt,
        temp: data[i].main.temp,
        icon: data[i].weather[0].icon,
      });
    }
  }

  getAdvice(temp: number, cyclone: number) {
    if (this.units === 'imperial') {
      temp = (temp - 32) / 1.8;
    }
    if (temp < -30 || cyclone === 771 || cyclone === 781) {
      this.advice = 'Stay at home';
    }
    if (temp <= 0) {
      this.advice = 'Dress warmly';
    }
    if (cyclone < 600) {
      this.advice = "Don't forget to take an umbrella";
    }
    if (temp > 0 && cyclone >= 800 && cyclone < 804) {
      this.advice = "Don't forget to use sunscreen";
    }
    if (temp > 25) {
      this.advice = 'Avoid direct sunlight and drink more water';
    }
    if (temp > 0 && cyclone === 804) {
      this.advice = "Don't forget to take an umbrella, it might rain";
    }
  }
}
