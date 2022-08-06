import React from 'react';
import { Button, Tabs } from 'antd-mobile';
import { HashRouter, Link, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import List1 from '../list1';
import List2 from '../list2';

const Query = () => {
  return (
    <div>
      <div>
          <Link className='link' to='/query/list1'>
            list1
          </Link>
      </div>
      <div>
          <Link className='link' to='/query/list2'>
            list2
          </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Query;
