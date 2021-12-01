import { useState, useEffect } from "react";

const WeatherGuide = () => {

    const [city, setCity] = useState([]);
    const [newCity, setNewCity] = useState("Eslöv");
    const [placeHolder, setPlaceHolder] = useState([""])

    useEffect(()=> {
        const cityName = newCity;
        async function getWeather() {
            const res = await fetch  (`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=c99451cb5566760aea5851ed0e24d5f4`);
            const data = await res.json();

            console.log(data);

            setCity(data);
        }

        getWeather();
    }, [newCity]);


    const handleSubmit = (e) => {
        e.preventDefault();
        const city = String(e.target[0].value);
        setNewCity(city);        
    }

    const resetSearch = ()=>{
        setPlaceHolder("");
    }
  

    return (
        <div>
            {city.name != undefined &&
            <div>
                <h2>City: {city.name}</h2>
                <p>Temp: {city.main.temp}</p>
                <p>Feels like: {city.main.feels_like}</p>
                <p>Humidity: {city.main.humidity}</p>
                <p>Description: {city.weather[0].main}</p>
                <p>Subdescription: {city.weather[0].description}</p>
                <p>Windspeed: {city.wind.speed}</p>
            </div>
            }     
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Enter City </span>
                    <input type="text"  onChange={(e) => setPlaceHolder(e.target.value)} value={placeHolder} />
                </label>
                <button>Get a new city!</button>  
            </form>
           
        </div>

    )

};


export default WeatherGuide;