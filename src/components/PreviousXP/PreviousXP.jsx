import "./PreviousXP.css"


function PreviousXP() {
    return (
        <div className="previous-xp">
            <h2>Previous Experiences</h2>

            <div className="previous-xp__list-experiences">
                <ul>
                    <div>
                        <li>Physiotherapeutic monitoring web app, college project</li>
                        <p className="xp-info-text">10/04/2024, React, HTML, CSS, JS</p>
                    </div>
                    <div>
                        <li>Survey and quiz web app, college project</li>
                        <p className="xp-info-text">14/03/2023, React, HTML, CSS, JS</p>
                    </div>
                    <div className="xp-inline-div">
                        <li>Landing Page, Freelance</li>
                        <p className="xp-info-text">01/10/2023, HTML, CSS, JS</p>
                    </div>
                    <div className="xp-inline-div">
                        <li>Landing Page, Freelance</li>
                        <p className="xp-info-text">14/04/2023, HTML, CSS, JS</p>
                    </div>
                    <div className="xp-inline-div">
                        <li>Landing Page, Freelance</li>
                        <p className="xp-info-text">24/01/2023, HTML, CSS, JS</p>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default PreviousXP;