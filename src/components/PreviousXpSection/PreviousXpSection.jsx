import "./PreviousXpSection.css"


export default function PreviousXpSection(props){
    const lg = props.language

    return (
        <section className="previous-xp section">
            <h2>{(lg === "pt") ? "Experiências Anteriores" : "Previous Experiences"}</h2>

            <p className="hint-text">{(lg === "pt") ? "(dd/mm/aaaa)" : "(dd/mm/yyyy)"}</p>

            <div className="previous-xp__list-experiences">
                <ul>
                    <div>
                        <li> {(lg === "pt") ? "Aplicativo Web de monitoramento fisioterapêutico" : "Physiotherapeutic monitoring web app"} <span className="xp-info-text">(30/01/2024 - 30/10/2024)</span></li>
                        <p className="xp-info-text">{(lg === "pt") ? "Tecnologias Utilizadas:" : "Technologies Used:"} React, HTML, CSS, JS, TS, MaterialUI, Figma</p>
                        <p className="xp-info-text">{(lg === "pt") ? "Funções Exercidas: desenvolvimento, design, manutenção" : "Roles Performed: development, design, maintenance"}</p>
                    </div>
                    <div>
                        <li> {(lg === "pt") ? "Aplicativo Web para realização de pesquisas com formulários" : "Survey and quiz web app"} <span className="xp-info-text">(14/03/2023 - 30/09/2023)</span></li>
                        <p className="xp-info-text">{(lg === "pt") ? "Tecnologias Utilizadas:" : "Technologies Used:"} React, HTML, CSS, JS</p>
                        <p className="xp-info-text">{(lg === "pt") ? "Funções Exercidas: desenvolvimento, design, manutenção" : "Roles Performed: development, design, maintenance"}</p>
                    </div>
                    <div>
                        <li>LandingPage <span className="xp-info-text">(01/10/2023)</span></li>
                        <p className="xp-info-text">{(lg === "pt") ? "Tecnologias Utilizadas:" : "Technologies Used:"} HTML, CSS, JS</p>
                        <p className="xp-info-text">{(lg === "pt") ? "Funções Exercidas: Desenvolvimento pixel-perfect conforme design, manutenção" : "Roles Performed: Pixel-perfect development according to design, maintenance"}</p>
                    </div>
                    <div>
                        <li>LandingPage <span className="xp-info-text">(14/04/2023)</span></li>
                        <p className="xp-info-text">{(lg === "pt") ? "Tecnologias Utilizadas:" : "Technologies Used:"} HTML, CSS, JS</p>
                        <p className="xp-info-text">{(lg === "pt") ? "Funções Exercidas: Desenvolvimento pixel-perfect conforme design, manutenção" : "Roles Performed: Pixel-perfect development according to design, maintenance"}</p>
                    </div>
                    <div>
                        <li>LandingPage <span className="xp-info-text">(24/01/2023)</span></li>
                        <p className="xp-info-text">{(lg === "pt") ? "Tecnologias Utilizadas:" : "Technologies Used:"} HTML, CSS, JS</p>
                        <p className="xp-info-text">{(lg === "pt") ? "Funções Exercidas: Desenvolvimento pixel-perfect conforme design, manutenção" : "Roles Performed: Pixel-perfect development according to design, maintenance"}</p>
                    </div>
                </ul>
            </div>
        </section>
    );
}