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
const router = createBrowserRouter([
  {
    path: "/",
    element:<TypewriterEffectDemo/>  },
  {
    path:"/login",
    element:<LoginSignupForm/>
  },
  {
    path:"/location",
    element:<StoreLocator/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);