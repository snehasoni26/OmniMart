import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './globals.css'
import { ThreeDCardDemo } from './components/test/3d-card-demo'
import { TypewriterEffectDemo } from './components/test/typewriter-effect-demo'
import HeroSection from './components/ui/hero-section'
import LoginSignupForm from './components/ui/LoginSignupForm'
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='h-full w-full'>
      <Herosection></Herosection>
   </div>
      </>
  )
}

export default App
