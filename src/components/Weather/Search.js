import Input from '../common/Input';
import Button from '../common/Button';
import styled from "styled-components";
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { getForecastByName, clearForecast } from '../../store/actions/weatherAction';

const Search = () => {

    const dispatch = useDispatch();

    const [input, setInput] = useState('');

    const onSubmit = (event) => {
        if (input.length > 0) {
            dispatch(clearForecast());
            dispatch(getForecastByName(input));
        }

        event.preventDefault();
    }

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <InputLeftRounded placeholder="City, ZIP Code" onChange={event => setInput(event.target.value)} />
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

const InputLeftRounded = styled(Input)`
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
`


const SubmitButton = styled(Button)`
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;

`
export default Search;