import React from "react";
import PropTypes from "prop-types"
import "./Project.css"


function Project(props){
    const [currentTab, setCurrentTab] = React.useState(0)
    const divScreenshots = React.useRef(null)
    
    const[isDragging, setIsDragging] = React.useState(false);
    let prevClientX = 0;
    let wasScrolled = false


    function handleMouseDown(event){
        setIsDragging(true)
        wasScrolled = false
    }


    function handleMouseUp(event){
        setIsDragging(false)
        if(!wasScrolled){ handleClickRedirect() }
    }


    function handleMouseLeave(event){ setIsDragging(false) }


    function handleMouseMove(event){
        if(isDragging){
            const deltaX = event.clientX - prevClientX;
            const scrollSpeed = 2;
            
            if(deltaX > 0){ divScreenshots.current.scrollLeft -= scrollSpeed; }
            else{ divScreenshots.current.scrollLeft += scrollSpeed; }
            wasScrolled = true
            event.preventDefault();

            prevClientX = event.clientX;
        }
    }


    function handleClickRedirect(){ window.open(props.link, "blank") }


    return (
        <div className="project">
            <h3 onClick={handleClickRedirect}>{props.label}</h3>
            
            <div className="project__content-container">
                <div className="project-content-container__screenshot-container">
                    <div className={`project__div-scroll-screenshots ${(isDragging)?"active":""}`} ref={divScreenshots} 
                        onMouseEnter={(e)=>{prevClientX=e.clientX}} 
                        onMouseDown={(e)=>{handleMouseDown(e)}} 
                        onMouseUp={(e)=>{handleMouseUp(e)}} 
                        onMouseLeave={(e)=>{handleMouseLeave(e)}}
                        onMouseMove={(e)=>{handleMouseMove(e)}}
                    >
                        {
                            props.miniScreenshotsArray.map((item, idx)=>{
                                return(
                                    <img key={idx} src={item} className="project-screenshot-miniature" alt="project screenshot" />
                                )
                            })
                        }
                    </div>
                    <p className="project-screenshots-container__scroll-indicator">❮❮ Horizontal Scrolling ❯❯</p>
                </div>

                <div className="project__text-content-container">
                    <div className="project__text-buttons-container">
                        <div className={`project__text-button ${(currentTab === 0)?"active":""}`} onClick={()=>{setCurrentTab(0)}}>
                            Description
                        </div>
                        <div className={`project__text-button ${(currentTab === 1)?"active":""}`} onClick={()=>{setCurrentTab(1)}}>
                            Features
                        </div>
                        <div className={`project__text-button ${(currentTab === 2)?"active":""}`} onClick={()=>{setCurrentTab(2)}}>
                            Technologies
                        </div>
                    </div>
                    { (currentTab === 0) && <p className="project__text">{props.contents[0]}</p> }
                    { (currentTab === 1) && <p className="project__text">{props.contents[1]}</p> }
                    { (currentTab === 2) && <p className="project__text">{props.contents[2]}</p> }
                </div>
            </div>

        </div>
    );
}

Project.propTypes = {
    label: PropTypes.string,
    link: PropTypes.string,
    miniScreenshotsArray: PropTypes.array,
    contents: PropTypes.array
}

export default Project;