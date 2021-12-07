import React from 'react';
import { useState, useEffect } from "react";
import "./WeatherGuide.css"




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
        resetSearch();        
    }

    const resetSearch = ()=>{
        setPlaceHolder("");
    }
  

    return (
        <div className="weatherguide-bg">

            <h1 className="mTitle">NOW LEAVE</h1>
            <p className="call">With all said and done it is time to go out and make something for yourself. Make an image, do whatever but go do it! To get you going you
            can search for a city below.</p>
            {city.name !== undefined &&

            <div className="wStation">
                <p>You will make your next image in {city.name} where the temperature is {city.main.temp} degrees. Even tough it feels like {city.main.feels_like} degrees.</p>
                <p>Today it's gonna be {city.weather[0].main.toLowerCase()} or to be precise, {city.weather[0].description}</p>
                <p>Wind speed in {city.name} is {city.wind.speed} an the humidity is currently {city.main.humidity}%</p>
                <h4>With that said... I hope you make an image today!</h4>
            </div>
            }     
            <form onSubmit={handleSubmit} className="form">
                <label>
                    <input type="text"  onChange={(e) => setPlaceHolder(e.target.value)} value={placeHolder} className="form-control" />
                </label>
                <button className="btn btn-warning">Get a new city!</button>  
            </form>
           
        </div>

    )

};


export default WeatherGuide;