import "./SkillsSection.css"


function SkillsSection(){
    return (
        <div className="skills-section">
            <h2>My Skills</h2>

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
                    <li>English <br /> <small>(Advanced)</small></li>
                    <li>Portuguese <br /> <small>(Fluent)</small></li>
                    <li>Spanish <br /> <small>(Basic)</small></li>
                </ul>
            </div>
        </div>
    );
}

export default SkillsSection;