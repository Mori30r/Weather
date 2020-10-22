import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from "./js/GlobalStyles/Base";
import { WeatherApp } from './js/components/Weather';
import * as Theme from "./js/GlobalStyles/Theme";
import {ThemeProvider} from "styled-components";

const App = () => {
    return (
        <>
            <ThemeProvider theme={Theme}>
                <GlobalStyle/>
                <WeatherApp/>
            </ThemeProvider>
        </>
    )
}


ReactDOM.render(
    <App/>,
  document.getElementById('root')
);