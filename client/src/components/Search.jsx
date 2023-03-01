import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Weather from './Weather.jsx';
import './Search.scss';

const Search = () => {
  const [searchValue, setSearchvalue] = useState('Austin');
  const [weatherInfoMain, setWeatherInfoMain] = useState({});
  console.log('Inside Temperature')

  const getWeather = async (cityName, imperial) => {
    axios.get(`http://localhost:3000/weather?q=${searchValue}&units=${imperial}`)
      .then(res => {
      const { temp, feels_like, humidity, pressure } = res.data.main;
      const { main  } = res.data.weather[0];
      const { name } = res.data;
      const { speed: windSpeed } = res.data.wind;
      const { country, sunset, sunrise } = res.data.sys;

      const tempInFarenheit = (temp - 273.15) * (9/5) + 32;

      const weatherInfo = {
        tempInFarenheit,
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
    <br/>
   <Weather weatherInfoMain={weatherInfoMain}/>
    </>
  )
}
export default Search;