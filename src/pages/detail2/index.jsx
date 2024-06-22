import React from 'react';
import * as echarts from 'echarts';
import { NavBar, Space, Toast } from 'antd-mobile';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

const Detail2 = () => {
  const nav = useNavigate();

  return (
    <div>
      <NavBar onBack={() => nav(-1)}>详情</NavBar>
      <div>二级页面</div>
    </div>
  );
};

export default Detail2;
