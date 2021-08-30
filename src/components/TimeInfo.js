import clockImg from '../assets/icons8-clock-200.png'
import { useState, useEffect } from 'react';

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
        <div className="info-group">
            <img src={clockImg} alt="Map symbol" />
            <div>
                {utcTime && <p className="time">Time: {utcTime.toLocaleTimeString()} <span style={ {fontSize: "1rem"} }> / {utcTime.toLocaleDateString()}</span> </p>}
                <p className="time details">Timezone: {timezone.replace("_", " ")}</p>
                <p className="time details">UTC Offset: {beautifyOffset(timezoneOff)}</p>
            </div>
        </div>
    )
}