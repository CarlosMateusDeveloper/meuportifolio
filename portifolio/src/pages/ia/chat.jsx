import Navbar from '../../componentes/navbar/navbar.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react'
import './chat.css'
export default function Chat() {
    return (
        <>
            
            <main className='ia'>
                <Navbar />
                
                <form className='d-flex flex-column justify-content-center align-items-center' action="#">
                    <label htmlFor="text" className='text-white'>Quer me conhecer melhor?</label>
                    <input class="form-control rounded-5 text-white" type="text" value="Pergunte alguma coisa" aria-label="readonly input example" readonly/>
                </form>
            </main>
        </>
    )
        
        
}