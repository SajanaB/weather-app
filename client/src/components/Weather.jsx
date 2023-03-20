import React, {useState, useEffect} from 'react';
import './Weather.scss';
import Mood from './Mood.jsx';
import SoundP from './Sound.jsx';
import { WiSunrise, WiSunset, WiHumidity, WiWindy } from "react-icons/wi";

const Weather = (weatherInfoMain) => {
  const [main, setMain] = useState('');
  let weather = weatherInfoMain.weatherInfoMain;
  let riseSec = weather.sunrise;
  let riseDate = new Date(riseSec * 1000);
  let riseTimeStr = `${riseDate.getHours()}:${riseDate.getMinutes()}`;

  let setSec = weather.sunset;
  let setDate = new Date(setSec * 1000);
  let setTimeStr = `${setDate.getHours()}:${setDate.getMinutes()}`;

  return (
    <>
  <div className='mood-placement'>
  <Mood main={weather.main}/>
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
          <span>{ weather.tempInF }&deg;F</span>
          <span className='feels-like'>Feels Like{ weather.tempInF }&deg;F</span>
        </div>

        <div className='main-name-country'>
          <div className='main'>{ weather.main }</div>
          <div className='name-country'> { weather.name }, { weather.country }</div>
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
              {weather.humidity } <br/>
               Humidity
              </p>
          </div>

          <div className='four-part-section'>
              <i>{ WiWindy() }</i>
            <p className='leftest'>
              { weather.windSpeed } <br/>
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