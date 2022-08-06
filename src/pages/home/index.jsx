import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Badge, TabBar } from 'antd-mobile';

const Home = () => {
  const location = useLocation();

  const [passData, setPassData] = useState('');

  useEffect(() => {
    console.log('HOME init ', location);
    setPassData(location.state);
  }, [location]);

  return (
    <div>
      <h1>这里是Home</h1>
      <div>
        <span>{`这是传递的参数: ${passData}`}</span>
      </div>
    </div>
  );
};

export default Home;
