import GeoService from '../../api/geo';
import { GET_FORECAST, CLEAR, GET_CURRENT_WEATHER } from '../constant';
import WeatherApiService from '../../api/weather';

export const clearForecast = () => {
    return {
        type: CLEAR
    }
}

export const getForecastByName = (input) => (dispatch) => {
    WeatherApiService.getCurrentWeather({ q: input})
    .then((payload) => {
        dispatch({
            type: GET_CURRENT_WEATHER,
            payload
        })
    })
    .then(() => {

        WeatherApiService.getDailyForecastByName(input)
        .then(payload => {
            dispatch({
                type: GET_FORECAST,
                payload
            })
        })

    })
}

export const initWeather = () => async (dispatch) => {

    const { latitude, longitude } = await GeoService.getLatAndLong();

    WeatherApiService.getCurrentWeather({ lat: latitude, lon: longitude })
        .then((payload) => {
            dispatch({
                type: GET_CURRENT_WEATHER,
                payload
            })
        })
        .then(() => {
            WeatherApiService.getDailyForecastByCoor(latitude, longitude)
                .then((payload) => {
                    dispatch({
                        type: GET_FORECAST,
                        payload
                    })
                })
        })
}

