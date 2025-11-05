
export default function Tool({ icon , title, tech }){
    return(
        <div >
          <div>{icon}</div>
          <h1>{title}</h1>
          {tech}
        </div>
    )   
}