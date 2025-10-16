import './navbar.css'
import { HashLink } from 'react-router-hash-link';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg"> 
      <div className="container-fluid px-5 d-flex justify-content-between align-items-center">
        <HashLink className="navbar-brand px-5" to="/#home">Mateus <span className='last-name'>Gonçalves</span></HashLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
           <div className="navbar-nav d-flex gap-3 ms-auto me-5">
             <HashLink className="nav-link pt-0" aria-current="page"  to="/ia"><img src="/ai-svgrepo-com.svg" alt="" /></HashLink>
             <HashLink className="nav-link" to="/#about">Sobre mim</HashLink>
             <HashLink className="nav-link" to="/#projects">Projetos</HashLink>
             <HashLink className="nav-link" to="/#contact">Contato</HashLink>
           </div>
         </div>
      </div>
</nav>)
}