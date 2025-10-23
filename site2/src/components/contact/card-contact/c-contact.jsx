import './c-contact.css'
export default function CardContact({icon, title , subtitle}){
    return(
        <div className="card-contact">
                <div className="icon-contact">
                    {icon}
                    {title}
                    {subtitle}
                </div>
            </div>
    )
            
}