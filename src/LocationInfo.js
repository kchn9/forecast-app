import mapImg from './icons8-map-100.png';

const style = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    padding: '.5rem 0',
}

const pStyle = {
    fontSize: '1.2rem',
    margin: 0,
    padding: 0,
}

export const LocationInfo = ({
    latitude,
    longitude
}) => {
    return (
        <div style={style}>
            <img style={{ height: '5rem', width: 'auto', padding: 0, marginRight: '0.5rem' }} src={mapImg} alt="Map symbol" />
            <div>
                <p style={pStyle}>Latidute: {latitude}&#176;</p>
                <p style={pStyle}>Longitude: {longitude}&#176;</p>
            </div>
        </div>
    )
}