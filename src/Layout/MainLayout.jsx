import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const MainLayout = () => {
  return (
    <>
      <Navbar/> 
      <div>
        <Outlet />
        <ToastContainer/>
      </div>
    </>
  );
}

export default MainLayout;

