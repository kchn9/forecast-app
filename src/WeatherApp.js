import { useState } from 'react';
import { LocationForm } from './LocationForm'

export const WeatherApp = () => {

    const [location, setLocation] = useState('');
    const onChange = ({target}) => {
        setLocation(target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setLocation('');
    }

    return <div className="forecast-app">
        <h1>{location}</h1>
        <LocationForm
            location={location}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    </div>
}