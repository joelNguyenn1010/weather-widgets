import Card from '../common/Card';
import styled, { keyframes } from "styled-components";
import Spinner from '../common/Spinner';

import Carousel from '../common/Carousel';
import { useContext, useEffect, useState } from 'react';
import { initWeather } from '../../store/weatherAction';

import WeatherContext from '../../store/weatherContext';

const Weather = () => {
    const { forecast, city, weatherDispatch } = useContext(WeatherContext);

    const [selected, setSelected] = useState(0);

    // const { forecast, city } = weatherState;

    useEffect(() => {
        initWeather().then(payload => {
            weatherDispatch({
                type: 'GET_FORECAST',
                payload
            })
        })
    }, [])



    if (forecast && forecast.length > 0) {
        return <Carousel>
            {forecast.map((weather, index) => {

                return (
                    <Wrapper key={weather.id}>
                        <Card onClick={() => setSelected(index)}>
                            <Title>{weather.date}</Title>

                            <Time>{weather.date_text}</Time>

                            <Description style={{ textTransform: "capitalize" }}>{weather.description}</Description>

                            <Metric>{weather.temp}<span>&#176;</span>C</Metric>

                            <p>Feels like: {weather.feels_like}</p>

                            <h3>{city.name}</h3>
                        </Card>
                    </Wrapper>

                )
            }
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

const Title = styled.h1`
    font-size: 6rem;
    padding-right: 1rem;
    padding-left: 1rem;
    @media (max-width: 768px) {
        font-size: 2rem;
    }
    
`;

const Time = styled.p`
    font-size: 1rem;

    @media (max-width: 768px) {
        font-size: 0.7rem;
    }

`

const Description = styled.p`
    font-size: 2rem;

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