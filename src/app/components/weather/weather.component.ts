import { IWeather } from './../../../models/weather';
import { Observable, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  weather$: Observable<IWeather>;
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getWeather('Izhevsk', 'metric').subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
}
