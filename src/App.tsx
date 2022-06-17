import React from 'react';
import './App.css';
import WeatherComponent from './Components/WeatherComponent';
import {GetWeather} from './GetInfo/GetWeatherInfo'

let weather = GetWeather();

function App() {

  return (
   <div>
    {WeatherComponent(0, weather)}
    {WeatherComponent(1, weather)}
    {WeatherComponent(2, weather)}
   </div>
  );
}

export default App;
