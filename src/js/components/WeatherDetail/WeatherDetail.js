import React, {useContext, useEffect} from 'react';
import {WeatherDetailHeading, WeatherDetailHeadingTempBox, WeatherDetailSection} from "./WeatherDetail.elements";
import {WeatherContext} from "../../Context/WeatherContext";


export const WeatherDetail = () => {
    const { weatherState, weatherDispatch } = useContext(WeatherContext);
    return (
        <WeatherDetailSection>
            <WeatherDetailHeading>
                <WeatherDetailHeadingTempBox>

                </WeatherDetailHeadingTempBox>
            </WeatherDetailHeading>
        </WeatherDetailSection>
    );
};
