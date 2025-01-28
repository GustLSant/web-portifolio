import ProfilePicture from "../../profilePicture/FotoCV01-quadrada.jpg"
import { animateScroll } from 'react-scroll';
import "./AboutMeSection.css"


function AboutMeSection(props){
    const lg = props.language

    function onClickContact(){
        animateScroll.scrollToTop({
            duration: 1000,
            smooth: 'easeInOutQuart'
        })
    }

    return (
        <section className="about-me-section">
            <h2> {(lg === "pt") ? "Sobre mim" : "About me"} </h2>
            <div>
                <img src={ProfilePicture} alt="Foto pessoal" />
                <div className="about-me-section__texts-container">
                    <p>
                        {   
                            (lg === "pt") ? 
                            "Olá, me chamo Gustavo, desenvolvedor um web Front-end focado em transformar conceitos em código. Especializado em ReactJS, JavaScript, CSS e HTML. Comprometido com design responsivo e desempenho otimizado. Autodidata e sempre em busca de desafios inovadores." : 
                            "Hello, I am Gustavo, a Front-end web developer focused on transforming concepts into code. Specialized in ReactJS, JavaScript, CSS and HTML. Committed to responsive design and optimized performance. Autodidact and always looking for innovative challenges."
                        }
                    </p>
                    <p>{(lg === "pt") ? "Vamos construir algo extraordinário juntos!" : "Let's build something extraordinary together!"}</p>
                    <p className="about-me__contact-button" onClick={onClickContact}> {(lg === "pt") ? "CONTATO" : "CONTACT"} </p>
                </div>
            </div>
        </section>
    );
}

export default AboutMeSection;