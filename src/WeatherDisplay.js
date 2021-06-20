import { TileList } from './TileList.js'

export const WeatherDisplay = ({
    currentWeather,
    hourlyWeather,
    dailyWeather
}) => {
    return (
        <main style={{ backgroundColor: "#F1F0EA", padding: ".2rem 2rem", display: "flex", flexDirection: "row", gap: "1.2rem", position: "relative", zIndex: "-2"}}>
            <section style={{ flex: "0 1 65%" }}>


            </section>
            <section style={{ flex: "0 1 35%" }}>
                <TileList dataArray={dailyWeather}/>
            </section>
        </main>
    )
}