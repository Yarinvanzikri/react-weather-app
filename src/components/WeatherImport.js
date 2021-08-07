import {useEffect, useState} from "react";
import icons from '../icons/1.png'
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export default function WeatherImport() {
    const [weatherData, setWeatherData] = useState([]);
    useEffect(()=>{
        fetch('https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json')
            .then(res => res.json())
            .then(data => setWeatherData(data))
    },[]);
    return  (
        <div>
            {weatherData.map(data => (
                <div>
                    <h1>{days[data.day]}</h1>
                    <img src={icons}/>
                    {process.env.PUBLIC_URL}

                </div>
            ))}
        </div>
    )
}



// <article key={weather.temperature}>
//     <h1>{weather.day}</h1>
//     <p>{weather.description}</p>
// </article>