import ProfilePicture from "../../profilePicture/FotoCV01-quadrada.jpg"
import "./AboutMeSection.css"


function AboutMeSection() {
    return (
        <div className="about-me-section black-section">
            <h2>About me</h2>
            <div>
                <img src={ProfilePicture} alt="Foto pessoal" />
                <p>
                    Hello, I am Gustavo, a Front-end web developer focused on transforming concepts into code. 
                    Specialized in ReactJS, JavaScript, CSS and HTML. Committed to responsive design and optimized performance. 
                    Always looking for innovative challenges.
                    <br />Let's build something extraordinary together!
                </p>
            </div>
        </div>
    );
}

export default AboutMeSection;