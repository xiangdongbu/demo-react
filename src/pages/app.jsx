import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { TabBar, NavBar } from 'antd-mobile';
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons';
import './app.less';

function Home() {
  return <div>首页</div>;
}

function Todo() {
  return <div>我的待办</div>;
}

function Message() {
  return <div>我的消息</div>;
}

function PersonalCenter() {
  return <div>个人中心</div>;
}

const getDefault = (arr, location) => {
  let res = '0';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].path === location.pathname) {
      res = arr[i].key;
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
    title: '我的待办',
    icon: <UnorderedListOutline />,
    path: '/todo',
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

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState(getDefault(tabs, location));

  const setRouteActive = (value) => {
    setActive(value);
    navigate(tabs[value].path);
  };

  return (
    <div className='homeWrap'>
      <NavBar back={null} style={{ '--border-bottom': '1px solid #eee' }}>
        {tabs[active].title}
      </NavBar>
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/todo' element={<Todo />}></Route>
          <Route path='/message' element={<Message />}></Route>
          <Route path='/me' element={<PersonalCenter />}></Route>
          <Route path='*' element={<Home />}></Route>
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

export default App;
