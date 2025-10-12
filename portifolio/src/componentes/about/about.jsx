import './about.css'
import foto from '../../assets/fotoportifolio-1.png'
export default function About() {
    return (
        <section className="about pt-5">
            <div className="section d-flex flex-row align-itens-center justify-content-center container-fluid px-5 " id="about">
                 <img className='rounded-circle w-25' src={foto} alt="" />
            <p className="about-text text-white pt-5 px-4">
               Sou um Desenvolvedor de software em formação no Instituto Federal de do Rio Grande do Norte (IFRN) no Campus Parnamirim. Trabalho principalmente com desenvolvimento web. Sou conhecido por minha capacidade de resolver problemas complexos e trabalhar bem em equipe. Estou sempre em busca de novos desafios e oportunidades para aplicar seus conhecimentos e contribuir para projetos significativos na área de tecnologia.
            </p>
            </div>
            <div className="section">
                <p></p>
                <img src="" alt="" />
            </div>
           
        </section>
    )
}