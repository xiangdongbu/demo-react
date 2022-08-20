import React from 'react';
import { Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';
import { Button } from 'antd-mobile';

const Meassgae = () => {
  const nav = useNavigate();
  const clickJump = () => {
    nav('/detail2');
  };

  return (
    <div>
      <h3>message</h3>
      <Button onClick={clickJump}>跳转到详情2</Button>
    </div>
  );
};

export default Meassgae;
