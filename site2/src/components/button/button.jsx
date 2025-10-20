import './button.css'

export default function Button({text}) {
    return (
        <button className="custom-button text-white py-2 px-3">
            {text}
        </button>
    )
}