import { IWeatherData } from './../../../models/weather';
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
  weather: IWeatherData;
  stateOptions: any[];
  advice: string;

  constructor(private weatherService: WeatherService) {
    this.stateOptions = [
      { label: '°C', value: 'metric' },
      { label: '℉', value: 'imperial' },
    ];
  }

  ngOnInit() {
    this.getWeatherData();
    this.units = 'metric';
  }

  getWeatherData() {
    this.weatherService
      .getWeather(
        this.city ? this.city : 'Moscow',
        this.units ? this.units : 'metric'
      )
      .subscribe((res) => {
        this.weather = res;
        this.getAdvice(res.main.temp, res.weather[0].id);
      });
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
