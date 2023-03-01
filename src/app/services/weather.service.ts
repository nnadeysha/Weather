import { IWeather, IWeatherData } from './../../models/weather';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  apiKey = 'acc15865bcf9f67a7111310944bdfafe';
  url = 'https://api.openweathermap.org/data/2.5/weather';
  constructor(
    private httpClient: HttpClient,
    private errorService: ErrorService
  ) {}

  getWeather(city: string, units: string): Observable<IWeatherData> {
    let params = new HttpParams()
      .set('q', city)
      .set('units', units)
      .set('appid', this.apiKey);

    return this.httpClient
      .get<IWeatherData>(this.url, { params })
      .pipe(catchError(this.errorHandler.bind(this)));
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
