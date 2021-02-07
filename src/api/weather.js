import axios from 'axios';
import store from '../store';
import { createMessage } from '../store/actions/notificationAction';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const minutesWithLeadingZeros = (dt) => (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();


const hoursWithLeadingZeros = (dt) => (dt.getUTCHours() < 10 ? '0' : '') + dt.getUTCHours();

const serializeMonth = (month) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return monthNames[month]
}

const serializeDay = (day) => {

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return days[day]

}

// mapping the return data
const resolveData = (response) => {
    const { list, city } = response.data;
    const forecast = list.map((data) => {

        const parseDate = new Date(data.dt_txt);
        const date_text = `${parseDate.getDate()} ${serializeMonth(parseDate.getMonth())} ${parseDate.getFullYear()} ${hoursWithLeadingZeros(parseDate)}:${minutesWithLeadingZeros(parseDate)}`;
        const date = parseDate.getDay();
        const { temp, feels_like, humidity } = data.main;
        const description = data.weather[0]?.description || 'unknown';

        return {
            id: data.dt,
            date: serializeDay(date),
            date_text,
            temp: Math.round(temp),
            feels_like: Math.round(feels_like),
            humidity,
            description
        }
    })

    return {
        city,
        forecast
    }
}


const resolveGetCurrentWeather = (response) => {

    const { weather, name, dt, main } = response.data;

    const {temp, feels_like, humidity} = main;

    const parseDate = new Date(dt * 1000);
    const date = parseDate.getDay();

    const date_text = `${parseDate.getDate()} ${serializeMonth(parseDate.getMonth())} ${parseDate.getFullYear()} ${hoursWithLeadingZeros(parseDate)}:${minutesWithLeadingZeros(parseDate)}`;


    const description = weather[0]?.description || 'unknown';

    const current = {
        id: dt,
        date: serializeDay(date),
        date_text,
        temp: Math.round(temp),
        feels_like: Math.round(feels_like),
        humidity,
        description
    }


    return ({
        city: name,
        current
    })
}
/**
 * Responsible for call the Open Weather API
 */
class WeatherApiService {
    constructor() {
        this.openWeatherAPI = axios.create({
            baseURL: API_URL,
            params: {
                appid: API_KEY,
                cnt: 10,
                units: 'metric',
            }
        });

        this.openWeatherAPI.interceptors.response.use(null, (error) => {
            // Catch all the status code here. since this is just a text and not part of requirements, I'm not gonna catch any error
            // Ex:
            if (error && error.response && error.response.status === 404) {
                store.dispatch(createMessage(error.response.data?.message || "Can't find what you search for", 'error'))
            } else {
                store.dispatch(createMessage("Server error", 'error'))
            }

            return Promise.reject(error.response);
        });
    }

    get(service, options) {
        return this.openWeatherAPI.get(service, options)
    }

    getCurrentWeather(params) {
        return this.get('weather', {
            params: {
                ...params
            }
        }).then(resolveGetCurrentWeather)
    }

    getDailyForecastByCoor(lat, lon) {
        return this.get(
            "forecast",
            {
                params: {
                    lat,
                    lon,
                }
            })
            .then(resolveData)

    }

    getDailyForecastByName(input) {
        return this.get(
            "forecast",
            {
                params: {
                    q: input,
                }
            })
            .then(resolveData)
    }
}


export default new WeatherApiService;