import './navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid px-5 mx-5">
            <a className="navbar-brand text-white ps-5" href="#"> <i class="ri-building-3-line text-danger"></i> Construction</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto gap-5">
                    <a className="nav-link  " href="#">Home</a>
                    <a className="nav-link text-secondary" href="#">About us</a>
                    <a className="nav-link text-secondary" href="#">Services</a>
                    <a className="nav-link text-secondary" >Projects</a>
                    <a className="nav-link text-white" >Contact Us</a>
                </div>
            </div>
        </div>
    </nav>
  )
}