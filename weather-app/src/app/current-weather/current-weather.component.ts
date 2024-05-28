import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, MatInputModule]
})
export class CurrentWeatherComponent implements OnInit {
  weatherData: any;
  city: string = 'London';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeather(this.city);
  }

  getWeather(city: string): void {
    this.weatherService.getCurrentWeather(city).subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    });
  }
}

