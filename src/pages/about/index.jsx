import React from 'react'
import { Routes, Route, Link, Outlet, useNavigate } from "react-router-dom";
import { Button } from 'antd-mobile';

const About = () => {
  const navigate = useNavigate();

  const clickJump = () => {
    navigate('/about/detail', {
      state: '详情页面'
    });
  };

  return (
    <div>
      <h2>这里是about</h2>
      <Button onClick={clickJump}>跳转到详情</Button>
    </div>
  )
}

export default About;