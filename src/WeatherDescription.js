export const WeatherDescription = ({
    type, // will be used in the nearest future
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
        }
    }

    const getDate = dt => {
        const date = new Date(dt * 1000);
        return date.toLocaleDateString();
    }

    return (
        <p style={{ display: "inline-block"}}>
            {getWeekday(data.dt)} / {getDate(data.dt)} <br/>
            {Math.round(data.temp.day)}&deg;C / {Math.round(data.temp.night)}&deg;C
        </p>
    )
}