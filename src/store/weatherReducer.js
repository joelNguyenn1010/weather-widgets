export const initialState = {
    city: {},
    forecast: [],
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_FORECAST':
            return {
                ...state,
                ...action.payload
            }
        case 'CLEAR':
            return {
                ...state,
                city: {},
                forecast: [],
            }
        default:
            return state
    }
}