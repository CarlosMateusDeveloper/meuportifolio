import Button from '../button/button'
import './services.css'
import { Carousel } from 'react-bootstrap'; 
export default function Services() {
    return (
        <section id="services">
            <div>
                <div>
                    <h6>OUR SERVICES</h6>
                    <h3>High Quality Construction Services</h3>
                </div>
                <p>We provide multiple services for you, offering confidence and security in construction.</p>
                <Button text={"Contact Now"}/>

            </div>
            <div>
                {/* <Carousel indicators={false}>
                  {/* PRIMEIRO SLIDE (com 3 cards) */}
                  {/* <Carousel.Item>
                    <div className="row">
                      <div className="col-md-4">
                        <SeuCardDeServico />
                      </div>
                      <div className="col-md-4">
                        <SeuCardDeServico />
                      </div>
                      <div className="col-md-4">
                        <SeuCardDeServico />
                      </div>
                    </div>
                  </Carousel.Item> */}
                
                  {/* SEGUNDO SLIDE (com os próximos 3 cards) */}
                  {/* <Carousel.Item>
                    <div className="row">
                      <div className="col-md-4">
                        <SeuCardDeServico />
                      </div>
                      <div className="col-md-4">
                        <SeuCardDeServico />
                      </div>
                      <div className="col-md-4">
                        <SeuCardDeServico />
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel> */} 
            </div>
        </section>
    )
}