import { GET_FORECAST, CLEAR } from '../constant';
export const initialState = {
    city: {},
    forecast: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FORECAST:
            return {
                ...state,
                ...action.payload
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