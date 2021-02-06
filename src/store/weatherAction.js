
import GeoService from '../api/geo';
import WeatherApiService from '../api/weather';

export const getForecastByName = (input) => {
    return WeatherApiService.getDailyForecastByName(input)
}

export const initWeather = () => {
    return GeoService.getLatAndLong()
        .then(({ latitude, longitude }) => {
            return WeatherApiService.getDailyForecastByCoor(latitude, longitude)
        })
}

