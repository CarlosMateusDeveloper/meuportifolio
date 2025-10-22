import './contact.css'
import Card from './card-contact/c-contact'
import image from '../../assets/contact-img.png'
export default function Contact(){
    return(
         <section className="contact" id="contact">
        <h6>CONTACT ME</h6>
        <h2>Write To Us & Build</h2>
        <div className='contact-content'>
            <img src={image} alt="" />
            <div className="container">
                <div className="row">
                    <Card/>
                    <Card/>
                </div>
                <div className="row">
                    <Card/>
                </div>
            </div>
        </div>
    </section>
    )
}