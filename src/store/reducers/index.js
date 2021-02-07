import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import notificationReducer from './notificationReducer';

export default combineReducers({
    weatherReducer,
    notificationReducer
})