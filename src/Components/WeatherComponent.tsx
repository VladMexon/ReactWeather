import React, { useState, useEffect } from 'react';





export default function WeatherComponent(day: any, info: Promise<any>)
{
    const [weatherInf, setWeather] = useState<any>({});
    
    let description = document.getElementById("description" + day);
    let temp = document.getElementById("temp" + day);
    let dayDoc = document.getElementById("day" + day);
    let time = document.getElementById("time" + day);
    let image = document.getElementById("image" + day);

    if(info != null)
    {
        info.then((inf)=>setWeather(inf)); 
    }
    

    useEffect(() => {
        
        if(time != null && temp != null && description != null && weatherInf !== {} && dayDoc != null && image != null)
        {
            switch(day)
            {
                case 0:
                    dayDoc.innerHTML = "Сегодня";
                    break;
                case 1:
                    dayDoc.innerHTML = "Завтра";
                    break;
                case 2:
                    dayDoc.innerHTML = "Послезавтра";
                    break;
            }
            description.innerHTML = weatherInf.list[0 + 8 * day].weather[0].description;
            temp.innerHTML = weatherInf.list[0 + 8 * day].main.temp+"°C";
            time.innerHTML = weatherInf.list[0 + 8 * day].dt_txt;
            image.setAttribute('src', 'http://openweathermap.org/img/wn/' + weatherInf.list[0 + 8 * day].weather[0].icon + '@2x.png')
            console.log("Информация получена");
        }
        
      },[weatherInf]);

    return(
        <div className={"daydiv"}>
            <div id={"day" + day}>def</div>
            <div id={"time" + day}>def</div>
            <div id={"description" + day}>def</div>
            <img id={"image"+ day}></img>
            <h1 id={"temp" + day}>def</h1>
        </div>
    )
}