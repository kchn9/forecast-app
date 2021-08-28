import { useState } from 'react';
import { LocationForm } from './LocationForm'
import { BasicInfo } from './BasicInfo'
import { ForecastViewer } from './ForecastViewer';

import OpenWeather from './utils/OpenWeather';

import logo from './sun.png'

export const WeatherApp = () => {

    const [location, setLocation] = useState('');
    const onChange = ({target}) => {
        setLocation(target.value);
    }

    const [error, setError] = useState(false);

    const [hourlyWeather, setHourly] = useState([]);
    const [dailyWeather, setDaily] = useState([]);
    const [info, setInfo] = useState({});

    const onSubmit = (e) => {
        e.preventDefault();
        if (!location) return;
        OpenWeather.fetchWeather(location)
        .then((respond) => {
            setError(false);
            const { hourly, daily, ...info } = respond;
            info.location = location;
            setHourly(hourly);
            setDaily(daily);
            setInfo(info);
        })
        .catch(() => {
            setError(true);
            setInfo({});
            setHourly([]);
            setDaily([]);
        })
        .finally(() => {
            setLocation('');
        })
    }


    return (
    <div className="forecast-app">
        <header>
            <a href="/"><h1 className="app-title">
                sosunny
                <img src={logo} alt="Sun logo"></img>
            </h1></a>
        </header>
        <LocationForm
            location={location}
            onChange={onChange}
            onSubmit={onSubmit}
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
        />
    </div>
    )
}