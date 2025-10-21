import Cards from './cards/cards'
import image1 from '../../assets/projects-img-1.png'
import image2 from '../../assets/projects-img-2.png'
import image3 from '../../assets/projects-img-3.png'
import '../projects/projects.css'
export default function Projects() {
    return (
        <section className='d-flex flex-column align-items-center' id='projects'>
            <h5 className='pt-3'>OUR PROJECTS</h5>
            <h3 className='text-white pb-5'>Latest Completed Projects</h3>
            <div className="cards-projects d-flex justify-content-center gap-4 pt-5">
                <Cards subtitle={'House construction'} title={'Two Story House'} date={'January 15, 2024'} image={image1}/>
                <Cards subtitle={'Maintenance & Repair'} title={'Stairs & Columns'} date={'May 21, 2024'} image={image2}/>
                <Cards subtitle={'House construction'} title={''} date={'January '} image={image3}/>
            </div>
        </section>
    )
}