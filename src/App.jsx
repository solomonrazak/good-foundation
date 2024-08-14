import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { RouterProvider } from 'react-router-dom'

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Event from './pages/Event'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="overflow-x-hidden">
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/event" element={<Event />}/>
    </Routes>
    <Footer />
   </div>
  )
}

export default App;
