import './maincontainer.css'
import Button from '../button/button.jsx'
import homeimage1 from '../../assets/home-img-1.png';
import homeimage2 from '../../assets/home-img-2.png';
export default function maincontainer() {
    return (
        <section className="maincontainer container-fluid pt-5 px-5 d-flex flex-row pt-5" id='maincontainer'>
            <div className='d-flex flex-column justify-content-start align-items-center pt-5 mt-5'>
                <h1 className="title text-white w-75">Create The Constructions <br /> You Want Here</h1>
                <p className='text-secondary w-75'>We provide the best home design, construction and maintenance services for you and your family.</p>
                <Button text="Our Services"/>
                <button>View Projects</button>
                <div></div>
                <div></div>
            </div>
            <div className='d-flex justify-content-center pt-5'>
                <img src={ homeimage1 } className='mcimg-1 w-75' alt="home-image-1" />
                <img src={homeimage2} className='mcimg-2 w-25' alt="home-image-2" />
            </div>
        </section>
    )
}