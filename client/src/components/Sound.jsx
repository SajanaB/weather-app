import React, { useState, useEffect } from 'react';
import Sound from '../audioClip/Audio.mp3';
import { Howl, Howler } from 'howler';
import PopText from './PopText.jsx';
import './Sound.scss';

const audio = { sound: Sound, label: 'Close your eyes and find some light if you are feeling cloudy' };

const SoundP = () => {
  const sound = new Howl({
    src:[audio.sound],
    html5: true,
  })

  const weatherWithinClick = () =>{
    sound.play();
  }

  const soundPause = () => {
    sound.pause();
  }
  return (
    <div>
      <button className='sound-button'onClick={weatherWithinClick}
      >weather within
      </button>
      <div>
      <button className='sound-button' onClick={soundPause}>pause</button>
    </div>
    <br/>
    </div>
  )
  // return (
  //   <audio>
  //     <source src={Sound}/>
  //   </audio>
  // )
}
export default SoundP;