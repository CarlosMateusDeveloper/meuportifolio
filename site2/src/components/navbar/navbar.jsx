import './navbar.css'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-transparent">
        <div className="container-fluid d-flex">
            <a className="navbar-brand" href="#"> <img src="../../assets/favicon.png" alt="" /> Construction</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link" href="#">Home</a>
                    <a className="nav-link" href="#">About us</a>
                    <a className="nav-link" href="#">Services</a>
                    <a className="nav-link" >Projects</a>
                    <a className="nav-link" >Contact Us</a>
                </div>
            </div>
        </div>
    </nav>
  )
}