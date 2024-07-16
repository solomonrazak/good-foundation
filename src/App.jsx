import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { RouterProvider } from 'react-router-dom'
import router from './routes'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div className=''>
    <NavBar />
    <RouterProvider router={router}/>
    <Footer />
   </div>
  )
}

export default App;
