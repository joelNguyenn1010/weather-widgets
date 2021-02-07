import { UPDATE_MESSAGE, CLEAR_MESSAGE } from '../constant';
export const initialState = {
    message: '',
    type: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE:
            return {
                ...state,
                ...action.payload
            }
        case CLEAR_MESSAGE:
            return {
                ...state,
                message: '',
                type: ''
            }
        default:
            return state
    }
}

export default reducer;