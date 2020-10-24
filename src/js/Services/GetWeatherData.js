import {useEffect, useState} from "react";
import publicIp from "public-ip";
import axios from "axios";

let getCityUrl;
let getWeatherUrl;
const [weather, setWeather] = useState([]);
const [error, setError] = useState('');

const getIp = () => {
    return publicIp.v4();
}


useEffect( ()=>{
    getIp().then( (r)=>{
        getCityUrl = `http://api.ipstack.com/${r}?access_key=94d09010ee5d3975487b51e26f3a1ee4`;
        axios.get(getCityUrl).then((r)=> {
            getWeatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${r.data["latitude"]}&lon=${r.data["longitude"]}&appid=1b6866d9113d620d6c30d25e3b474830`
            axios.get(getWeatherUrl).then((r)=>{
                setWeather(r.data['daily']);
            }).catch(e => setError(e));
        })
    });
 }, []);