import WeatherCard from "../weatherCard/WeatherCard";

import './container.scss';

const Container = (props) => {
    return (
        <div className="container">
            <WeatherCard temp={props.temp} place={props.place} icon={props.icon} feelsLike={props.feelsLike} description={props.description} />
        </div>
    );
}

export default Container;