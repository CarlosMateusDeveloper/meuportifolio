import './contact.css'
import Card from './card-contact/c-contact'
import image from '../../assets/contact-img.png'
export default function Contact(){
    return(
        <section className="d-flex flex-column  align-items-center px-5 mx-5" id="contact">
            <div className='contact pt-5'>
                <h6 className='subtitle-contact pt-4'>CONTACT ME</h6>
            <h1>Write To Us & Build</h1>
            <div className='contact-content d-flex justify-content-around flex-wrap pt-5'>
                <img className='contact-image' src={image} alt="" />
                <div className="top d-flex flex-row gap-3">
                     <Card icon={<i class="bi bi-geo-alt-fill"></i>} title={"I'm Here"} subtitle={<p>Peru - Lima <br />Av.Moon n°321</p>}/>
                     <Card icon={<i class="bi bi-telephone"></i>} title={"Talk to me"} subtitle={"+00-987-7654-432 +11-012345"}/>
                </div>
                 <Card icon={<i class="bi bi-chat-right-dots"></i>} title={"I'm Here"} subtitle={<a></a>}/>
            </div>
            </div>
            
        </section>
    )
}