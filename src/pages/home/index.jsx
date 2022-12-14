import React, { useEffect, useState } from 'react'
import { Button } from 'antd-mobile';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

const Home = () => {
  const [passData, setPassData] = useState('');
  const location = useLocation();

  const navigate = useNavigate();

  const clickJump = () => {
    navigate('/home/detail?id=111', {
      state: '跳转到详情页面传递的数据，testdata'
    });
  };

  useEffect(() => {
    setPassData(location.state);
  }, [location])

  return (
    <div>
      <h1>这里是HOME页</h1>
      <div>{`这里是HOME获取到的数据： ${passData}`}</div>
      <Button onClick={clickJump}>跳转到详情</Button>
    </div>
  )
}

export default Home;
