import './about.css'
import foto from '../../assets/fotoportifolio-1.png'
import foto2 from '../../assets/foto2.png'
import fotoesportes from '../../assets/foto-esportes.jpg'
export default function About() {
    return (
        <section className="about py-5 container-fluid" id='about'>
            <h1 className='text-center'>Sobre mim</h1>
            <div className='d-flex flex-row mx-5 flex-wrap'>
                <div className="content-text w-75 pt-5">
                    <p className="about-text text-white pt-5 px-4 align-content-center fs-4">
                        Desenvolvedor Fullstack em formação no Instituto Federal do Rio Grande do Norte (IFRN), campus Parnamirim. Atualmente, curso Tecnologia em Sistemas para Internet e estou no 4º semestre, com previsão de conclusão em dezembro de 2027.
                        <br />
                        <br /> 
                        Atualmente estou morando no Município de Nisia Floresta e atuo em toda a grande Natal, tenho 23 anos e estou a procura de entrar no mercado de desenvolvimento de software.
                    </p>
                    {/* <p className='about-text text-white pt-5 px-4 align-content-center fs-4'>
                        Trabalho com HTML, CSS, JavaScript/TypeScript, uso frameworks como Angular e React (este portfólio foi desenvolvido em React).
                        Uso PostgreSQL e mySQL como banco de dados e no Backend utilizo nodeJS ou Python. Gosto de aprender sobre Cloud Computing, IA e Blockchain.
                    </p> */}
                    <p className='about-text text-white pt-5 px-4 align-content-center fs-4'>
                        Meus Hobbies envolvem leitura e atividades fisicas, busco fazer algo que ocupe a minha mente de forma saudável e me elevem fisica e mentalmente como ir à academia, praticar Jiu-jitsu e caminhar. Minha meta é ler pelo menos 10 páginas de um livro por dia, ir todos os dias a academia e conseguir minha primeira graduação no Jiu-jitsu.
                    </p>
     
                </div>
                <div className="content-image">
                    <img className='rounded-circle animate-float img-1' src={foto} alt="" />
                    <img className=' rounded-circle animate-float img-2' src={foto2} alt="" />
                    <img className='rounded-circle me-3 animate-float img-3' src={fotoesportes} alt="" />
                </div>
            </div>
            
           
           
        </section>
    )
}