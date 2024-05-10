import ProfilePicture from "../../profilePicture/FotoCV01-quadrada.jpg"
import { animateScroll } from 'react-scroll';
import "./AboutMeSection.css"


function AboutMeSection() {

    function onClickContact(){
        animateScroll.scrollToTop({
            duration: 1000,
            smooth: 'easeInOutQuart'
        })
    }

    return (
        <div className="about-me-section black-section">
            <h2>About me</h2>
            <div>
                <img src={ProfilePicture} alt="Foto pessoal" />
                <div className="about-me-section__texts-container">
                    <p>
                        Hello, I am Gustavo, a Front-end web developer focused on transforming concepts into code.
                        Specialized in ReactJS, JavaScript, CSS and HTML. Committed to responsive design and optimized performance.
                        Always looking for innovative challenges.
                    </p>
                    <p>Let's build something extraordinary together!</p>
                    <p className="about-me__contact-button" onClick={onClickContact}>CONTACT</p>
                </div>
            </div>
        </div>
    );
}

export default AboutMeSection;