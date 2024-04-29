import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

import './IntroSection.css'


function IntroSection() {
    return (
        <div className="intro-section">
            <div className="intro-section__header">
                <p className="head__email">GustLSantDev@gmail.com</p>
                <p className="header__logo">GS</p>
                <nav>
                    <p>ABOUT ME</p>
                    <p>PROJECTS</p>
                    <p>CONTACT</p>
                    <p>SKILLS</p>
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