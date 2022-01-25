import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
    const isAuth=window.sessionStorage.getItem('Token')
  return isAuth ? <Outlet/>:<Navigate to="/auth"/>;
}

export default ProtectedRoute;
