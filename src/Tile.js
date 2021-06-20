import { WeatherImage } from './WeatherImage';
import { WeatherDescription } from './WeatherDescription';

export const Tile = ({
    data
}) => {
    return (
        <div style={{ backgroundColor: '#637D96', color: '#ECECE7', margin: '.5rem 0', display: 'flex', flexFlow: 'row nowrap' }}>
            <WeatherImage iconId={data.weather[0].icon} />
            <WeatherDescription type="small" data={data}/>
        </div>
    )
}