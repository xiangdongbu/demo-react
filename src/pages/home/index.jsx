import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

const Home = () => {
  const [passData, setPassData] = useState('');
  const location = useLocation();

  useEffect(() => {
    console.log(1111, 'home ', location);
    setPassData(location.state);
  }, [])

  return (
    <div>
      <h1>这里是HOME页</h1>
      <div>{`这里是HOME获取到的数据： ${passData}`}</div>
    </div>
  )
}

export default Home;
