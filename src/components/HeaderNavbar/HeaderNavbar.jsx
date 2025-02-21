import React from "react"
import { animateScroll } from 'react-scroll';

import { MdMenu } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import "./HeaderNavbar.css"


export function scrollTo(_className){
    const navbarHeight = 59
    const scrollOffset = (_className === "skills-section") ? 0 : navbarHeight // the navbar only shows when scroll beyond the text of the skills section

    animateScroll.scrollTo(
        document.getElementsByClassName(_className)[0].getBoundingClientRect().top - (scrollOffset) + window.scrollY,
        {
            duration: 1000,
            smooth: 'easeInOutQuart'
        }
    )
}


function HeaderNavbar(props){
    const [isOpen, setIsOpen] = React.useState('') // comeca com esse valor falsy para nao executar a animacao de fadeOut, quando clicar no botao vai mudar para true ou false normalmente
    const lg = props.language


    return (
        <div className="header-navbar">
            
            <div className="header-navbar__bar">
                <p className="header-navbar__logo">GS</p>
                {(isOpen)?<MdKeyboardDoubleArrowRight onClick={()=>{setIsOpen(!isOpen)}} />:<MdMenu onClick={()=>{setIsOpen(!isOpen)}} />}
            </div>
            
            {
                <div className={`header-navbar__menu ${(isOpen)}`} >
                    <nav className="black-section" style={{pointerEvents: (isOpen) ? "fill" : "none"}}>
                        <p onClick={()=>{scrollTo("skills-section")}}>       {(lg === "pt" ? "HABILIDADES" : "SKILLS")}        </p>
                        <p onClick={()=>{scrollTo("projects-section")}}>     {(lg === "pt" ? "PROJETOS" : "PROJECTS")}         </p>
                        <p onClick={()=>{scrollTo("previous-xp")}}>          {(lg === "pt" ? "EXPERIÊNCIAS" : "EXPERIENCES")}  </p>
                        <p onClick={()=>{scrollTo("certificates-section")}}> {(lg === "pt" ? "CERTIFICADOS" : "CERTIFICATES")} </p>
                        <p onClick={()=>{scrollTo("about-me-section")}}>     {(lg === "pt" ? "SOBRE MIM" : "ABOUT ME")}        </p>
                    </nav>
                </div>
            }

        </div>
    );
}

export default HeaderNavbar;