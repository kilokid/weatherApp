import WeatherCard from "../weatherCard/WeatherCard";

const Container = (props) => {
    return (
        <div className="container">
            <WeatherCard temp={props.temp} place={props.place} icon={props.icon} feelsLike={props.feelsLike} />
        </div>
    );
}

export default Container;