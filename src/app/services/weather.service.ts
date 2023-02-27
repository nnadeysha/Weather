import { IWeather } from './../../models/weather';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  apiKey = 'acc15865bcf9f67a7111310944bdfafe';
  city = 'Izhevsk';
  units = 'metric';

  constructor(
    private httpClient: HttpClient,
    private errorService: ErrorService
  ) {}

  getWeather(): Observable<IWeather> {
    return this.httpClient
      .get<IWeather>(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&lang=en&appid=${this.apiKey}&units=${this.units}`
      )
      .pipe(catchError(this.errorHandler.bind(this)));
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
  //https://api.openweathermap.org/data/2.5/weather?q=Izhevsk&lang=en&appid=acc15865bcf9f67a7111310944bdfafe
}
