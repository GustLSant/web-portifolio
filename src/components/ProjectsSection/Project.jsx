import React from "react";
import PropTypes from "prop-types"
import "./Project.css"


function Project(props){
    const [currentTab, setCurrentTab] = React.useState(1)
    const divScreenshots = React.useRef(null)
    const lg = props.language
    
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
            // const scrollSpeed = 0.01;
            const scrollAmount = 2;
            
            // if(deltaX > 0){ divScreenshots.current.scrollLeft -= divScreenshots.current.offsetWidth * scrollSpeed; }
            // else{ divScreenshots.current.scrollLeft += divScreenshots.current.offsetWidth * scrollSpeed; }
            if(deltaX > 0){ divScreenshots.current.scrollLeft -= scrollAmount; }
            else{ divScreenshots.current.scrollLeft += scrollAmount; }
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
                    <p className="project-screenshots-container__scroll-indicator">❮❮ {(lg === "pt") ? "Possui Rolagem Horizontal" : "Has Horizontal Scrolling"} ❯❯</p>
                </div>

                <div className="project__text-content-container">
                    <div className="project__text-buttons-container">
                        <div className={`project__text-button ${(currentTab === 0)?"active":""}`} onClick={()=>{setCurrentTab(0)}}>
                            {(lg === "pt") ? "Descrição" : "Description"}
                        </div>
                        <div className={`project__text-button ${(currentTab === 1)?"active":""}`} onClick={()=>{setCurrentTab(1)}}>
                            {(lg === "pt") ? "Funcionalidades" : "Features"}
                        </div>
                        <div className={`project__text-button ${(currentTab === 2)?"active":""}`} onClick={()=>{setCurrentTab(2)}}>
                            {(lg === "pt") ? "Tecnologias" : "Technologies"}
                        </div>
                    </div>
                    {
                        (currentTab===0)  &&
                        props.contents[0] && 
                        props.contents[0].map((item, idx)=>{ return(
                            <p key={idx} className="project__text">{item}</p>
                        )})
                    }
                    {
                        (currentTab===1)  &&
                        props.contents[1] && 
                        props.contents[1].map((item, idx)=>{ return(
                            <p key={idx} className="project__text">{item}</p>
                        )})
                    }
                    {
                        (currentTab===2)  &&
                        props.contents[2] && 
                        props.contents[2].map((item, idx)=>{ return(
                            <p key={idx} className="project__text">{item}</p>
                        )})
                    }
                </div>
            </div>

        </div>
    );
}

Project.propTypes = {
    label: PropTypes.string,
    link: PropTypes.string,
    miniScreenshotsArray: PropTypes.array,
    contents: PropTypes.array,
    language: PropTypes.string
}

export default Project;