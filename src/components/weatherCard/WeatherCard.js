import { useState, useEffect } from 'react';

import useWeatherService from '../../services/WeatherService';
import SwitchImg from '../../services/SwitchImg';

import './weatherCard.scss';

const WeatherCard = () => {
    const [currentGeo, setCurrentGeo] = useState({});

    const {getTempByCoords} = useWeatherService();

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
        navigator.geolocation.getCurrentPosition((position) => {
        getTempByCoords(position.coords.latitude, position.coords.longitude)
            .then(res => {
                const {temp, place, icon, feelsLike, description} = res;
                setCurrentGeo({temp, place, icon, feelsLike, description});
            });
        });
    }

    const newDescription = (str) => {
        if (!str) return str;

        return str[0].toUpperCase() + str.slice(1);
    }

    let img = SwitchImg(currentGeo.icon);

    return (
        <div className="weather__card">
            <h1 className='weather__city'>{currentGeo.place}</h1>
            <div className="weather__info">
                <div className="weather__temp-info">
                    <img className='weather__icon' src={img} alt="" />
                    <p className="weather__temp">{currentGeo.temp}°C</p>
                </div>
                <p className="weather__description">{newDescription(currentGeo.description)}</p>
                <p className="weather__feels">Ощущается как: {currentGeo.feelsLike}°C</p>
            </div>
        </div>
    );
}

export default WeatherCard;