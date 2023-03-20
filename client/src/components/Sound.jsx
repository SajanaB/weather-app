import React, { useState, useEffect } from 'react';
import Sound from '../audioClip/Audio2.mp3';
import { Howl, Howler } from 'howler';
import PopText from './PopText.jsx';
import './Sound.scss';

const SoundP = () => {
  let audioP = new Audio(Sound);
  const [buttonpop, setButtonpop] = useState(false);

  const closeModal = () => {
    return setButtonpop(false);
  }

  let isPlaying = false;
  const weatherWithinClick = () =>{
    if (isPlaying) {
      audioP.play();
    setButtonpop(true);
    } else {
      audioP.pause();
    }
    isPlaying = !isPlaying;
  }

  // const soundPause = () => {
  //   audioP.pause();
  // }
  return (
    <div>
      <button className='sound-button'onClick={weatherWithinClick}
      >weather within
      </button>
      {buttonpop && <PopText closeModal={closeModal}/>}
      {/* <div>
      <button className='sound-button' onClick={soundPause}>pause</button>
    </div> */}
    <br/>
    </div>
  )
}
export default SoundP;