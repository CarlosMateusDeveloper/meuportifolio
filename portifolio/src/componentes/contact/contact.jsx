import perfil from '../../assets/fotoportifolio.jpg'
import './contact.css'
export default function Contact() {
    return (
        <section className="contact d-flex flex-column justify-content-center align-itens-center" id='contact'>
            <h1 className='text-center text-white pt-5'>Contate-me</h1>
            <div className='d-flex flex-row justify-content-center align-items-center gap-5'>
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-md-6 "> 
                        <div className='card-contact text-white rounded-4   d-flex flex-column align-items-center justify-content-center'>
                            <i class="bi bi-geo-alt-fill"></i>
                            <h3>Localização</h3>
                            <p>Nisia Floresta - RN</p> 
                        </div>           
                    </div>
                    <div className="col-12 col-md-6 ">
                        <div className='card-contact text-white rounded-4  d-flex flex-column align-items-center justify-content-center'>
                            <i class="bi bi-telephone"></i>
                            <h3>Número de telefone</h3>
                            <p>+55 84 99203-9516</p>
                        </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6 text-white ">
                        <div className='card-contact rounded-4  d-flex flex-column align-items-center justify-content-center'>
                            <i class="bi bi-envelope"></i>
                            <h3>Email</h3>
                            <p>mateusdev33@gmail.com</p>
                        </div>
                    </div>
                  </div>
                </div>
                
                <div className="home-img me-5 pe-5 pt-5"> <img className='img-fluid  rounded-circle ' src={perfil} alt=""/></div>
            </div>
            
        </section>
   
    )
}