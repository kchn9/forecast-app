import lodash from 'lodash';

import { LocationInfo } from './LocationInfo';
import { TimeInfo } from './TimeInfo';

const style = {
    position: 'sticky',
    top: '0',
    zIndex: '-1',
    width: '100%',
    padding: '0 3rem',
    margin: 0,
    backgroundColor: '#1F3855',
    listStyle: 'none',
    color: '#ECECE7',
    fontFamily: ['Lato', 'sans-serif'],
    fontSize: '1.1rem',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-around'
}

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
            <div style={{...style, fontSize: '.9rem', fontStyle:'normal' }}>
                <h2>No weather forecast has been found for this location.</h2>
            </div>
        )

    }

    return (
        <div style={style}>
            {location && <h2 style={{ fontSize: '2.5rem', padding: 0}}>Now in {beautifyLocation(location)}</h2>}
            {[latitude, longitude].every(val => val) && <LocationInfo latitude={latitude} longitude={longitude} />}
            {[timezone, timezoneOff].every(val => val) && <TimeInfo timezone={timezone} timezoneOff={timezoneOff} />}
        </div>
    )
}