import React, { useState, useEffect } from 'react';
import Sound from '../audioClip/Audio.mp3';
import { Howl, Howler } from 'howler';
import './Sound.scss';

const audio = { sound: Sound };
const SoundP = () => {
  const sound = new Howl({
    src:[audio.sound],
    html5: true,
  })
  return (
    <div>

      <button className='sound-button' onClick={() => sound.play()}>weather within</button>
      <div>
      <button className='sound-button' onClick={() => sound.pause()}>pause</button>
    </div>
    <br/>
    </div>
  )
}
export default SoundP;