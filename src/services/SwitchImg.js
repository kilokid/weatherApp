import cloudyDay from '../resources/img/cloudyDay.svg';
import cloudyNight from '../resources/img/cloudyNight.svg';
import thunder from '../resources/img/thunder.svg';
import drizzle from '../resources/img/rainy-6.svg';
import rainy from '../resources/img/rainy.svg';
import snow from '../resources/img/snowy.svg';
import clearDay from '../resources/img/day.svg';

const SwitchImg = (icon) => {
    let img;

    switch (icon){
        case "Clouds": 
            img = cloudyNight;
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

    return img;
}


export default SwitchImg