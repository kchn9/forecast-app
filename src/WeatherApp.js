import { useState } from 'react';
import { LocationForm } from './LocationForm'
import { BasicInfo } from './BasicInfo'
import { WeatherDisplay } from './WeatherDisplay';

import OpenWeather from './utils/OpenWeather';

import logo from './sun.png'

export const WeatherApp = () => {

    const [location, setLocation] = useState('');
    const onChange = ({target}) => {
        setLocation(target.value);
    }

    const [currentWeather, setCurrent] = useState({});
    const [hourlyWeather, setHourly] = useState([]);
    const [dailyWeather, setDaily] = useState([]);
    const [info, setInfo] = useState({});

    const onSubmit = (e) => {
        e.preventDefault();
        OpenWeather.fetchWeather(location)
        .then((respond) => {
            const { current, hourly, daily, ...info } = respond;
            info.location = location;
            setCurrent(current);
            setHourly(hourly);
            setDaily(daily);
            setInfo(info);
        })
        .catch((error) => {
            console.log(error);
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
            location={info.location}
            latitude={info.lat}
            longitude={info.lon}
            timezone={info.timezone}
            timezoneOff={info.timezone_offset}
        />
        <WeatherDisplay
            currentWeather={currentWeather}
            hourlyWeather={hourlyWeather}
            dailyWeather={dailyWeather}
        />
    </div>
    )
}