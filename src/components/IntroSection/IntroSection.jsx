import { animateScroll } from 'react-scroll';

import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

import './IntroSection.css'


function IntroSection(props){

    function onSectionButtonClick(_className){
        animateScroll.scrollTo(
            document.getElementsByClassName(_className)[0].getBoundingClientRect().top,
            {
                duration: 1000,
                smooth: 'easeInOutQuart'
            }
        )
    }


    function copyTextToClipboard(_text){
        navigator.clipboard.writeText(_text)
        .then(() => { alert('Texto copiado para a área de transferência!'); })
        .catch((error) => { console.error('Erro ao copiar o texto:', error); });
    }


    function openExternalLink(_link){
        window.open(_link, "_blank")
    }

    
    return (
        <div className="intro-section black-section" ref={props.introRef}>
            <div className="intro-section__header">
                <p className="head__email" onClick={()=>{copyTextToClipboard("GustLSantDev@gmail.com")}}>GustLSantDev@gmail.com</p>
                <p className="header__logo">GS</p>
                <nav>
                    <p onClick={()=>{onSectionButtonClick("about-me-section")}}>ABOUT ME</p>
                    <p onClick={()=>{onSectionButtonClick("projects-section")}}>PROJECTS</p>
                    <p onClick={()=>{onSectionButtonClick("skills-section")}}>SKILLS</p>
                    <p onClick={()=>{onSectionButtonClick("previous-xp")}}>EXPERIENCES</p>
                </nav>
            </div>
            
            <div className="intro-section__intro">
                <p>Hello, I am</p>
                <p>Gustavo Lucas Santana</p>
                <div>
                    <p>Front-end Developer</p>
                    <p>Computer Science Student</p>
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
        </div>
    );
}

export default IntroSection;