import React from 'react';
import Video from '.././nebula-blue-49252.mp4';
import './PopText.scss';

const PopText = ({closeModal}) => {
  return (
    <div className='pop-container'>
      <div >
        <span className='pop-text'>Take 30 seconds to find your weather within and reset if you need</span>
      <video autoPlay loop muted id='video'>
        <source src={Video} type='video/mp4'/>
      </video>
      <button className='close-pop'onClick={closeModal}>x</button>
      </div>
    </div>
  ) ;
}
export default PopText;