import { Tile } from './Tile'

export const TileList = ({
    dataArray
}) => {
    return (
        <ul className="tile-list">
            {dataArray.map((data, index) => <Tile key={index} data={data} />)}
        </ul>
    )
}