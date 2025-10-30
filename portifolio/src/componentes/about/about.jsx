import './about.css'
import foto from '../../assets/fotoportifolio-1.png'
import foto2 from '../../assets/foto2.png'
import fotoesportes from '../../assets/foto-esportes.jpg'
import FloatingBubbles from "../bubble/bubble";
export default function About() {
    return (
        <section className="about pt-5 pb-5" id='about'>
            <h1>Sobre mim</h1>
            <div className='d-flex flex-row'>
                <div className="content-text">
                <p className="about-text text-white pt-5 px-4 align-content-center">
                Sou Desenvolvedor Fullstack em formação no Instituto Federal do Rio Grande do Norte (IFRN), campus Parnamirim. Atualmente, curso Tecnologia em Sistemas para Internet e estou no 4º semestre, com previsão de conclusão em dezembro de 2027.
                
                <br />
                  Trabalho com HTML, CSS, JavaScript/TypeScript, uso frameworks como Angular e React (este portfólio foi desenvolvido em React).
                    Uso PostgreSQL e mySQL como banco de dados e no Backend utilizo nodeJS ou Python. Gosto de aprender sobre Cloud Computing, IA e Blockchain.
                
                <br />
            
                    Como Hobbies eu procuro ser bem ativo fisicamente, procuro me distanciar de telas e coisas como jogos e redes sociais, busco fazer algo que ocupe a minha mente e gaste as energias do meu corpo como ir à academia, praticar Jiu-jitsu, caminhar, estou tentando pegar o hábito de ler um livro e pelo menos 10 páginas por dia.
                </p>
            </div>
            <div className="content-image">
                <img className='rounded-circle' src={foto} alt="" />
                <img className=' rounded-circle' src={foto2} alt="" />
                <img className='rounded-circle me-3' src={fotoesportes} alt="" />
            </div>
            </div>
            
           
           
        </section>
    )
}