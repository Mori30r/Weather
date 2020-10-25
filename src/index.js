import React, {useEffect, useReducer} from 'react';
import ReactDOM from 'react-dom';
import {Center, GlobalStyle} from "./js/GlobalStyles/Base";
import * as Theme from "./js/GlobalStyles/Theme";
import {ThemeProvider} from "styled-components";
import {MainApp} from "./js/components/Main/Main";
import {weatherReducer} from "./js/Reducers/WeatherReducer";
import {WeatherContext} from "./js/Context/WeatherContext";
import {getWeather} from "./js/Services/GetWeatherData";
import { ReactComponent as Arrow } from "./assets/icons/Arrow/arrows_anticlockwise.svg";
import {IconWrapper} from "./js/components/SideBar/SideBar.elements";

const App = () => {
    const [weatherState, weatherDispatch] = useReducer(weatherReducer, { loading: true, active: 1603524600 }, undefined);

    useEffect(()=>{
        getWeather().then((data)=>{
            weatherDispatch({ type: 'GET_WEATHER', weather: data });
        });
    }, []);

    return (
        <WeatherContext.Provider value={{ weatherState, weatherDispatch }}>
            <ThemeProvider theme={Theme}>
                <GlobalStyle/>
                { weatherState.loading ?
                    <>
                        <Center>
                            <IconWrapper color={'grey'} size={'5rem'}>
                                <Arrow className={'svg'} />
                            </IconWrapper>
                        </Center>
                    </>

                    : <MainApp/> }
            </ThemeProvider>
        </WeatherContext.Provider>
    )
}


ReactDOM.render(
    <App/>,
  document.getElementById('root')
);