import React, { useState, useEffect } from 'react';


interface IProps{
    day: string;
    time: string | undefined;
    description: string | undefined;
    image: string | undefined;
    temp: number | undefined;
}


export default function WeatherComponent(props: IProps)
{
    const [weatherInf, setWeather] = useState<IProps>();
    
    useEffect(() => {
        
        setWeather(props);
        
    },[props]);
    

    return(
        <div className={"daydiv"}>
            <div className='day'>{weatherInf?.day}</div>
            <div>{weatherInf?.time}</div>
            <div>{weatherInf?.description}</div>
            <img src={'http://openweathermap.org/img/wn/' + weatherInf?.image + '@2x.png'} alt="weather_image"></img>
            <h1>{weatherInf?.temp + "°C"}</h1>
        </div>
    )
}