import "./SkillsSection.css"


function SkillsSection(props){
    const lg = props.language

    return (
        <div className="skills-section">
            <h2> {(lg === "pt" ? "Habilidades" : "My Skills")} </h2>

            <div className="skills-section__skills-container">
                <ul>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>Github</li>
                </ul>
                <ul>
                    <li>Figma</li>
                    <li>TypeScript</li>
                    <li>PostgreSQL</li>
                    <li>Python</li>
                    <li>SASS</li>
                </ul>
                <ul>
                    <li> {(lg === "pt" ? "Inglês" : "English")} <br /> <small>({(lg === "pt" ? "Avançado" : "Advanced")})</small></li>
                    <li> {(lg === "pt" ? "Português" : "Portuguese")} <br /> <small>({(lg === "pt" ? "Fluente" : "Fluent")})</small></li>
                    <li> {(lg === "pt" ? "Espanhol" : "Spanish")} <br /> <small>({(lg === "pt" ? "Básico" : "Basic")})</small></li>
                </ul>
            </div>
        </div>
    );
}

export default SkillsSection;