import searchImg from './icons8-search-200.png';

export const LocationForm = ({
    location,
    onChange,
    onSubmit
}) => {
    return (
        <form className="search-bar" onSubmit={onSubmit} autoComplete="off">
            <input id="search" type="image" alt="Search" src={searchImg}/>
            <input id="loc" type="text" placeholder="Search location" value={location} onChange={onChange}/>
        </form>
    )
}