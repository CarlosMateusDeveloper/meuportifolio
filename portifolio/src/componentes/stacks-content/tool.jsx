import './tool.css'
export default function Tool({ icon , title, tech }){
    return(
        <div className='tool'>
          <div>{icon}</div>
          <h1>{title}</h1>
          {tech}
        </div>
    )   
}