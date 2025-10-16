import './navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg"> 
      <div className="container-fluid px-5 d-flex justify-content-between align-items-center">
        <a className="navbar-brand px-5" href="#home">Mateus <span className='last-name'>Gonçalves</span> </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
           <div className="navbar-nav d-flex gap-3 ms-auto me-5">
             <Link className="nav-link pt-0" aria-current="page"  to="/ia"><img src="/ai-svgrepo-com.svg" alt="" /></Link>
             <a className="nav-link" href="#about">Sobre mim</a>
             <a className="nav-link" href="#projects">Projetos</a>
             <a className="nav-link" href="#contact">Contato</a>
           </div>
         </div>
      </div>
</nav>)
}