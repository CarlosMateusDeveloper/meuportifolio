import React from 'react'
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './/components/navbar/navbar.jsx'
import MainContainer from './components/maincontainer/maincontainer.jsx'
import './App.css'
import About from './components/about/about.jsx';
import Services from './components/servic/services.jsx';
import Projects from './components/projects/projects.jsx';

function App() {

  return (
    <>
    <div className='principal'>
      <Navbar />
      <MainContainer />
    </div>
    
    <About />
    <Services />
    <Projects />
    </>
  )
}

export default App
