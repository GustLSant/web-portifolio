import "./SkillsSection.css"


function SkillsSection(props){
    const lg = props.language

    return (
        <section className="skills-section">
            <h2> {(lg === "pt" ? "Habilidades" : "My Skills")} </h2>

            <div className="skills-section__skills-container">
                <ul>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>CSS</li>
                    <li>HTML</li>
                </ul>
                <ul>
                    <li>TailwindCSS</li>
                    <li>Jest</li>
                    <li>Figma</li>
                    <li>Github</li>
                    <li>SASS</li>
                </ul>
                <ul>
                    <li> {(lg === "pt" ? "Inglês" : "English")} <br /> <small>({(lg === "pt" ? "Avançado" : "Advanced")})</small></li>
                    <li> {(lg === "pt" ? "Português" : "Portuguese")} <br /> <small>({(lg === "pt" ? "Fluente" : "Fluent")})</small></li>
                    <li> {(lg === "pt" ? "Espanhol" : "Spanish")} <br /> <small>({(lg === "pt" ? "Básico" : "Basic")})</small></li>
                </ul>
            </div>
        </section>
    );
}

export default SkillsSection;