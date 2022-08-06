import React from 'react'
import { Routes, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>这里是Home</h2>
      <nav>
        <Link to="/about">跳转到About</Link>
        <Link to="/detail">跳转到detail</Link>
      </nav>
    </div>
  )
}

export default Home
