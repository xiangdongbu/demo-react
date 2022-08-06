import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './main';
import Detail2 from './detail2';

const App = () => {
  return (
    <div className='appBox'>
      <Routes>
        <Route path='/*' element={<Main />} />
        <Route path='/detail2' element={<Detail2 />} />
      </Routes>
    </div>
  );
};

export default App;
