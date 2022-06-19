interface IProps{
    day: string;
    time: string | undefined;
    description: string | undefined;
    image: string | undefined;
    temp: number | undefined;
}


export default function WeatherComponent(props: IProps)
{
    if(props.time !== undefined)
    {
        return(
            <div className={"daydiv"}>
                <div className='day'>{props?.day}</div>
                <div>{props?.time}</div>
                <div>{props?.description}</div>
                <img src={'http://openweathermap.org/img/wn/' + props?.image + '@2x.png'} alt="weather_image"></img>
                <h1>{props?.temp + "°C"}</h1>
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