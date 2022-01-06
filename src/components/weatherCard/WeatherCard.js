import cloudyDay from '../../resources/img/cloudyDay.svg';

const WeatherCard = (props) => {
    console.log(cloudyDay)
    return (
        <div className="weather__card">
            <h1>{props.place}</h1>
            <div className="weather__info">
                <div className="weather__icon">
                    <img src={cloudyDay} alt="" />
                </div>
                <span className="weather__temp">{props.temp} °C</span>
            </div>
        </div>
    );
}

export default WeatherCard;