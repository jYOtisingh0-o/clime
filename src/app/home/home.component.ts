import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  weatherData: any;
  constructor() { }

  ngOnInit(): void {
    this.weatherData={
      main:{},
      isDay:true
    }
    this.getWeatherData();
    console.log(this.weatherData);
  }

  getWeatherData(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=e973ee11c9e475320e79113b372aa0a4')
    .then(response => response.json())
    .then(data=>{this.setWeatherData(data);})
    //let data = JSON.parse('{"coord":{"lon":77.22,"lat":28.67},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"base":"stations","main":{"temp":310.15,"feels_like":308.87,"temp_min":310.15,"temp_max":310.15,"pressure":1004,"humidity":22},"visibility":6000,"wind":{"speed":2.6,"deg":270},"clouds":{"all":40},"dt":1587723452,"sys":{"type":1,"id":9165,"country":"IN","sunrise":1587687376,"sunset":1587734512},"timezone":19800,"id":1273294,"name":"Delhi","cod":200}');
    //this.setWeatherData(data);
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
