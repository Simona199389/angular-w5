import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '4af0df51f22c359900c5aebe3a2a557c';
  private apiKey2 = 'e0e7a63242802a4d77fe88bfdf7c2645';
  private baseUrl = 'https://api.openweathermap.org/data/2.5/';
  private secondUrl = 'https://api.openweathermap.org/data/2.5/forecast';

  constructor(private http: HttpClient) {}

  getCurrentWeather(city: string): Observable<any> {
    const url = `${this.baseUrl}weather?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get<any>(url);
  }

  getWeather(lat: number, lon: number): Observable<any> {
    const url = `${this.secondUrl}?lat=${lat}&lon=${lon}&appid=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}

