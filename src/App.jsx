import IntroSection from './components/IntroSection/IntroSection';
import SkillsSection from './components/SkillsSection/SkillsSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';

import './App.css';


function App() {
  return (
    <div className="app">
      <IntroSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
