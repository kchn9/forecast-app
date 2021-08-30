import lodash from 'lodash';
import { LocationInfo, TimeInfo } from '../components';

export const BasicInfo = ({
    error,
    location,
    latitude,
    longitude,
    timezone,
    timezoneOff
}) => {

    const beautifyLocation = (location) => {
        const locationWords = location.split(' ');
        const beautyWords = locationWords.map(word => lodash.capitalize(word));
        return beautyWords.join(' ');
    }

    if (error) {
        return (
            <div className="basic-info">
                <h2 class="error">No weather forecast has been found for this location.</h2>
            </div>
        )
    }

    return (
        <div className="basic-info">
            {location && <h2>Now in {beautifyLocation(location)}</h2>}
            {[latitude, longitude].every(val => val) && <LocationInfo latitude={latitude} longitude={longitude} />}
            {[timezone, timezoneOff].every(val => val) && <TimeInfo timezone={timezone} timezoneOff={timezoneOff} />}
        </div>
    )
}