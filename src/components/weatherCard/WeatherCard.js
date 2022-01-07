import cloudyDay from '../../resources/img/cloudyDay.svg';
import cloudyNight from '../../resources/img/cloudyNight.svg';
import thunder from '../../resources/img/thunder.svg';
import drizzle from '../../resources/img/rainy-6.svg';
import rainy from '../../resources/img/rainy.svg';
import snow from '../../resources/img/snowy.svg';
import clearDay from '../../resources/img/day.svg';

const WeatherCard = (props) => {

    let img;
    switch (props.icon){
        case "Clouds": 
            img = cloudyNight
            break;

        case "Thunderstorm": 
            img = thunder;
            break;

        case "Drizzle": 
            img = drizzle;
            break;

        case "Rain": 
            img = rainy;
            break;

        case "Snow": 
            img = snow;
            break;

        case "Clear":
            img = clearDay;
            break;

        default: 
            img = clearDay;
            break;
    }

    return (
        <div className="weather__card">
            <h1>{props.place}</h1>
            <div className="weather__info">
                <div className="weather__icon">
                    <img src={img} alt="" />
                </div>
                <p className="weather__description">{props.description}</p>
                <p className="weather__temp">{props.temp}°C</p>
                <p className="weather__feels">Ощущается как: {props.feelsLike}°C</p>
            </div>
        </div>
    );
}

export default WeatherCard;