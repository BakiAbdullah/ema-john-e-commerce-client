import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
    {/* Common HEADER */}
      <Header></Header> 
      
    {/* Changeable route in Outlet */}
      <Outlet></Outlet>
    </div>
  );
};

export default Home;