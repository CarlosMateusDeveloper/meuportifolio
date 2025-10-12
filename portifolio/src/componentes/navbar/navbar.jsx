import './navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg"> 
      <div className="container-fluid d-flex justify-content-end px-5">
        <a className="navbar-brand px-5" href="#">Mateus <span className='last-name'>Gonçalves</span> </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
           <div className="navbar-nav">
             <a className="nav-link" aria-current="page" href="#">Chat</a>
             <a className="nav-link" href="#">Sobre mim</a>
             <a className="nav-link" href="#">Projetos</a>
             <a className="nav-link" href="#">Contato</a>
           </div>
         </div>
      </div>
</nav>)
}