import './tool.css'
export default function Tool({ icon , title, tech }){
    return(
        <div className='tool p-4'>
          <div className="d-flex ">
            <div className='stack-icon rounded-circle text-white d-flex align-items-end'>{icon}</div>
            <h1 className='text-white d-flex align-items-center '>{title}</h1>
          </div>
          
          <div className='d-flex'>{tech}</div>
        </div>
    )   
}