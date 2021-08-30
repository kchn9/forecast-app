import { useState } from 'react';
import { LocationForm, BasicInfo, ForecastViewer } from './components'

import sun from './assets/sun.png';

export const WeatherApp = () => {

    const [error, setError] = useState(false);
    const [hourlyWeather, setHourly] = useState([]);
    const [dailyWeather, setDaily] = useState([]);
    const [info, setInfo] = useState({});

    return (
    <div className="forecast-app">
        <header>
            <a href="/"><h1 className="app-title">
                sosunny
                <img src={sun} alt="Sun logo"></img>
            </h1></a>
        </header>
        <LocationForm
            errorSetter={setError}
            hourlySetter={setHourly}
            dailySetter={setDaily}
            infoSetter={setInfo}
        />
        <BasicInfo
            error={error}
            location={info.location}
            latitude={info.lat}
            longitude={info.lon}
            timezone={info.timezone}
            timezoneOff={info.timezone_offset}
        />
        <ForecastViewer
            daily={dailyWeather}
            hourly={hourlyWeather}
            off={info.timezone_offset}
            hourSkip={3}
        />
    </div>
    )
}