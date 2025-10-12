import './about.css'
import foto from '../../assets/fotoportifolio-1.png'
import foto2 from '../../assets/foto2.png'
import fotoesportes from '../../assets/foto-esportes.jpg'
export default function About() {
    return (
        <section className="about pt-5 pb-5">
            <div className="section d-flex flex-row align-itens-center justify-content-center container-fluid px-5 " id="about">
                 <img className='rounded-circle ' src={foto} alt="" />
            <p className="about-text text-white pt-5 px-4">
               Sou um Desenvolvedor de software em formação no Instituto Federal de do Rio Grande do Norte (IFRN) no Campus Parnamirim. Trabalho principalmente com desenvolvimento web. Sou conhecido por minha capacidade de resolver problemas complexos e trabalhar bem em equipe. 
            </p>
            </div>
            <div className="section d-flex flex-row align-itens-center justify-content-center container-fluid px-5 gap-y-3 " id="about-2">
                <p className='text-white align-content-center'>Estou cursando o 4° período do Tecnólogo em Sistemas para Internet.
                    Tenho experiência com diversas stacks, desde as tecnologias básicas — HTML, CSS e JavaScript/TypeScript — até frameworks como Angular e React (este portfólio foi desenvolvido em React).
                    Trabalhei com bancos de dados MySQL, além de linguagens como C, C++ e Python.
                    Possuo conhecimentos em redes de computadores, Cloud Computing e IA.</p>
                <img className=' rounded-circle' src={foto2} alt="" />
            </div>
            <div className="section d-flex flex-row align-itens-center justify-content-center container-fluid px-5 gap-y-3 " id="about-3">
                <img className='rounded-circle me-3' src={fotoesportes} alt="" />
                <p className='text-white align-content-center'>
                    Como Hobbies eu procuro ser bem ativo fisicamente, procuro me distanciar de telas e coisas como jogos e redes sociais, busco fazer algo que ocupe a minha mente e gaste as energias do meu corpo como ir à academia, praticar Jiu-jitsu, caminhar.
                </p>
            </div>
           
        </section>
    )
}