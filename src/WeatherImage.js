import OpenWeather from "./utils/OpenWeather";

export const WeatherImage = ({
    iconId
}) => {

    if (!iconId) {
        return null;
    }
    const src = OpenWeather.generateIconURL(iconId);

    return <img src={src} alt="Weather icon" style={{ display: 'inline', height: '4.4rem', width: 'auto', verticalAlign: 'top' }}></img>
}