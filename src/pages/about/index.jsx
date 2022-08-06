import React from 'react'
import { Routes, Route, Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h2>这里是about</h2>
      <nav>
        <Link to="/">跳转到Home</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default About;