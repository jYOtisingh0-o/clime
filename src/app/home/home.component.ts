import { Component, OnInit } from '@angular/core';
import { WeatherService} from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  WEATHERDATA: any;
  constructor(public weatherService: WeatherService) { }

  ngOnInit(): void {
    this.WEATHERDATA=this.weatherService.weatherData={
      main:{},
      isDay:true
    }
    this.weatherService.getWeatherData();
   // console.log(this.weatherData);
  }
 
}
