import { useState } from 'react';
import { LocationForm } from './LocationForm'

import logo from './sun.png'

export const WeatherApp = () => {

    const [location, setLocation] = useState('');
    const onChange = ({target}) => {
        setLocation(target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setLocation('');
    }

    return (
    <div className="forecast-app">
        <header>
            <h1 className="app-title">
                sosunny
                <img src={logo} alt="Sun logo"></img>
            </h1>
        </header>
        <LocationForm
                location={location}
                onChange={onChange}
                onSubmit={onSubmit}
        />
    </div>
    )
}