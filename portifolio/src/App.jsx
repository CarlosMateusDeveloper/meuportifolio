import React from 'react'
import './App.css'
import Navbar from './componentes/navbar/Navbar.jsx'
import Maindiv from './componentes/maindiv/Maindiv.jsx'
import About from './componentes/about/about.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
 
  return (
    <>
      <Navbar />
      <Maindiv />
      <About />
    </>
  )
}

export default App
