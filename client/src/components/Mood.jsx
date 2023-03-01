import React, {useState, useEffect} from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
import './Mood.scss';

const Mood = (main) => {
  console.log(main)
  const [ mood, setMood ] = useState({});
  const defaults = {
    icon: ['CLEAR_DAY', 'CLOUDY', 'PARTLY_CLOUDY_DAY', 'PARTLY_CLOUDY_NIGHT', 'CLEAR_NIGHT', 'RAIN', 'SLEET', 'SNOW', 'WIND', 'FOG' ],
    color: 'skyblue',
    size: 250,
    animate: true
  };
  console.log(main === 'Haze')
  if (main.main === 'Haze' || main.main === 'Clouds') {
    return (
    <ReactAnimatedWeather className='icons' icon={defaults.icon[1]}
            color={defaults.color}
            size={defaults.size}
            animate={defaults.animate} />
    )
  }
  else if (main.main === 'Clear') {
    return (
      <ReactAnimatedWeather className='icons' icon={defaults.icon[0]}
        color={defaults.color}
        size={defaults.size}
        animate={defaults.animate} />
      )
    }
  else if (main.main === 'Rain') {
      return (
        <ReactAnimatedWeather className='icons' icon={defaults.icon[5]}
          color={defaults.color}
          size={defaults.size}
          animate={defaults.animate} />
        )
      }
   else if (main.main === 'Mist') {
      return (
        <ReactAnimatedWeather className='icons' icon={defaults.icon[9]}
          color={defaults.color}
          size={defaults.size}
          animate={defaults.animate} />
        )
      }
    else if (main.main === 'Snow') {
      return (
        <ReactAnimatedWeather className='icons' icon={defaults.icon[9]}
          color={defaults.color}
          size={defaults.size}
          animate={defaults.animate} />
        )
      }
   else {
    return (
      <ReactAnimatedWeather className='icons' icon={defaults.icon[7]}
        color={defaults.color}
        size={defaults.size}
        animate={defaults.animate} />
      )
  }
}
export default Mood;