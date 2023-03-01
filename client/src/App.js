import React from 'react';
import Search from './components/Search.jsx';
import './App.scss';

const App = () => {
  return (
    <div>
      <div className='title'>
      Weather World
      </div>
      <Search/>
    </div>
  )
}

export default App;