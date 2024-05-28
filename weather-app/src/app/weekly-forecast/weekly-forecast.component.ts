import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weekly-forecast',
  standalone: true,
  imports: [CommonModule,FormsModule ],
  templateUrl: './weekly-forecast.component.html',
  styleUrl: './weekly-forecast.component.scss'
})
export class WeeklyForecastComponent implements OnInit {
  weatherData: any;
   lat = 44.34;
   lon = 10.99;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getForecast(this.lat, this.lon);
}

getForecast(lat: number, lon: number): void {
  this.weatherService.getWeather(lat, lon).subscribe(data => {
    this.weatherData = data;
    console.log(this.weatherData);
  });
}



}
