import React from 'react';
import { Button, Tabs } from 'antd-mobile';
import {
  HashRouter,
  Link,
  Route,
  Routes,
  Navigate,
  Outlet,
} from 'react-router-dom';
import Buy from '../buy';
import Sell from '../sell';
import Query from '../query';
import List1 from '../list1';
import List2 from '../list2';

const Home = () => {
  return (
    <div>
      <HashRouter>
        <div>
          <Link className='link' to='/buy'>
            买入
          </Link>
          <Link className='link' to='/sell'>
            卖出
          </Link>
          <Link className='link' to='/query'>
            查询
          </Link>
        </div>
        <Routes>
          <Route path='/buy' element={<Buy />}></Route>
          <Route path='/sell/*' element={<Sell />}></Route>
          <Route path='/query' element={<Query />}>
            <Route index element={<List1 />}></Route>
            <Route path='list1' element={<List1 />}></Route>
            <Route path='list2' element={<List2 />}></Route>
          </Route>
          <Route path='*' element={<Navigate to='/buy' />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default Home;
