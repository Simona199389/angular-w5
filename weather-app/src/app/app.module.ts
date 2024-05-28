import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { HomeComponent } from './home/home.component';
import { WeeklyForecastComponent } from './weekly-forecast/weekly-forecast.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'current-weather', component: CurrentWeatherComponent },
      { path: 'weekly-forecast', component: WeeklyForecastComponent},
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: '', redirectTo: '', pathMatch: 'full' }
    ]),
    CurrentWeatherComponent,
    HomeComponent,
    WeeklyForecastComponent
  ],
  providers: [],
})
export class AppModule { }

