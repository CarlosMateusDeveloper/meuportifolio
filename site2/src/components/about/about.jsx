import './about.css'
import aboutimage1 from '../../assets/about-img-1.png';
import aboutimage2 from '../../assets/about-img-2.png';
export default function About() {
    return (
        <section className="about" id='about'>
            <div className="images">
                <img src={aboutimage1} className='img-1' alt="" />
                <img src={aboutimage2} className='img-2' alt="" />
            </div>
            <div className="content">
                <h4>ABOUT US</h4>
                <h1 className='text-white'>We provide the Best Service To Build</h1>
                <p>We strive to provide the best professionals to make your project a construction masterpiece, something unique and unmatched</p>
                <div>

                </div>
            </div>
        </section>
    )
}