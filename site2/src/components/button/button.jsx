import './button.css'

export default function Button({text}) {
    return (
        <button className="custom-button text-white">
            {text}
        </button>
    )
}