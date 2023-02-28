import { IWeatherData } from './../../../models/weather';
import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  weather: IWeatherData;
  @Input() city: string;
  @Input() units: string;
  stateOptions: any[];
  constructor(private weatherService: WeatherService) {
    this.stateOptions = [
      { label: 'metric', value: 'metric' },
      { label: 'imperial', value: 'imperial' },
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
      .subscribe((res) => (this.weather = res));
  }
}
