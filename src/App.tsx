import React, { useState, useEffect } from 'react';
import './App.css';
import WeatherComponent from './Components/WeatherComponent';
import {GetWeather} from './GetInfo/GetWeatherInfo'

interface IWeatherInfo
{
  list: Array<{
    dt: number;
    main:{
      temp: number;
    };
    weather: Array<{
      id: number;
      description: string;
      icon: string;
    }>;
    wind: {
      speed: number;

    }
    dt_txt: string;
  }>;
}

function App() {
  const [weatherInfo, SetWeatherInfo] = useState<IWeatherInfo>();

  useEffect(() => {
        
    GetWeather().then((info)=>{SetWeatherInfo(info)})
    
  },[]);
  

  return (
   <div>
    <WeatherComponent day = "Сегодня" time={weatherInfo?.list[0].dt_txt} description={weatherInfo?.list[0].weather[0].description} image={weatherInfo?.list[0].weather[0].icon} temp={weatherInfo?.list[0].main.temp}/>
    <WeatherComponent day = "Завтра" time={weatherInfo?.list[8].dt_txt} description={weatherInfo?.list[8].weather[0].description} image={weatherInfo?.list[8].weather[0].icon} temp={weatherInfo?.list[8].main.temp}/>
    <WeatherComponent day = "Послезавтра" time={weatherInfo?.list[16].dt_txt} description={weatherInfo?.list[16].weather[0].description} image={weatherInfo?.list[16].weather[0].icon} temp={weatherInfo?.list[16].main.temp}/>
   </div>
  );
}

export default App;
