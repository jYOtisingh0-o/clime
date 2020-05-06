import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
   public apikey = "e973ee11c9e475320e79113b372aa0a4";
  constructor(private http: HttpClient ){}
  //test-code
  getWeather(location){
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+location+'&appid='+ this.apikey);
  }
  //test-code ends
}

