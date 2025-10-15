import './cardproject.css'
export default function CardProject({img, title, link}) {
  return (
    <div className='card d-flex flex-column justify-content-center align-items-center'>
        <img className='rounded-4 w-75 ' src={img} />
        <div className=''>
            <h3>{title}</h3>
            <a className='btn btn-danger' href={link} target="_blank" rel="noreferrer">See project  </a>
        </div>
    </div>
  )
}