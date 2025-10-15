import perfil from '../../assets//fotocontatoultima.png'
import './contact.css'
import Contactcard from '../contact-card/contact-card.jsx'
export default function Contact() {
    return (
        <section className="contact d-flex flex-column justify-content-center align-itens-center " id='contact'>
            <h1 className='text-center text-white pb-3'>Contate-me</h1>
            <div className='d-flex flex-row justify-content-center align-items-center '>
                <div className='pe-5'>
                    <div className='d-flex flex-row '>
                        <div className="col-12 col-md-6 "> 
                            <Contactcard icon={"bi bi-geo-alt-fill"} title={"Localização"} local={"Natal, RN - Brasil"}/>         
                        </div>
                        <div className="col-12 col-md-6 ">
                            <Contactcard icon={"bi bi-telephone-fill"} title={"Telefone"} local={"+55 84 99203-9516"}/>
                        </div>
                    </div>
                    <div className='d-flex flex-row'>
                        <div className="">
                            <div className="col-12 col-md-6 text-white ">
                                <Contactcard icon={"bi bi-envelope-fill"} title={"Email"} local={"mateusdev33@gmail.com"}/>
                            </div>
                        </div>
                    </div>
                </div>
               <div className="contact-img me-5 pt-3 "> <img className='img-fluid rounded-4 ps-0 ms-0' src={perfil} alt=""/></div>
            </div>
            
        </section>
   
    )
}