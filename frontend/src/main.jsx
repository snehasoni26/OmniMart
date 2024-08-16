import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { TypewriterEffectDemo } from './components/test/typewriter-effect-demo.jsx';
import HeroSection from './components/ui/hero-section.jsx';
import LoginSignupForm from './components/ui/LoginSignupForm.jsx';
import StoreLocator from './components/ui/store-locator.jsx';
import UserProfile from './components/ui/UserProfile.jsx';
import Navbar from './components/ui/navbar.jsx';
import Layout from './components/ui/Layout.jsx';
import Product from './components/ui/product.jsx';
import Dashboard from './components/ui/dashboard.jsx';
import Wishlist from './components/ui/Wishlist.jsx';
import PaymentPortal from './components/ui/payment-gateway.jsx';
import StoreList from './components/ui/store-list.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,  // Wrap these routes with the Layout component
    children: [
      {
        path: "/",
        element: <TypewriterEffectDemo />,
      },
      {
        path: "/signup",
        element: <LoginSignupForm />
      },
      {
        path: "/location",
        element: <StoreLocator />
      },
      {
        path: "/profile",
        element: <UserProfile />
      },
      {
        path: "/product",
        element: <Product/>
      },
      {
        path: "/dashboard",
        element: <Dashboard/>
      },
      {
        path: "/wishlist",
        element: <Wishlist/>
      },
      {
        path: "/payment",
        element: <PaymentPortal/>
      },
      {
        path: "/store-list",
        element: <StoreList/>
      },
      
    ],
  },
  // Add other routes that should not have the Navbar here
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);