import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeathercoordService {
  apikey = 'e973ee11c9e475320e79113b372aa0a4';
   icon_id;
  constructor(private http: HttpClient) { }

  //test code
  getWeather(lat,lon){
    return this.http.get(
      'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=e973ee11c9e475320e79113b372aa0a4'
    );
  }
  //test-code ends

  getweatherIcon(icon_id){
    return this.http.get(
      'http://openweathermap.org/img/wn/'+icon_id+'@2x.png'
    );
  }
 
}
