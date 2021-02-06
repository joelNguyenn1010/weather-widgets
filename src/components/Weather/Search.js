
import Button from '../common/Button';
import styled from "styled-components";
import { useContext, useState } from 'react';
import WeatherContent from '../../store/weatherContext';
import { getForecastByName } from '../../store/weatherAction';

const Search = () => {

    const { weatherDispatch } = useContext(WeatherContent);

    const [input, setInput] = useState('');

    const onSubmit = (event) => {
        if(input.length > 0) {
            weatherDispatch({type: 'CLEAR'});

            getForecastByName(input)
                .then(payload => {
                    weatherDispatch({
                        type: 'GET_FORECAST',
                        payload
                    })
                })
        }

        event.preventDefault();
    }

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Input placeholder="City, ZIP Code" onChange={event => setInput(event.target.value)} />
                <SubmitButton type="submit">Search</SubmitButton>
            </FormGroup>
        </Form>
    )
}

const Form = styled.form`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 1rem;
`

const FormGroup = styled.div`
    display: flex;

`

const Input = styled.input`
    padding: 0.7rem;
    border: .5px solid #dbdbdb;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
`


const SubmitButton = styled(Button)`
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;

`
export default Search;