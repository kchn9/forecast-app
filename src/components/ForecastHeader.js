import { ForecastImage } from "./ForecastImage";

export const ForecastHeader = ({
    data,
    iconId
}) => {

    const getWeekday = dt => {
        const date = new Date(dt * 1000);
        const weekdayNumber = date.getDay();
        switch (weekdayNumber) {
            case 0:
                return 'Sunday';
            case 1:
                return 'Monday';
            case 2:
                return 'Tuesday';
            case 3:
                return 'Wednesday';
            case 4:
                return 'Thursday';
            case 5:
                return 'Friday';
            case 6:
                return 'Thursday';

            default:
                break;
        }
    }

    return (
        <div className="forecast-header">
            <span>{getWeekday(data.dt)}</span>
            <br/>
            <ForecastImage iconId={iconId}/>
            <span>{Math.round(data.temp.day)}&deg;C</span> / {Math.round(data.temp.night)}&deg;C
            <legend>{data.weather[0].description}</legend>
        </div>
    )
}