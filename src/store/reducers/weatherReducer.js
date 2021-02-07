import { GET_FORECAST, CLEAR, GET_CURRENT_WEATHER } from '../constant';
export const initialState = {
    city: '',
    forecast: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CURRENT_WEATHER:

            const forecast = state.forecast.concat()
            const { city, current } = action.payload
            forecast.push({ ...current })

            return {
                ...state,
                city,
                forecast
            }

        case GET_FORECAST:
            const forecastCurrentAndHourly = state.forecast.concat(action.payload.forecast)
            return {
                ...state,
                forecast: forecastCurrentAndHourly
            }
        case CLEAR:
            return {
                ...state,
                city: {},
                forecast: [],
            }
        default:
            return state
    }
}

export default reducer;