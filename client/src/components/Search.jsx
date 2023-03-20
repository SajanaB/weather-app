import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Weather from './Weather.jsx';
import './Search.scss';

const kelvinToFaren = (temp) => {
  let start = (temp - 273.15) * (9/5) + 32;
  const splitted = start.toString().split('.');
    return Number(splitted[0]);
}

const Search = () => {
  const [searchValue, setSearchvalue] = useState('Austin');
  const [weatherInfoMain, setWeatherInfoMain] = useState({});

  const getWeather = async (cityName) => {
    axios.get(`http://localhost:3000/weather?q=${searchValue}`)
      .then(res => {
      console.log(res.data)
      const { temp, feels_like, humidity, pressure } = res.data.main;
      const { main  } = res.data.weather[0];
      const { name } = res.data;
      const { speed: windSpeed } = res.data.wind;
      const { country, sunset, sunrise } = res.data.sys;
        console.log(feels_like)

    let tempInF = kelvinToFaren(temp);
    let feels_likeInF = kelvinToFaren(feels_like);

      const weatherInfo = {
        tempInF,
        feels_likeInF,
        humidity,
        pressure,
        main,
        name,
        windSpeed,
        country,
        sunset,
        sunrise
      }
      setWeatherInfoMain(weatherInfo);
    })
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <>
    <div className='wrapper'>
      <div className='search'>
        <input type='search' id='search' className='searchVal' value={searchValue} onChange={(e) => setSearchvalue(e.target.value)}/>
        <button className='searchButton' type='button'onClick={getWeather}>Search</button>
      </div>
    </div>
    <Weather weatherInfoMain={weatherInfoMain}/>
    <br/>

    </>
  )
}
export default Search;