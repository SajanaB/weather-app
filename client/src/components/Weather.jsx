import React, {useState, useEffect} from 'react';
import './Weather.scss';
import Mood from './Mood.jsx';
import SoundP from './Sound.jsx';
import { WiSunrise, WiSunset, WiHumidity, WiWindy } from "react-icons/wi";



const Weather = (weatherInfoMain) => {
  const [main, setMain] = useState('');

  let riseSec = weatherInfoMain.weatherInfoMain.sunrise;
  let riseDate = new Date(riseSec * 1000);
  let riseTimeStr = `${riseDate.getHours()}:${riseDate.getMinutes()}`;

  let setSec = weatherInfoMain.weatherInfoMain.sunset;
  let setDate = new Date(setSec * 1000);
  let setTimeStr = `${setDate.getHours()}:${setDate.getMinutes()}`;

  let temp = weatherInfoMain.weatherInfoMain.tempInFarenheit

  return (
    <>
  <div className='mood-placement'>
  <Mood main={weatherInfoMain.weatherInfoMain.main}/>
  </div>
  <br/>
    <article className='tempEl'>

      <div className='mood'>
        <div>
      <SoundP className='sound-button'/>
      </div>
      {main}
      </div>

      <div className='temp'>
        <div className='faren'>
          <span>{ temp }&deg;F</span>
        </div>

        <div className='main-name-country'>
          <div className='main'>{ weatherInfoMain.weatherInfoMain.main }</div>
          <div className='name-country'> { weatherInfoMain.weatherInfoMain.name }, { weatherInfoMain.weatherInfoMain.country }</div>
        </div>
      </div>

      <div className='date'>{new Date().toLocaleString()}</div>

      <div className='others'>
        <div className='sunrise'>
          <div className='four-part-section'>
              <i className='react-icons'>{WiSunrise()}</i>
            <p className='leftest'>
              { riseTimeStr } AM <br/>
               Sunrise
              </p>
          </div>

          <div className='four-part-section'>
              <i>{ WiSunset() }</i>
            <p className='leftest'>
              { setTimeStr } PM<br/>
               Sunset
              </p>
          </div>
          </div>

          <div className='othersW'>
            <div className='four-part-section'>
              <i>{ WiHumidity() }</i>
            <p className='leftest'>
              {weatherInfoMain.weatherInfoMain.humidity } <br/>
               Humidity
              </p>
          </div>

          <div className='four-part-section'>
              <i>{ WiWindy() }</i>
            <p className='leftest'>
              { weatherInfoMain.weatherInfoMain.windSpeed } <br/>
               Wind Speed
              </p>
          </div>
        </div>
      </div>
    </article>
    </>
  )
}
export default Weather;