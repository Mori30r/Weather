import React, {useContext} from 'react';
import {WeatherDetailHeading, WeatherDetailHeadingTempBox, WeatherDetailSection} from "./WeatherDetail.elements";
import {WeatherContext} from "../../Context/WeatherContext";
import data from '../data.json';

export const WeatherDetail = () => {
    const { weatherState } = useContext(WeatherContext);
    return (
        <WeatherDetailSection>
            <WeatherDetailHeading>
                <WeatherDetailHeadingTempBox>

                </WeatherDetailHeadingTempBox>
            </WeatherDetailHeading>
        </WeatherDetailSection>
    );
};
