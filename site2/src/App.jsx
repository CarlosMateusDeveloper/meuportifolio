import React from 'react'
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './/components/navbar/navbar.jsx'
import MainContainer from './components/maincontainer/maincontainer.jsx'
import './App.css'
import About from './components/about/about.jsx';
import Services from './components/servic/services.jsx';
import Projects from './components/projects/projects.jsx';

function App() {

  return (
    <>
    <Navbar />
    <MainContainer />
    <About />
    <Services />
    <Projects />
    </>
  )
}

export default App
