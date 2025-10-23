import './footer.css'
export default function Footer(){
    return(
        <section className='container-fluid pt-5 d-flex flex-column justify-content-center align-items-center' id='footer'>
            <div className='container d-flex justify-content-between gap-5'>
                <div>
                    <i className='ri-building-3-line text-danger'></i> <h5>Construct</h5>
                    <p className='text-secondary'>We build security <br /> and trust in homes.</p>
                    <p className='text-secondary'>Email: construct123@gmail.com</p>
                </div>
                <div>
                    <h5>Company</h5>
                    <div className='d-flex flex-column'>
                        <a href="">About Us</a>
                        <a href="">Services</a>
                        <a href="">Projects</a>
                    </div>
                    
                </div>
                <div>
                    <h5>Information</h5>
                    <p className='text-secondary'>Peru - Lima <br /> Av.Moon#321</p>
                    <p className='text-secondary'>9AM-11PM</p>
                </div>
                <div>
                    <h5>Social Media</h5>
                    <div className='d-flex gap-2 ps-2'>
                        <i class="bi bi-instagram text-danger"></i>
                        <i class="bi bi-facebook text-danger"></i>
                        <i class="bi bi-twitter-x text-danger"></i>
                    </div>
                </div>
            </div>
            <p className='text-secondary'>All right reserved By Mateus.code</p>
        </section>
    )
}