const key = '2d99d094fc2528587ee329783ffb24f4'

export const OpenWeather = {
    fetchWeather(location) {
        return fetch(`//api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`)
        .then(respond => {
            return respond.json();
        })
        .then(jsonRespond => {
            const {coord} = jsonRespond;
            const {lon, lat} = coord;
            return fetch(`//api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${key}`)
            .then(respond => {
                return respond.json()
            })
        })
        .catch(error => {
            console.log('City not found')
        })
    }
}

export default OpenWeather;