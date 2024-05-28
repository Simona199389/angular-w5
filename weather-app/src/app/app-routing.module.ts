import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { HomeComponent } from './home/home.component';
import { WeeklyForecastComponent } from './weekly-forecast/weekly-forecast.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'current-weather', component: CurrentWeatherComponent },
  { path: 'weekly-forecast', component: WeeklyForecastComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

