import './about.css'
import aboutimage1 from '../../assets/about-img-1.png';
import aboutimage2 from '../../assets/about-img-2.png';
import Button from '../button/button'
export default function About() {
    return (
        <section className="about container-fluid d-flex justify-content-around align-items-center" id='about'>
            <div className="images">
                <img src={aboutimage1} className='img-1' alt="" />
                <img src={aboutimage2} className='img-2' alt="" />
            </div>
            <div className="content ">
                <h6>ABOUT US</h6>
                <h1 className=''>We provide the Best Service To Build</h1>
                <p className='text-secondary'>We strive to provide the best professionals to make your project a construction masterpiece, something unique and unmatched</p>
                <div>

                </div>
                <Button text={"View Projects"}/>
            </div>
        </section>
    )
}