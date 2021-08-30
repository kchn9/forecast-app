import mapImg from '../assets/icons8-map-100.png'

export const LocationInfo = ({
    latitude,
    longitude
}) => {
    return (
        <div className="info-group">
            <img src={mapImg} alt="Map symbol" />
            <div>
                <p className="coordinate">Latidute: {latitude}&#176;</p>
                <p className="coordinate">Longitude: {longitude}&#176;</p>
            </div>
        </div>
    )
}