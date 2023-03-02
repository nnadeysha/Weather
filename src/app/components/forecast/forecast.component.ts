import { Component, Input } from '@angular/core';
import {
  IWeeklyForecast,
} from 'src/models/forecast';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent {
  @Input() forecast: IWeeklyForecast;
  @Input() units: string;
}
