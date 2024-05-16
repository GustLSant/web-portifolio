import React from 'react'
import PropTypes from "prop-types"
import { useParams } from "react-router-dom"

import HeaderNavbar from './components/HeaderNavbar/HeaderNavbar';
import IntroSection from './components/IntroSection/IntroSection';
import SkillsSection from './components/SkillsSection/SkillsSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import PreviousXP from './components/PreviousXP/PreviousXP';
import AboutMeSection from './components/AboutMeSection/AboutMeSection';

import './App.css';


function App(props){
  const [showHeaderBar, setShowHeaderBar] = React.useState(false)
  const introRef = React.useRef(null)
  const { language } = useParams()


  function handleScroll(){
    setShowHeaderBar( window.scrollY > introRef.current.getBoundingClientRect().height )
  };


  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className="app">
      <IntroSection introRef={introRef} language={language} />
      <SkillsSection                    language={language} />
      {(showHeaderBar) && <HeaderNavbar language={language} />}
      <ProjectsSection                  language={language} />
      <PreviousXP                       language={language} />
      <AboutMeSection                   language={language} />
    </div>
  );
}

App.propTypes = {
  language: PropTypes.string
}

export default App;
