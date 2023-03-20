import React from 'react';
import Search from './components/Search.jsx';
import Video from '../src/rain.mp4';
import './App.scss';

const App = () => {
  return (
    <div className='app-container'>
      <video autoPlay loop muted id='video'>
        <source src={Video} type='video/mp4'/>
      </video>
      <div className='title'>
      Weather World
      </div>
      <Search/>
    </div>
  )
}

export default App;