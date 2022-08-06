import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import About from './about';

const Index = () => {
  return (
    <div>
      {/* <h1>这里是入口 index</h1> */}
      <Routes>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />}>
        </Route>
        <Route path='detail' element={<div>详情页面</div>} />
      </Routes>
    </div>
  );
};

export default Index;
