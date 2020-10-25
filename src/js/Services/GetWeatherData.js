import publicIp from "public-ip";
import axios from "axios";
import config from './../../config';

let getCityUrl;
let getWeatherUrl;

const getIp = () => {
    return publicIp.v4();
}
const locationKey = config.LOCATION_KEY
const weatherKey = config.WEATHER_KEY

export async function getWeather () {
    const ip = await getIp();
    getCityUrl = `http://api.ipstack.com/${ip}?access_key=${ locationKey }`;
    const location = await axios.get(getCityUrl);
    getWeatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.data["latitude"]}&lon=${location.data["longitude"]}&appid=${ weatherKey }`
    const weather = await axios.get(getWeatherUrl);
    return weather.data['daily']
}