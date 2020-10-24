import publicIp from "public-ip";
import axios from "axios";

let getCityUrl;
let getWeatherUrl;

const getIp = () => {
    return publicIp.v4();
}

export async function getWeather () {
    const ip = await getIp();
    getCityUrl = `http://api.ipstack.com/${ip}?access_key=94d09010ee5d3975487b51e26f3a1ee4`;
    const location = await axios.get(getCityUrl);
    getWeatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.data["latitude"]}&lon=${location.data["longitude"]}&appid=1b6866d9113d620d6c30d25e3b474830`
    const weather = await axios.get(getWeatherUrl);
    return weather.data['daily'];
}