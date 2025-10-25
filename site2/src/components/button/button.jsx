import './button.css'

export default function Button({text , link}) {
    return (
        <button className="custom-button text-white py-2 px-3">
            
            <a href={link} className='text-white'>
                {text}
            </a>
        </button>
    )
}