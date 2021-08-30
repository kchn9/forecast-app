import { useState } from 'react';
import searchImg from '../assets/icons8-search-200.png';

import OpenWeather from '../utils/OpenWeather';

export const LocationForm = ({
    errorSetter,
    hourlySetter,
    dailySetter,
    infoSetter
}) => {

    const [location, setLocation] = useState('');

    const onChange = ({target}) => setLocation(target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!location) return;
        OpenWeather.fetchWeather(location)
        .then((respond) => {
            errorSetter(false);
            const { hourly, daily, ...info } = respond;
            info.location = location;
            hourlySetter(hourly);
            dailySetter(daily);
            infoSetter(info);
        })
        .catch(() => {
            errorSetter(true);
            hourlySetter([]);
            dailySetter([]);
            infoSetter({});
        })
        .finally(() => {
            setLocation('');
        })
    }


    return (
        <form className="search-bar" onSubmit={onSubmit} autoComplete="off">
            <input id="search" type="image" alt="Search" src={searchImg}/>
            <input id="loc" type="text" placeholder="Search location" value={location} onChange={onChange}/>
        </form>
    )
}