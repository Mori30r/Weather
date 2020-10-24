import React, {useEffect, useReducer} from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from "./js/GlobalStyles/Base";
import * as Theme from "./js/GlobalStyles/Theme";
import {ThemeProvider} from "styled-components";
import {MainApp} from "./js/components/Main/Main";
import {weatherReducer} from "./js/Reducers/WeatherReducer";
import {WeatherContext} from "./js/Context/WeatherContext";
import {getWeather} from "./js/Services/GetWeatherData";


const App = () => {
    const [weatherState, weatherDispatch] = useReducer(weatherReducer, undefined, undefined);
    // getWeather().then((data)=>{
    //     weatherDispatch({ type: 'GET_WEATHER', weather: data });
    // });
    return (
        <WeatherContext.Provider value={{ weatherState, weatherDispatch }}>
            <ThemeProvider theme={Theme}>
                <GlobalStyle/>
                <MainApp/>
            </ThemeProvider>
        </WeatherContext.Provider>
    )
}


ReactDOM.render(
    <App/>,
  document.getElementById('root')
);