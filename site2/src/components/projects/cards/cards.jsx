import './cards.css'
export default function Cards({image , subtitle , title , date }){
    return(
        <div className='card' style={{width: '18rem'}}>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h6 className="card-title">{subtitle}</h6>
                <h5 className="card-title">{title}</h5>
                <h6 className="card-title">{date}</h6>
                <p className="card-text">Construction of a two-story house with columns, foundations, floor, ceilings and others. </p>
            </div>
        </div>
    )
}