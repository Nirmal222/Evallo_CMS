import React from 'react'
import { Route, Routes } from "react-router-dom";
// Pages 
import Home from '../pages/home';
import { SignIn, SignUp } from '../pages/validation';

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn/>} />
    </Routes>
  )
}

export default MainRoutes