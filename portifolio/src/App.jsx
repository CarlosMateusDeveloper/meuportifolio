import React from 'react'
import './App.css'
import Navbar from './componentes/navbar/Navbar.jsx'
import Maindiv from './componentes/maindiv/Maindiv.jsx'
import About from './componentes/about/about.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Projects from './componentes/projetcts/projects.JSX'
import Contact from './componentes/contact/contact.jsx'
import Footer from './componentes/footer/footer.jsx'


function App() {
 
  return (
    <>
      <Navbar />
      <Maindiv/>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
