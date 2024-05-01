import React from "react";
import PropTypes from "prop-types"
import { GoCircle } from "react-icons/go";
import "./Project.css"


function Project(props){
    const [currentScreenshotIdx, setCurrentScreenshotIdx] = React.useState(0)
    const [screenshotButtons, setScreenshotButtons] = React.useState([])
    const [currentTab, setCurrentTab] = React.useState(0)


    // build change screenshot buttons
    React.useEffect(()=>{
        let newArray = []
        for (let i=0; i<props.screenshotsArray.length; i++) {
            newArray.push(
                <GoCircle key={i} className={`select-image-button ${(currentScreenshotIdx === i) ? "active" : ""}`} onClick={()=>{setCurrentScreenshotIdx(i)}} />
            );
        }
        setScreenshotButtons(newArray)
    }, [currentScreenshotIdx, props.screenshotsArray.length])


    function handleClickRedirect(){
        window.open(props.link, "blank")
    }


    return (
        <div className="project">
            <h3 onClick={handleClickRedirect}>{props.label}</h3>
            
            <div className="project__content-container">
                <div className="project-content-container__screenshot-container">
                    <img src={props.screenshotsArray[currentScreenshotIdx]} className="project-screenshot-miniature" onClick={handleClickRedirect} alt="project screenshot" />
                    <div className="screenshot-container__select-container">
                        {screenshotButtons}
                    </div>
                </div>

                <div className="project__text-content-container">
                    <div className="project__text-buttons-container">
                        <div className="project__text-button" onClick={()=>{setCurrentTab(0)}}>
                            Description
                        </div>
                        <div className="project__text-button" onClick={()=>{setCurrentTab(1)}}>
                            Features
                        </div>
                        <div className="project__text-button" onClick={()=>{setCurrentTab(2)}}>
                            Technologies
                        </div>
                    </div>
                    <p className="project__text">{props.contents[currentTab]}</p>
                </div>
            </div>

        </div>
    );
}

Project.propTypes = {
    label: PropTypes.string,
    link: PropTypes.string,
    screenshotsArray: PropTypes.array,
    contents: PropTypes.array
}

export default Project;