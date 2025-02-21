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
        <section className="about-me-section section">
            <h2> {(lg === "pt") ? "Sobre mim" : "About me"} </h2>
            <div>
                <img src={ProfilePicture} alt="Foto pessoal" />
                <div className="about-me-section__texts-container">
                    <p>
                        {   
                            (lg === "pt") ? 
                            "Olá, me chamo Gustavo, sou um desenvolvedor web Front-end focado em qualidade de código, boas práticas e colaboração eficiente. Sou responsável e comprometido com entregas legíveis e escaláveis. Possuo uma comunicação clara e objetiva, sou autodidata e estou sempre disposto a superar problemas." : 
                            "Hello, my name is Gustavo. I’m a Front-end web developer focused on code quality, best practices, and efficient collaboration. I am responsible and committed to delivering readable and scalable solutions. I have clear and objective communication skills, I’m self-taught, and always willing to overcome challenges."
                        }
                    </p>
                    {/* <p>{(lg === "pt") ? "Vamos construir algo extraordinário juntos!" : "Let's build something extraordinary together!"}</p> */}
                    <p className="about-me__contact-button" onClick={onClickContact}> {(lg === "pt") ? "CONTATO" : "CONTACT"} </p>
                </div>
            </div>
        </section>
    );
}

export default AboutMeSection;

// "Olá, me chamo Gustavo, sou desenvolvedor web Front-end focado em transformar conceitos em código. Especializado em ReactJS, JavaScript, CSS e HTML. Comprometido com design responsivo e desempenho otimizado. Autodidata e sempre em busca de desafios inovadores." : 
