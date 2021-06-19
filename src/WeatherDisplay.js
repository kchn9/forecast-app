import { TileList } from './TileList.js'

export const WeatherDisplay = ({
    currentWeather,
    hourlyWeather,
    dailyWeather
}) => {
    return (
        <main style={{ backgroundColor: "#F1F0EA", padding: "2.3rem", display: "flex", flexDirection: "row", gap: "4rem", position: "relative", zIndex: "-2"}}>
            <section style={{ flex: "0 1 65%", textAlign: "justify" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat massa ut diam ornare facilisis. Nunc elit erat, faucibus nec hendrerit a, venenatis non turpis. Nam arcu elit, rhoncus non lectus eu, varius efficitur mi. Phasellus ut elementum velit. Aliquam venenatis justo vitae imperdiet venenatis. Maecenas laoreet placerat velit et faucibus. Nam auctor posuere faucibus. Quisque suscipit aliquet cursus. Duis nec accumsan ligula, et vehicula nisi. Aliquam eget efficitur nunc.

                Quisque pellentesque malesuada diam, non eleifend lectus luctus at. Ut et rhoncus odio. Aenean a hendrerit magna. Nunc ut felis lectus. Donec facilisis maximus elementum. Vestibulum vitae euismod ipsum. Curabitur at congue arcu, id pulvinar nisi. Curabitur pulvinar erat ut augue tempor facilisis. Morbi ex tortor, volutpat at dui in, lacinia faucibus leo. Maecenas eu consequat mauris. Praesent quis congue tellus. Curabitur a nulla sollicitudin, egestas massa ac, malesuada leo.

                Phasellus vitae turpis et nisi molestie euismod. Etiam venenatis leo quis luctus ultricies. Quisque lectus orci, dignissim nec volutpat ac, eleifend id erat. Mauris nibh sapien, dictum quis dignissim sed, sagittis nec justo. Phasellus dapibus nibh sed mi scelerisque, et laoreet mi scelerisque. Maecenas massa enim, dignissim eu sem eget, tristique dignissim risus. Curabitur viverra commodo sapien, ac mollis risus rhoncus eu. Suspendisse vitae consequat elit, dictum vehicula enim. Nullam ut sollicitudin arcu, sit amet vestibulum diam. Suspendisse aliquet placerat feugiat. Praesent orci risus, pharetra sed eros id, aliquet ultricies lectus.

                Etiam ipsum augue, lacinia ac fringilla vel, fermentum vel quam. Aenean eget luctus mauris. Phasellus sed viverra nisl, at accumsan risus. Ut et elit a nunc vestibulum fermentum id id risus. In ac arcu rutrum, tempor ante id, venenatis dolor. Donec fermentum turpis tellus, eget vestibulum tortor placerat et. Proin sed erat mattis, efficitur felis non, elementum purus. Nulla eu odio sit amet arcu pretium porttitor at a ante. Donec at tellus aliquet, dictum mauris id, sollicitudin arcu. Nulla vel viverra felis. Phasellus iaculis facilisis faucibus. Curabitur ultricies urna sed sollicitudin fermentum. Suspendisse tincidunt volutpat nibh, sit amet luctus neque malesuada ac. Morbi non rhoncus lorem, et euismod dui. Suspendisse non tristique lorem. Mauris finibus orci feugiat metus convallis finibus.

                Vestibulum commodo id quam vel tempor. Aenean pharetra nibh vel justo vehicula, sit amet rutrum orci varius. Etiam nec dolor eu velit interdum placerat eget at quam. Maecenas scelerisque tortor eu mi aliquet, nec semper lorem volutpat. Duis at arcu vitae ante tempor porta sed id tortor. Mauris vestibulum hendrerit erat, sit amet egestas eros faucibus ut. Nam aliquam nulla eros, eget consectetur urna suscipit non. Maecenas vulputate tempus ultrices. Ut cursus augue urna, eget imperdiet orci euismod quis. Sed et lectus fringilla, imperdiet risus non, bibendum mi. Sed id enim venenatis, ornare enim a, rutrum massa. Maecenas hendrerit convallis accumsan.
            </section>
            <section style={{ flex: "0 1 35%", textAlign: "justify" }}>
                <TileList dataArray={dailyWeather}/>
            </section>
        </main>
    )
}