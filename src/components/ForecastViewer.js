import { useState } from 'react';
import { ForecastHeader, ForecastImage, ForecastDetails, HourlyChart } from '../components';

export const ForecastViewer = ({
    daily,
    hourly,
    off,
    hourSkip
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

    const getHours = (hourly, step) => {
        const hours = [];
        hourly.forEach((_, idx) => {
            if (idx % step === 0) {
                hours.push(idx);
            }
        })
        return hours;
    }

    //get data from object
    const getDataByHour = (hourly, data, step) => {
        const dataArr = [];
        const dataScopes = data.length; // 2
        hourly.forEach((curr, idx) => {
            if (idx % step === 0) {
                let currData = curr[data[0]];
                // if data is scoped in object mine it!
                if (dataScopes >= 2) {
                    for (let i = 1; i < dataScopes; i++) {
                        currData = currData?.[data[i]]
                    }
                }
                dataArr.push(currData)
            }
        })
        return dataArr;
    }

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
                off={off}
                weekday={weekday}
            />
            {getHourly().length > 0 &&
                <HourlyChart
                    hours={getHours(getHourly(), hourSkip)}
                    temp={getDataByHour(getHourly(), ["temp"], hourSkip)}
                    rain={getDataByHour(getHourly(), ["rain", "1h"], hourSkip)}
                    snow={getDataByHour(getHourly(), ["snow", "1h"], hourSkip)}
                />
            }
            <button onClick={goPrev}>{"<"}</button>
            <button onClick={goNext}>{">"}</button>
        </main>
    )
}