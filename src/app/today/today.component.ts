import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeathercoordService } from '../services/weathercoord.service';


@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  //test code
  public weatherSearchForm:FormGroup;
  public weatherData: any;
  public formValues:any;
  ///test code ends

  constructor( private weathercoordService: WeathercoordService,
      private formBuilder:FormBuilder
    ) { }

  ngOnInit(): void {

      this.weatherSearchForm = this.formBuilder.group({
        lat:[""],
        lon:[""]
      });
    
    this.weatherData={
      main:{},
      isDay:true
     }
    this.getWeatherData();
    console.log(this.weatherData);
  
  }

  
sendtoService(formValues){
  this.weathercoordService.getWeather(formValues.lat, formValues.lon).subscribe(data=>{
    this.weatherData=data;
    console.log(this.weatherData);
    //this.icon = this.weatherData.weather.icon[0];
  });
}


getWeatherData(){
  fetch('http://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=e973ee11c9e475320e79113b372aa0a4')
  .then(response => response.json())
  .then(data=>{this.setWeatherData(data);})
  
}

setWeatherData(data){
  this.weatherData = data;
  let sunsetTime = new Date(this.weatherData.sys.sunset*1000);
  this.weatherData.sunset_time = sunsetTime.toLocaleTimeString();
  let currentDate = new Date();
  this.weatherData.isDay = (currentDate.getTime()< sunsetTime.getTime());
  this.weatherData.temp_celcius = (this.weatherData.main.temp -273.15).toFixed(0);
  this.weatherData.temp_min = (this.weatherData.main.temp_min -273.15).toFixed(0);
  this.weatherData.temp_max = (this.weatherData.main.temp_max -273.15).toFixed(0);
  this.weatherData.temp_feels_like = (this.weatherData.main.feels_like -273.15).toFixed(0);
}

}