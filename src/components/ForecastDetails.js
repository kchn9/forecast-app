export const ForecastDetails = ({
    general,
    off,
    weekday
}) => {

    // "translates" UTC time to time depending on user locale
    const translateTime = (time) => {
        const timeDate = new Date(time * 1000);
        const diff = timeDate.getTime() + Math.floor(timeDate.getTimezoneOffset() * 60 * 1000);
        const diff_2 = Math.floor(off * 1000);
        return new Date(diff + diff_2).toLocaleTimeString();
    }

    // "translates" wind degree to more human geographic direction
    const translateWindDeg = (degree) => {
        if (degree >= 22.5 && degree < 67.5) return "NE";
        else if (degree >= 67.5 && degree < 112.5) return "E";
        else if (degree >= 112.5 && degree < 157.5) return "SE";
        else if (degree >= 157.5 && degree < 202.5) return "S";
        else if (degree >= 202.5 && degree < 247.5) return "SW";
        else if (degree >= 247.5 && degree < 292.5) return "W";
        else if (degree >= 292.5 && degree < 337.5) return "NW";
        else return "N";
    }

    return (
        <section>
            <p>Clouds {general.clouds}%</p>
            <p>Humidity {general.humidity}%</p>
            <p>Pressure {general.pressure}HPa</p>
            {![0, 1].includes(weekday) && <p>Pop probability {general.pop * 100}%</p>}
            <time>Sunrise {translateTime(general.sunrise)}</time>
            <br/>
            <time>Sunset {translateTime(general.sunset)}</time>
            <p>Wind dir {translateWindDeg(general.wind_deg)}</p>
            <p>Wind speed {general.wind_speed}km/h</p>
        </section>
    )
}