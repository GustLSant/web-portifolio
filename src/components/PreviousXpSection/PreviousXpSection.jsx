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
                        <li> {(lg === "pt") ? "Aplicativo Web de monitoramento fisioterapêutico, projeto de faculdade" : "Physiotherapeutic monitoring web app, college project"} </li>
                        <p className="xp-info-text">(30/01/2024 - 30/10/2024); React, HTML, CSS, JS, TS, MaterialUI, Figma</p>
                    </div>
                    <div>
                        <li> {(lg === "pt") ? "Aplicativo Web para realização de pesquisas com formulários, projeto de faculdade" : "Survey and quiz web app, college project"} </li>
                        <p className="xp-info-text">14/03/2023; React, HTML, CSS, JS</p>
                    </div>
                    <div className="xp-inline-div">
                        <li>LandingPage, Freelance</li>
                        <p className="xp-info-text">01/10/2023; HTML, CSS, JS</p>
                    </div>
                    <div className="xp-inline-div">
                        <li>LandingPage, Freelance</li>
                        <p className="xp-info-text">14/04/2023; HTML, CSS, JS</p>
                    </div>
                    <div className="xp-inline-div">
                        <li>LandingPage, Freelance</li>
                        <p className="xp-info-text">24/01/2023; HTML, CSS, JS</p>
                    </div>
                </ul>
            </div>
        </section>
    );
}