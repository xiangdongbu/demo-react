import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { TabBar, NavBar } from 'antd-mobile';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './mainSlice';
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons';
import './index.less';

import Home from '../home';
import About from '../about';
import Detail from '../detail';
import Meassgae from '../message';

function PersonalCenter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.main.value);
  const add = () => {
    dispatch(increment());
  };
  const sub = () => {
    dispatch(decrement());
  };
  const add10 = () => {
    dispatch(incrementByAmount(10));
  };
  return (
    <div>
      <h1>个人中心 {count}</h1>
      <button onClick={add}>增加</button>
      <button onClick={sub}>减少</button>
      <button onClick={add10}>增加10</button>
    </div>
  );
}

// 测试文字
const getDefault = (arr, location) => {
  let res = '0';
  for (let i = 0; i < arr.length; i++) {
    if (location.pathname.indexOf(arr[i].path) > -1) {
      res = arr[i].key;
      break;
    }
  }
  return res;
};

const tabs = [
  {
    key: '0',
    title: '首页',
    icon: <AppOutline />,
    path: '/home',
  },
  {
    key: '1',
    title: '关于',
    icon: <UnorderedListOutline />,
    path: '/about',
  },
  {
    key: '2',
    title: '我的消息',
    icon: <MessageOutline />,
    path: '/message',
  },
  {
    key: '3',
    title: '个人中心',
    icon: <UserOutline />,
    path: '/me',
  },
];

const Main = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState(getDefault(tabs, location));

  const [title, setTitle] = useState('');

  const setRouteActive = (value) => {
    setActive(value);
    navigate(tabs[value].path, {
      replace: true,
      state: tabs[value].title,
    });
  };

  useEffect(() => {
    const index = getDefault(tabs, location);
    setTitle(tabs[index].title);
    console.log(111111, location);
  }, [location]);

  const backA = () => {
    navigate(-1);
  };

  return (
    <div className='homeWrap'>
      <NavBar
        back={location.pathname.indexOf('detail') === -1 && null}
        onBack={backA}
        style={{ '--border-bottom': '1px solid #eee' }}
      >
        {title}
      </NavBar>
      <div className='content'>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='home/detail' element={<Detail />} />
            <Route path='message' element={<Meassgae />} />
            <Route path='me' element={<PersonalCenter />} />
            <Route path='*' element={<div>404</div>} />
          </Route>
        </Routes>
      </div>
      <TabBar activeKey={active} onChange={setRouteActive}>
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  );
};

export default Main;
