import { UPDATE_MESSAGE, CLEAR_MESSAGE } from '../constant';

export const clearMessage = () => {
    return {
        type: CLEAR_MESSAGE
    }
}

export const createMessage = (message, type) => (dispatch) => {

    const payload = {
        message,
        type
    }

    dispatch({
        type: UPDATE_MESSAGE,
        payload
    })

    setTimeout(() => { 
        dispatch(clearMessage())
    }, 7000);
}