import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function Protect() {
    const isAuth=window.sessionStorage.getItem('Token')
  return isAuth ? <Navigate to="/"/>:<Outlet/>;
}

export default Protect;
