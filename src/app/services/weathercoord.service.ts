import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeathercoordService {
  apikey = 'e973ee11c9e475320e79113b372aa0a4';
   public lat:any;
   public lon:any;
  constructor(private http: HttpClient) { }

  //test code
  getWeather(lat,lon){
    this.lat = lat;
    this.lon=lon;
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=e973ee11c9e475320e79113b372aa0a4'
    );
  }
  //test-code ends
 
}
