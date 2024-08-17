import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './admin/sidebar' 
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
  return (
    <div className="d-flex" style={{ minHeight: '100vh' }}>

      <Sidebar />
      <main className="col-10 p-3 bg-light">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
