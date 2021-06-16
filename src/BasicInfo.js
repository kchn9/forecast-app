export const BasicInfo = (props) => {

    const keys = Object.keys(props);
    const propsValues = keys.map(key => props[key]);
    const predicate = (val) => val === undefined;

    if (propsValues.every(predicate)) {
        return <div className="empty-bar"></div>
    }

    const now = new Date();
    // get actual date and calculate diff to get UTC
    const diff = now.getTime() + Math.floor(now.getTimezoneOffset() * 60 * 1000);
    const diff_2 = Math.floor(props.timezoneOff * 1000);
    // now add offset to get official time
    const utcDate = new Date(diff + diff_2);

    return (
        <div className="info-bar">
            <p className="info-location">Now in {props.location} [lon: {props.lon}, lat: {props.lat}] at {utcDate.toLocaleTimeString()} [{props.timezone}]</p>
        </div>
    )
}