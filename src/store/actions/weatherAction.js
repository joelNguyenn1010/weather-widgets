import GeoService from '../../api/geo';
import { GET_FORECAST, CLEAR } from '../constant';
import WeatherApiService from '../../api/weather';

export const clearForecast = () => {
    return {
        type: CLEAR
    }
}

export const getForecastByName = (input) => (dispatch) => {
    WeatherApiService.getDailyForecastByName(input)
        .then(payload => {
            dispatch({
                type: GET_FORECAST,
                payload
            })
        })

}

export const initWeather = () => (dispatch) => {
    GeoService.getLatAndLong()
        .then(({ latitude, longitude }) => {
            return WeatherApiService.getDailyForecastByCoor(latitude, longitude)
        })
        .then((payload) => {
            dispatch({
                type: GET_FORECAST,
                payload
            })
        })

}