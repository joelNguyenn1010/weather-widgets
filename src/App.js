/*

import NotFoundPage from './pages/404';

create 404 and 500 is not part of requirements but if you need it. The api service weather have a section where you can
capture all the error 
`this.openWeatherAPI.interceptors.response.use(null, (error) => {}`
use that to push any error status code to the NotFoundPage or 500 error page
*/

import React, { useReducer } from 'react';
import Weather from './components/Weather';
import Search from './components/Weather/Search';
import Notification from './components/Notification';
import ThemeToggle from './components/common/ThemeToggle';
import { reducer, initialState } from './store/themeReducer';
import { WeatherProvider } from './store/contexts/weatherContext';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reducer as weatherReducer, initialState as weatherInitialState } from './store/contexts/weatherReducer';


const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const { currentTheme } = state;

  const [weatherState, weatherDispatch] = useReducer(weatherReducer, weatherInitialState);

  return (
    <ThemeProvider theme={currentTheme}>
      <WeatherProvider value={{ ...weatherState, weatherDispatch }}>
        <GlobalStyles />
        <Notification />
        <ThemeToggle onClick={() => dispatch({ type: "TOGGLE-THEME" })} />
        <Search />
        <Weather />
      </WeatherProvider>
    </ThemeProvider>

  );
}

const GlobalStyles = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    min-width: 320px;
    box-sizing: border-box;
    background: ${props => props.theme.bodyBackgroundColor};
    font-family: sans-serif;
  }

  h1,h2,h3 {
    color: ${props => props.theme.textColor};
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${props => props.theme.textColor};
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
  }

  input:focus, button:focus {
    outline: none;
  }
`;


export default App;
