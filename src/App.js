import './App.css';
import Forecast1Day from './components/Forecast1Day/Forecast1Day';
import {useEffect, useState} from 'react';

function App() {

    const [forecast, setForecast] = useState([]);
    useEffect( ()=> {
        fetch('https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json')
            .then((res) => res.json())
            .then((data) => setForecast(data));
    },[]);

    return (
    <div className="App">
        {forecast.map((oneDay, index) => (
            <Forecast1Day className='weatherDay'
                key={index}
                day={oneDay.day}
                temperature={oneDay.temperature}
                icon={oneDay.icon}
                description={oneDay.description}
            />
        ))}
    </div>
  );
}

export default App;
