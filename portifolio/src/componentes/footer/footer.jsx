import './footer.css'
import Icon from '../icones/icon.jsx'
export default function Footer() {
    return (
        <footer className="footer d-flex flex-column align-itens-center justify-content-center text-center p-3">
            <div className="d-flex flex-row justify-content-center align-items-center ">
                 <Icon icone={"bi bi-linkedin"} link={"linkedin.com/in/carlos-gonçalves-b38701211"}/>
            <Icon icone={"bi bi-instagram"} link={"instagram.com/dev_carlos_mateus"}/>
            </div>
            <p className='text-white'>© 2025 Mateus Gonçalves | All rights reserved.</p>
        </footer>
    )
}