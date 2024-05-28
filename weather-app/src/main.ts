import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { CurrentWeatherComponent } from './app/current-weather/current-weather.component';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './app/home/home.component';
import { WeeklyForecastComponent } from './app/weekly-forecast/weekly-forecast.component';
import { AboutComponent } from './app/about/about.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: 'current-weather', component: CurrentWeatherComponent },
      { path: '', component: HomeComponent },
      { path: 'weekly-forecast', component: WeeklyForecastComponent },
      { path: 'about', component: AboutComponent }



    ]),
    provideHttpClient(),
    importProvidersFrom(FormsModule)
  ]
})
.catch(err => console.error(err));

