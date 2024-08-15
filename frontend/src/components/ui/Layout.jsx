// components/ui/Layout.jsx
import React from 'react';
import Navbar from './navbar';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* This will render the child routes */}
    </div>
  );
}

export default Layout;
