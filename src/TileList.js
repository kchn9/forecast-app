import { Tile } from './Tile'

export const TileList = ({
    dataArray
}) => {

    // dont render if there is no data to display -> prevent Tile to fetch images and render
    if (!dataArray) return null;

    return (
        <ul className="tile-list">
            {dataArray.map((data, index) => <li style={{listStyle: 'none'}}><Tile key={index} data={data} /></li>)}
        </ul>
    )
}