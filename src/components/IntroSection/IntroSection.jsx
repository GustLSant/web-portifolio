import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { animateScroll } from 'react-scroll';

import './IntroSection.css'


function IntroSection(){

    function onSectionButtonClick(_className){
        animateScroll.scrollTo(
            document.getElementsByClassName(_className)[0].getBoundingClientRect().top,
            {
                duration: 1000,
                smooth: 'easeInOutQuart'
            }
        )
    }

    
    return (
        <div className="intro-section black-section">
            <div className="intro-section__header">
                <p className="head__email">GustLSantDev@gmail.com</p>
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
                <div>
                    <IoLogoGithub/>
                    <p>GustLSant</p>
                    </div>
                <div>
                    <IoLogoLinkedin/>
                    <p>Gustavo Santana</p>
                    </div>
                <div>
                    <MdEmail/>
                    <p>GustLSantDev@gmail.com</p>
                </div>
                <div>
                    <IoLogoWhatsapp/>
                    <p>+55 75 99957-4545</p>
                </div>
            </div>
        </div>
    );
}

export default IntroSection;