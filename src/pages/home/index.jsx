import React, { useEffect, useState } from 'react';
import { Button } from 'antd-mobile';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

const Home = () => {
  const [passData, setPassData] = useState('');
  const location = useLocation();

  const [dataSource, setDataSource] = useState([]);
  const [stocks, setStocks] = useState([
    { zqdm: '000001', zqmc: '中信建投' },
    { zqdm: '600000', zqmc: '浦发银行' },
    { zqdm: '555002', zqmc: '阿里巴巴' },
    { zqdm: '349011', zqmc: '腾讯游戏' },
    { zqdm: '672100', zqmc: '苹果公司' },
  ]);

  const navigate = useNavigate();

  const clickJump = () => {
    navigate('/home/detail?id=111', {
      state: '跳转到详情页面传递的数据，testdata',
    });
  };

  const formatData = () => {
    // 定义一个基础的标签列表
    const rows = [
      { label: '标的分类', className: 'row-class' },
      {
        label: '标题1',
        className: 'row-class',
        type: 'title',
        hasSelect: true,
      },
      { label: '概念板块', className: 'row-class' },
      { label: '行业偏离度', className: 'row-class' },
      { label: '行业拥挤度', className: 'row-class' },
      { label: '信息提醒', className: 'row-class' },
      { label: '标题2', className: 'row-class', type: 'title' },
      { label: '风险提示', className: 'row-class' },
    ];

    const generateDemoStructure = (stocks) => {
      // 获取stocks的长度，用于确定col的数量
      const colLength = stocks.length;
      // 初始化demo数组
      const demo = [];
      // 遍历标签列表，为每个标签创建一个对象，并填充对应数量的col
      rows.forEach((row) => {
        // 创建一个新对象，并设置label属性
        const newObj = {
          className: row.className,
          col0: row.hasSelect ? <div>select</div> : row.label,
        };
        // 根据colLength动态添加col属性
        for (let i = 1; i <= colLength; i++) {
          if (row.type === 'title') {
            newObj[`col${i}`] = '';
          } else {
            // 这里使用简单的字符串格式化作为示例内容，实际应用中可以根据需求定制生成逻辑
            newObj[`col${i}`] = `${row.label}--${stocks[i - 1].zqmc}`;
          }
        }
        // 将新对象添加到demo数组中
        demo.push(newObj);
      });
      return demo;
    };

    const res = generateDemoStructure(stocks);
    console.log('res', res);
    setDataSource(res);
  };

  useEffect(() => {
    setPassData(location.state);
  }, [location]);

  useEffect(() => {
    formatData();
  }, [stocks]);

  const deleletCol = () => {
    const temp = [...stocks];
    temp.splice(1, 1);
    console.log('deleletCol', temp);
    setStocks(temp);
  };

  return (
    <div>
      <h1>这里是HOME页</h1>
      <div>{`这里是HOME获取到的数据： ${passData}`}</div>
      <Button onClick={clickJump}>跳转到详情</Button>
      <Button onClick={deleletCol}>删除一列</Button>
    </div>
  );
};

export default Home;
