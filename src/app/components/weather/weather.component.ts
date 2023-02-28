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
      .subscribe((res) => {
        this.weather = res;
        this.getAdvice(res.main.temp, res.weather[0].id);
      });
  }

  getAdvice(temp: number, cyclone: number) {
    if (temp < 0 && cyclone >= 600) {
      // расписать свитч кейсом для разных ситуаций
      this.advice = 'Stay at home';
      console.log('Stay at home');
    }
  }
}
