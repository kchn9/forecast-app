import { useState } from 'react';
import { ForecastHeader } from './ForecastHeader.js';
import { ForecastImage } from './ForecastImage.js';
import { ForecastDetails } from './ForecastDetails.js';

export const ForecastViewer = ({
    daily,
    hourly
}) => {

    const [weekday, setWeekday] = useState(0);
    const goPrev = () => {
        setWeekday(prev => {
            if (prev <= 0) {
                return 7;
            }
            return prev - 1;
        })
    }
    const goNext = () => {
        setWeekday(prev => {
            if (prev >= 7) {
                return 0;
            }
            return prev + 1;
        })
    }

    // prevent rendering if there is no forecast
    if (!daily[weekday]) return null;

    // generates hourly predition for current and upcoming day (API limitation)
    const getHourly = () => {
        if (weekday === 0) return hourly.slice(0, 24);
        else if (weekday === 1) return hourly.slice(24);
        else return []
    };

    return (
        <main>
            <ForecastHeader
                data={daily[weekday]}
            />
            <ForecastImage
                iconId={daily[weekday].weather[0].icon}
            />
            <ForecastDetails
                general={daily[weekday]}
                hourly={getHourly()}
            />
            <button onClick={goPrev}>{"<"}</button>
            <button onClick={goNext}>{">"}</button>
        </main>
    )
}