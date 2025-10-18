import './maincontainer.css'
import Button from '../button/button.jsx'
import homeimage1 from '../../assets/home-img-1.png';
import homeimage2 from '../../assets/home-img-2.png';
export default function maincontainer() {
    return (
        <section className="maincontainer" id='maincontainer'>
            <div>
                <h1 className="title text-white">Create The Constructions You Want Here</h1>
                <p>We provide the best home design, construction and maintenance services for you and your family.</p>
                <Button text="Our Services"/>
                <button>View Projects</button>
                <div></div>
                <div></div>
            </div>
            <div>
                <img src={ homeimage1 } alt="home-image-1" />
                <img src={homeimage2} alt="home-image-2" />
            </div>
        </section>
    )
}