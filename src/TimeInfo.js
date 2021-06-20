import clockImg from './icons8-clock-200.png';

import { useState, useEffect } from 'react';

const style = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap'
}

const pStyle = {
    fontSize: '1.1rem',
    margin: 0,
    padding: 0,
}

export const TimeInfo = ({
    timezone,
    timezoneOff
}) => {

    const [utcTime, setTime] = useState(null);
    useEffect(() => {
        setTime(false);
        const timeInterval = setInterval(() => {
            const now = new Date();
            // get actual date and calculate diff to get UTC
            const diff = now.getTime() + Math.floor(now.getTimezoneOffset() * 60 * 1000);
            const diff_2 = Math.floor(timezoneOff * 1000);
            // now add offset to get official time
            setTime(new Date(diff + diff_2));
        }, 1000);
        return () => clearInterval(timeInterval);
    }, [timezoneOff])


    const beautifyOffset = (offset) => {
        const hOffset = offset / 3600;
        const minOffset = (offset - (3600 * hOffset)) / 60;
        return `${hOffset}h ${minOffset}min`
    }

    return (
        <div style={style}>
            <img style={{ height: '5rem', width: 'auto', padding: 0, marginRight: '0.5rem' }} src={clockImg} alt="Map symbol" />
            <div>
                {utcTime && <p style={{ ...pStyle, fontSize: '1.4rem' }}>Time: {utcTime.toLocaleTimeString()} <span style={{fontSize: '1rem'}}> / {utcTime.toLocaleDateString()}</span> </p>}
                <p style={pStyle}>Timezone: {timezone}</p>
                <p style={pStyle}>UTC Offset: {beautifyOffset(timezoneOff)}</p>
            </div>
        </div>
    )
}