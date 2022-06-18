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
    
    if(weatherInf?.description !== undefined || weatherInf?.image !== undefined || weatherInf?.temp !== undefined || weatherInf?.time !== undefined)
    {
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
    else
    {
        return <div className={"daydiv"}>
            Загрузка...
        </div>
    }    
}