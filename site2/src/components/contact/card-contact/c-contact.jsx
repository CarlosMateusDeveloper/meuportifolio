import './c-contact.css'
export default function CardContact({icon, title , subtitle}){
    return(
        <div className="card-contact d-flex justify-content-center align-items-center">
                <div className="square-contact flex-column d-flex justify-content-center align-items-center">
                        <i className='icon-contact rounded-circle text-white p-2'>{icon}</i>
                        <p>{title} <br /><span className='text-secondary'>{subtitle}</span></p>          
                </div>
            </div>
    )
      
}