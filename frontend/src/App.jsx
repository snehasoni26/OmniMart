import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './globals.css'
import { ThreeDCardDemo } from './components/test/3d-card-demo'
import { TypewriterEffectDemo } from './components/test/typewriter-effect-demo'
import HeroSection from './components/ui/hero-section'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import LoginSignupForm from './components/ui/LoginSignupForm'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <TypewriterEffectDemo/>,
  },
  {
    path:"/manvi",
    element:<div>HIi</div>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <div className='h-full w-full'>
      <TypewriterEffectDemo/>
   </div>
      </>
  )
}

export default App
