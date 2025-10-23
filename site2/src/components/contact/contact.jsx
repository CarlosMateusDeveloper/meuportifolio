import './contact.css'
import Card from './card-contact/c-contact'
import image from '../../assets/contact-img.png'
export default function Contact(){
    return(
         <section className="contact d-flex flex-column " id="contact">
        <h6>CONTACT ME</h6>
        <h2>Write To Us & Build</h2>
        <div className='contact-content d-flex justify-content-end align-items-center'>
            <img src={image} alt="" />
            <div className="container">
                <div className="row gap-3">
                    <Card icon={<i class="bi bi-geo-alt-fill"></i>} title={"I'm Here"} subtitle={<p>Peru - Lima <br />Av.Moon n°321</p>}/>
                    <Card icon={<i class="bi bi-telephone"></i>} title={"Talk to me"} subtitle={"+00-987-7654-432 +11-012345"}/>
                </div>
                <div className="row pt-3">
                    <Card icon={<i class="bi bi-chat-right-dots"></i>} title={"I'm Here"} subtitle={<a></a>}/>
                </div>
            </div>
        </div>
    </section>
    )
}