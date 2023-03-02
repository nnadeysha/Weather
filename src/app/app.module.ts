import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { GlobalErrorsComponent } from './components/global-errors/global-errors.component';
import { ForecastComponent } from './components/forecast/forecast.component';

@NgModule({
  declarations: [AppComponent, WeatherComponent, GlobalErrorsComponent, ForecastComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    SelectButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
