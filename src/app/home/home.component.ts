import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //test code
  public weatherSearchForm:FormGroup;
  public weatherData: any;
  public iconurl:any;
  public iconCode:any;
  public description:any;
  //test code ends
  formValues:any;
  constructor( private formBuilder: FormBuilder,
     private weatherService: WeatherService ) { }

  ngOnInit(): void {
    //test code
    this.weatherSearchForm = this.formBuilder.group({
      location:[""]
    });
    //test code ends
    this.weatherData={
      main:{},
      isDay:true
     }
    this.getWeatherData();
    console.log(this.weatherData);
  }

//test code
  sendToService(formValues){
    this.weatherService.getWeather(formValues.location).subscribe(data=>{
      this.weatherData = data;
      console.log(this.weatherData);
      this.iconCode=this.weatherData.weather[0].icon;
      this.iconurl='https://openweathermap.org/img/wn/'+this.iconCode+'@2x.png';
      this.description = this.weatherData.weather[0].description;
    });
  }
//test code ends
  getWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=e973ee11c9e475320e79113b372aa0a4')
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
    this.iconurl = "https://openweathermap.org/img/w/" + this.weatherData.weather[0].icon + ".png";
   this.description= this.weatherData.weather[0].description;
  }
  }

