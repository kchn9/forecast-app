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
        }
    }

    const getDate = dt => {
        const date = new Date(dt * 1000);
        return date.toLocaleDateString();
    }

    return (
        <p style={{ display: "inline-block", position: "relative", width: "100%", color: '#000', marginTop: '.8rem' }}>
            <span style={{fontSize: "1.1rem"}}>{getWeekday(data.dt)}</span>
            <span style={{display: "block", fontSize: "1.2rem", position: "absolute", right: "1rem", top: "0%"}}>{getDate(data.dt)}</span>
            <br/>
            <span style={{fontSize: "1.1rem"}}>{Math.round(data.temp.day)}&deg;C</span> / {Math.round(data.temp.night)}&deg;C
        </p>
    )
}