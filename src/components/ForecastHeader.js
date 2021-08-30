export const ForecastHeader = ({
    data
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

    const getDate = dt => {
        const date = new Date(dt * 1000);
        return date.toLocaleDateString();
    }

    return (
        <h4>
            <span>{getWeekday(data.dt)}</span>
            <span>{getDate(data.dt)}</span>
            <br/>
            <span>{Math.round(data.temp.day)}&deg;C</span> / {Math.round(data.temp.night)}&deg;C
            <legend>{data.weather[0].description}</legend>
        </h4>
    )
}