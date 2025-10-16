import './projects.css'
import CardProject from '../cardproject/cardproject'
// import img1 from '../../assets/image copy.png'  

export default function Projects() {
    return (
        <section className='project d-flex flex-column justify-content-center align-items-center pt-5 pb-5' id='projects'>
            <div className='container d-flex flex-column justify-content-center align-items-center text-center'>
                <h1 className='text-white mb-5'>Projects</h1>
                <div className="row ">
                    <div className="col-12 col-md-6 col-lg-4">
                        {/*Card 1*/}
                       <CardProject 
                       img={""}
                       title="Projeto 1"
                       link=""/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        {/*Card 2*/}
                        {/* <div className="card" style={{width: '16rem'}}>
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title text-white">Projeto 2</h5>
                                <a href="#" className="btn btn-danger">See Project</a>
                            </div>
                        </div> */}
                        <CardProject 
                       img={""}
                       title="Projeto 2"
                       link="#"/>
                    </div>
                        {/*Card 3*/}
                    <div className='col-12 col-md-6 col-lg-4'>
                        {/* <div className="card" style={{width: '16rem'}}>
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title text-white">Projeto 3</h5>
                                <a href="#" className="btn btn-danger">See Project</a>
                            </div>
                        </div> */}
                        <CardProject 
                       img={""}
                       title="Projeto 3"
                       link=""/>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4'>
                        {/*Card 4*/}
                        {/* <div className="card" style={{width: '16rem'}}>
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title text-white">Projeto 4</h5>
                                <a href="#" className="btn btn-danger">See Project</a>
                            </div>
                        </div> */}
                        <CardProject 
                       img={""}
                       title="Projeto 4"
                       link=""/>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4'>
                         {/*Card 5*/}
                        {/* <div className="card" style={{width: '16rem'}}>
                        <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title text-white">Projeto 5</h5>
                                <a href="#" className="btn btn-danger">See Project</a>
                            </div>
                        </div> */}
                        <CardProject 
                       img={""}
                       title="Projeto 5"
                       link=""/>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4'>
                         {/*Card 6*/}
                        {/* <div className="card" style={{width: '16rem'}}>
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title text-white">Projeto 6</h5>
                                <a href="#" className="btn btn-danger">See Project</a>
                            </div>
                        </div> */}
                        <CardProject 
                       img={""}
                       title="Projeto 6"
                       link=""/>    
                    </div>
                </div>       
            </div> 
            
        </section>
    )
}

