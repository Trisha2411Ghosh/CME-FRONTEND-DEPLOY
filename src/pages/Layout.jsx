import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './../components/user-view/Navbar';

function Layout() {
  return (
    <div>
        <div className="relative w-auto flex items-center justify-center h-auto bg-transparent">
          <Navbar />
        </div>

        <Outlet />
    </div>
  );
}

export default Layout;
