import axios from "axios";

let url: string = "https://api.openweathermap.org/data/2.5/forecast?id=511196&appid=4588f32de5a049929c51d7d26c4970b1&lang=ru&units=metric&type=like";

export function GetWeather(){
    return axios.get(url).then((responce => {return responce.data}));
}
