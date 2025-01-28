import { scrollTo } from '../HeaderNavbar/HeaderNavbar'

import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

import './IntroSection.css'


function IntroSection(props){
    const lg = props.language


    function copyTextToClipboard(_text){
        navigator.clipboard.writeText(_text)
        .then(() => { alert(`${(lg === "pt" ? "Texto copiado para a área de transferência!" : "Text copied to clipboard!")}`); })
        .catch((error) => { console.error('Error on copying text:', error); });
    }


    function openExternalLink(_link){
        window.open(_link, "_blank")
    }

    
    return (
        <section className="intro-section black-section" ref={props.introRef}>
            <div className="intro-section__header">
                <p className="head__email" onClick={()=>{copyTextToClipboard("GustLSantDev@gmail.com")}}>GustLSantDev@gmail.com</p>
                <p className="header__logo">GS</p>
                <nav>
                        <p onClick={()=>{scrollTo("skills-section")}}>       {(lg === "pt" ? "HABILIDADES" : "SKILLS")}        </p>
                        <p onClick={()=>{scrollTo("projects-section")}}>     {(lg === "pt" ? "PROJETOS" : "PROJECTS")}         </p>
                        <p onClick={()=>{scrollTo("previous-xp")}}>          {(lg === "pt" ? "EXPERIÊNCIAS" : "EXPERIENCES")}  </p>
                        <p onClick={()=>{scrollTo("certificates-section")}}> {(lg === "pt" ? "CERTIFICADOS" : "CERTIFICATES")} </p>
                        {/* <p onClick={()=>{onSectionButtonClick("about-me-section")}}>     {(lg === "pt" ? "SOBRE MIM" : "ABOUT ME")}        </p> */}
                </nav>
            </div>
            
            <div className="intro-section__intro">
                <p> {(lg === "pt" ? "Olá, me chamo" : "Hello, I am")} </p>
                <p>Gustavo Lucas Santana</p>
                <div>
                    <p> {(lg === "pt" ? "Desenvolvedor Front-end" : "Front-end Developer")} </p>
                    <p> {(lg === "pt" ? "Estudante de Ciências da Computação" : "Computer Science Student")} </p>
                </div>
            </div>

            <div className="intro-section__contact">
                <div onClick={()=>{openExternalLink("https://github.com/GustlSant")}}>
                    <IoLogoGithub/>
                    <p>GustLSant</p>
                    </div>
                <div onClick={()=>{openExternalLink("https://www.linkedin.com/in/gustavo-lucas-santana")}}>
                    <IoLogoLinkedin/>
                    <p>Gustavo Santana</p>
                    </div>
                <div onClick={()=>{copyTextToClipboard("GustLSantDev@gmail.com")}}>
                    <MdEmail/>
                    <p>GustLSantDev@gmail.com</p>
                </div>
                <div onClick={()=>{openExternalLink("https://wa.me/+5575999574545")}}>
                    <IoLogoWhatsapp/>
                    <p>+55 75 99957-4545</p>
                </div>
            </div>
        </section>
    );
}

export default IntroSection;