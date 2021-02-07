import { useEffect } from 'react';
import Card from '../common/Card';
import Title from '../common/Title';
import Spinner from '../common/Spinner';
import Carousel from '../common/Carousel';
import styled, { keyframes } from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { initWeather } from '../../store/actions/weatherAction';

const Weather = () => {
    // This one I used for Context API
    // const { forecast, city, weatherDispatch } = useContext(WeatherContext);
    const dispatch = useDispatch()
    const { forecast, city } = useSelector(state => state.weatherReducer)

    useEffect(() => {
        // This one I used for Context API
        // initWeather().then(payload => {
        //     weatherDispatch({
        //         type: 'GET_FORECAST',
        //         payload
        //     })
        // })

        dispatch(initWeather());
    }, [])



    if (forecast && forecast.length > 0) {
        return <Carousel>
            {forecast.map(weather => (
                <Wrapper key={weather.id}>
                    <Card>
                        <Title>{weather.date}</Title>

                        <Time>{weather.date_text}</Time>

                        <Description>{weather.description}</Description>

                        <Metric>{weather.temp}<span>&#176;</span>C</Metric>

                        <Description>Feels like: {weather.feels_like}</Description>

                        <h3>{city.name}</h3>
                    </Card>
                </Wrapper>
            )
            )}
        </Carousel>
    }

    return <Spinner />
}

const fadeIn = keyframes`
    from { opacity:  0; }
    to   { opacity: 1; }
`

const Wrapper = styled.div`
    margin: 1rem;
    padding: 0.2rem;
    animation: ${fadeIn} 0.5s;
`

const Time = styled.p`
    font-size: 1rem;

    @media (max-width: 768px) {
        font-size: 0.7rem;
    }

`

const Description = styled.p`
    font-size: 2rem;
    text-transform: capitalize;
    @media (max-width: 768px) {
        font-size: 1rem;
    }

    font-weight: bold;
    padding-top: 1rem;
    word-break: break-all;
    overflow-wrap: break-word;
`

const Metric = styled.h2`
    font-size: 6rem;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`

export default Weather;