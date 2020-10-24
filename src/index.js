import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from "./js/GlobalStyles/Base";
import * as Theme from "./js/GlobalStyles/Theme";
import {ThemeProvider} from "styled-components";
import {MainApp} from "./js/components/Main/Main";

const App = () => {
    return (
        <>
            <ThemeProvider theme={Theme}>
                <GlobalStyle/>
                <MainApp/>
            </ThemeProvider>
        </>
    )
}


ReactDOM.render(
    <App/>,
  document.getElementById('root')
);