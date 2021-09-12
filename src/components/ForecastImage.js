import OpenWeather from "../utils/OpenWeather";

export const ForecastImage = ({
    iconId
}) => {

    if (!iconId) {
        return null;
    }
    const src = OpenWeather.generateIconURL(iconId);

    return <img className="forecast-image" src={src} alt="Weather icon"></img>
}