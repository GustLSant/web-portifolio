import "./PreviousXP.css"


function PreviousXP(props){
    const lg = props.language

    return (
        <div className="previous-xp">
            <h2>{(lg === "pt") ? "Experiências Anteriores" : "Previous Experiences"}</h2>

            <div className="previous-xp__list-experiences">
                <ul>
                    <div>
                        <li> {(lg === "pt") ? "Aplicativo Web de monitoramento fisioterapêutico, projeto de faculdade" : "Physiotherapeutic monitoring web app, college project"} </li>
                        <p className="xp-info-text">10/04/2024, React, HTML, CSS, JS</p>
                    </div>
                    <div>
                        <li> {(lg === "pt") ? "Aplicativo Web para realização de pesquisas com formulários, projeto de faculdade" : "Survey and quiz web app, college project"} </li>
                        <p className="xp-info-text">14/03/2023, React, HTML, CSS, JS</p>
                    </div>
                    <div className="xp-inline-div">
                        <li>LandingPage, Freelance</li>
                        <p className="xp-info-text">01/10/2023, HTML, CSS, JS</p>
                    </div>
                    <div className="xp-inline-div">
                        <li>LandingPage, Freelance</li>
                        <p className="xp-info-text">14/04/2023, HTML, CSS, JS</p>
                    </div>
                    <div className="xp-inline-div">
                        <li>LandingPage, Freelance</li>
                        <p className="xp-info-text">24/01/2023, HTML, CSS, JS</p>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default PreviousXP;