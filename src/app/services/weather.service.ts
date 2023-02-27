import { IWeather, IWeatherData } from './../../models/weather';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  apiKey = 'acc15865bcf9f67a7111310944bdfafe';

  constructor(
    private httpClient: HttpClient,
    private errorService: ErrorService
  ) {}

  getWeather(city: string, units: string): Observable<IWeatherData> {
    return this.httpClient
      .get<IWeatherData>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=${this.apiKey}&units=${units}`
      )
      .pipe(catchError(this.errorHandler.bind(this)));
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
