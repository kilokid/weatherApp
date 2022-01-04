class WeatherService {
    #apiKey = '312b3e4a5c0f7918f5b3787c71cdc370';

    // GetUserLocation = async () => {
        // navigator.geolocation.getCurrentPosition((position) => {
        //     this.getResourse(position.coords.latitude, position.coords.longitude)
        //         .then(res => {
        //             const temp = this.#transformWeather(res);
        //             return temp;
        //         });
        // });
    // }
        
    getResourse = async (lat, lon) => {
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.#apiKey}&units=metric`);

        if (!res.ok) {
            throw new Error(`Произошла ошибка при получении погоды, статус ошибки: ${res.status}`)
        }

        return await res.json();
    }

    #transformWeather = (weather) => {
        return {
            temp: Math.ceil(weather.main.temp),
        };
    }
}

export default WeatherService;