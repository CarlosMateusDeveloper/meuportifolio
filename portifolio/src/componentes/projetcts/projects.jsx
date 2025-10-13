import './Projects.css'

export default function Projects() {
    return (
        <section className='project d-flex flex-column justify-content-center align-items-center pt-5 pb-5' id='projects'>
            <div className='container d-flex flex-column justify-content-center align-items-center text-center'>
                <h1 className='text-white mb-5'>Projects</h1>
                <div className="row g-4 ">
                    <div className="col-12 col-md-6 col-lg-4">
                        {/*Card 1*/}
                        <div className="card" style={{width: '16rem'}}>
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title text-white">Projeto 1</h5>
                                <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                <a href="#" className="btn btn-danger">See Project</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        {/*Card 2*/}
                        <div className="card" style={{width: '16rem'}}>
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title text-white">Projeto 2</h5>
                                <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                <a href="#" className="btn btn-danger">See Project</a>
                            </div>
                        </div>
                    </div>
                        {/*Card 3*/}
                    <div className='col-12 col-md-6 col-lg-4'>
                        <div className="card" style={{width: '16rem'}}>
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title text-white">Projeto 3</h5>
                                <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                <a href="#" className="btn btn-danger">See Project</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4'>
                        {/*Card 4*/}
                        <div className="card" style={{width: '16rem'}}>
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title text-white">Projeto 4</h5>
                                <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                <a href="#" className="btn btn-danger">See Project</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4'>
                         {/*Card 5*/}
                        <div className="card" style={{width: '16rem'}}>
                        <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title text-white">Projeto 5</h5>
                                <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                <a href="#" className="btn btn-danger">See Project</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4'>
                         {/*Card 6*/}
                        <div className="card" style={{width: '16rem'}}>
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title text-white">Projeto 6</h5>
                                <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                <a href="#" className="btn btn-danger">See Project</a>
                            </div>
                        </div>
    
                    </div>
                </div>       
            </div> 
            
        </section>
    )
}