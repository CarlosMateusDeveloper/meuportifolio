import './Projects.css'

export default function Projects() {
    return (
        <section className='project d-flex flex-column justify-content-center align-items-center pt-5 pb-5' id='projects'>
            <div className='container'>
                <h1>Projects</h1>
                <div className="row g-4">
                    <div className="col-12 col-md-6 col-lg-4">
                        {/*Card 2*/}
                        <div className="card" style={{width: '18rem'}}>
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                        {/*Card 3*/}
                    <div className='col-12 col-md-6 col-lg-4'>
                        <div className="card" style={{width: '18rem'}}>
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4'>

                    </div>
                        {/*Card 3*/}
                        <div className="card" style={{width: '18rem'}}>
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        {/*Card 3*/}
                        <div className="card" style={{width: '18rem'}}>
                        <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        {/*Card 3*/}
                        <div className="card" style={{width: '18rem'}}>
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                       
                    </div>
                </div>       
            </div> 
            
        </section>
    )
}