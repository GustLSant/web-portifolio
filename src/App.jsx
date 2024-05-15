import React from 'react'

import HeaderNavbar from './components/HeaderNavbar/HeaderNavbar';
import IntroSection from './components/IntroSection/IntroSection';
import SkillsSection from './components/SkillsSection/SkillsSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import PreviousXP from './components/PreviousXP/PreviousXP';
import AboutMeSection from './components/AboutMeSection/AboutMeSection';

import './App.css';


function App(){
  const [showHeaderBar, setShowHeaderBar] = React.useState(false)
  const introRef = React.useRef(null)


  function handleScroll(){
    setShowHeaderBar( window.scrollY > introRef.current.getBoundingClientRect().height )
  };


  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);






  return (
    <div className="app">
      <IntroSection introRef={introRef} />
      <SkillsSection />
      {(showHeaderBar) && <HeaderNavbar />}
      <ProjectsSection />
      <PreviousXP />
      <AboutMeSection />
    </div>
  );
}

export default App;
