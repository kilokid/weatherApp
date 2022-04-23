import SwitchImg from '../../services/SwitchImg';

import './weatherCard.scss';
import ErrorMessage from '../errorMessage/ErrorMessage';
import ErrorCoords from '../errorMessage/ErrorCoords';
import Spinner from '../spinner/Spinner';

const WeatherCard = (props) => {
  const errorMessage = props.error ? <ErrorMessage /> : null;
  const errorCoords = props.coords ? <ErrorCoords /> : null;
  const spinner = props.loading ? <Spinner /> : null;
  const content = !(props.loading || props.error || errorCoords) ? (
    <View currentGeo={props.currentGeo} />
  ) : null;

  return (
    <a href="/" className={props.error ? 'weather__card weather__card-error' : 'weather__card'}>
      {errorCoords}
      {errorMessage}
      {spinner}
      {content}
    </a>
  );
};

const View = ({ currentGeo }) => {
  const { place, temp, description, feelsLike, icon } = currentGeo;

  const newDescription = (str) => {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
  };

  let img = SwitchImg(icon);

  return (
    <>
      <h1 className="weather__city">{place}</h1>
      <div className="weather__info">
        <div className="weather__temp-info">
          <img className="weather__icon" src={img} alt="Weather icon" />
          <p className="weather__temp">{temp}°C</p>
        </div>
        <p className="weather__description">{newDescription(description)}</p>
        <p className="weather__feels">Ощущается как: {feelsLike}°C</p>
      </div>
    </>
  );
};

export default WeatherCard;
