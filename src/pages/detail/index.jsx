import React from 'react'
import { Routes, Route, useNavigate, useLocation, useParams, useSearchParams } from 'react-router-dom';

const Detail = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const params = useParams();

  console.log(5555, 'Detail: ', location, params, searchParams.get('id'));

  return (
    <div>
      <h4>Detail</h4>
      <p>{`这是获取的传递数据： ${location.state}`}</p>
    </div>
  )
}

export default Detail;
