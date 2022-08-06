import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/app';
import Detail2 from './pages/detail2';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from 'react-router-dom';

const Root = () => (
  <Routes>
    <Route path='/*' element={<App />} />
    <Route path='/detail2' element={<Detail2 />} />
  </Routes>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Root />
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
