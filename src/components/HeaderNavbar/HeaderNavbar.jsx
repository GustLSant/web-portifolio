import React from "react"
import { animateScroll } from 'react-scroll';

import { MdMenu } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import "./HeaderNavbar.css"


function HeaderNavbar(props){
    const [isOpen, setIsOpen] = React.useState(false)
    const lg = props.language


    function onSectionButtonClick(_className){
        animateScroll.scrollTo(
            document.getElementsByClassName(_className)[0].getBoundingClientRect().top - ((_className === "projects-section") ? 59 : 65) + window.scrollY,
            {
                duration: 1000,
                smooth: 'easeInOutQuart'
            }
        )
    }


    return (
        <div className="header-navbar">
            
            <div className="header-navbar__bar">
                <p className="header-navbar__logo">GS</p>
                {(isOpen)?<MdKeyboardDoubleArrowRight onClick={()=>{setIsOpen(!isOpen)}} />:<MdMenu onClick={()=>{setIsOpen(!isOpen)}} />}
            </div>
            
            {
                <div className={`header-navbar__menu ${(isOpen)}`} >
                    <nav className="black-section" style={{pointerEvents: (isOpen) ? "fill" : "none"}}>
                        <p onClick={()=>{onSectionButtonClick("about-me-section")}}> {(lg === "pt" ? "SOBRE MIM" : "ABOUT ME")}       </p>
                        <p onClick={()=>{onSectionButtonClick("skills-section")}}>   {(lg === "pt" ? "HABILIDADES" : "SKILLS")}       </p>
                        <p onClick={()=>{onSectionButtonClick("projects-section")}}> {(lg === "pt" ? "PROJETOS" : "PROJECTS")}        </p>
                        <p onClick={()=>{onSectionButtonClick("previous-xp")}}>      {(lg === "pt" ? "EXPERIÊNCIAS" : "EXPERIENCES")} </p>
                    </nav>
                </div>
            }

        </div>
    );
}

export default HeaderNavbar;