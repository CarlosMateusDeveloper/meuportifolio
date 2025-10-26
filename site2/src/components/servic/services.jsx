import Button from '../button/button'
import './services.css'
export default function Services() {
    return (
        <section className='px-5' id="services">
            <div className='services-content container-fluid px-5 d-flex '>
                <div>
                    <h6 className='subtitle-services'>OUR SERVICES</h6>
                    <h1>High Quality Construction Services</h1>
                </div>
                <p className='text-secondary'>We provide multiple services for you, offering confidence and security in construction.</p>
                <Button text={"Contact Now"}/>

            </div>
            <div className="back"></div>
            <div> 
            </div>
        </section>
    )
}