import './Maindiv.css'
import perfil from '../../assets/fotoportifolio.jpg'
export default function Maindiv() {
  return ( 
  <section className="home d-flex flex-row align-itens-center justify-content-center container-fluid px-5" id="home">       
        <div className="home-content d-fex flex-column align-itens-center justify-content-center mt-5  px-5">
         <h1 className='text-end'><span>Mateus Gonçalves</span> </h1>  
         <h3 className="typing-text text-end">Desenvolvedor de Software</h3>
         <div className="social-icons d-flex justify-content-end gap-3 fs-3">
            <a className=' d-inline-flex justify-content-center align-items-center border rounded-circle border-danger' href="https://www.linkedin.com/in/carlos-gonçalves-b38701211/" target="_blank"><i class="bi bi-linkedin text-danger w-50"></i></a>
            <a className='d-inline-flex justify-content-center align-items-center border rounded-circle border-danger ' href="https://github.com/CarlosMateusDeveloper" target="_blank"><i class="bi bi-github text-danger"></i></a>
            <a className='d-inline-flex justify-content-center align-items-center border rounded-circle border-danger ' href="https://www.instagram.com/dev_carlos_mateus" target="_blank"><i class="bi bi-instagram text-danger btn-hover"></i></a>
          </  div> 
        </div>
        <div className="home-img me-5 pe-5 mt-4"> <img className='rounded-circle' src={perfil} alt=""/></div>
      </section>)
}