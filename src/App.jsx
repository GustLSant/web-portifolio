import IntroSection from './components/IntroSection/IntroSection';
import SkillsSection from './components/SkillsSection/SkillsSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import PreviousXP from './components/PreviousXP/PreviousXP';
import AboutMeSection from './components/AboutMeSection/AboutMeSection';

import './App.css';


function App() {
  return (
    <div className="app">
      <IntroSection />
      <SkillsSection />
      <ProjectsSection />
      <PreviousXP />
      <AboutMeSection />
    </div>
  );
}

export default App;
