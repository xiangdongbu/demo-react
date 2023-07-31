import React, { useState } from 'react';
import classNames from 'classnames';
import { Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';
import { Button, SideBar, Badge } from 'antd-mobile';
import './index.less';

// 1111
const About = () => {
  const tabs = [
    {
      key: 'key1',
      title: '选项一',
      badge: Badge.dot,
    },
    {
      key: 'key2',
      title: '选项二',
      badge: '5',
    },
    {
      key: 'key3',
      title: '选项三',
      badge: '99+',
      disabled: true,
    },
  ];

  const [activeKey, setActiveKey] = useState('key1');

  return (
    <div className='aboutWrap'>
      <SideBar onChange={setActiveKey}>
        {tabs.map((item) => (
          <SideBar.Item key={item.key} title={item.title} badge={item.badge} />
        ))}
      </SideBar>
      <div className='main'>
        <div
          className={classNames('content', activeKey === 'key1' && 'active')}
        >
          页面 1
        </div>
        <div
          className={classNames('content', activeKey === 'key2' && 'active')}
        >
          页面 2
        </div>
        <div
          className={classNames('content', activeKey === 'key3' && 'active')}
        >
          页面 3
        </div>
      </div>
    </div>
  );
};

export default About;
