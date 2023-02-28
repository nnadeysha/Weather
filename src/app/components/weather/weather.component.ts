import { IWeather, IWeatherData } from './../../../models/weather';
import { map, Observable, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  weather: IWeatherData;
  term = '';
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getCity('Moscow');
  }

  getCity(city: string) {
    this.weatherService
      .getWeather(city, 'metric')
      .subscribe((res) => (this.weather = res));
  }
}
