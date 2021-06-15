export const LocationForm = ({
    location,
    onChange,
    onSubmit
}) => {
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="loc">
                Location<br/>
                <input id="loc" type="text" placeholder="Forecast location" value={location} onChange={onChange}/>
            </label>
        </form>
    )
}