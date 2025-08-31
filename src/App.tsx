import { useState, useEffect } from "react";
import "./common/App.scss";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Preloader } from "./components/preloader/Preloader";
import { Header } from "./components/header/Header";
import { AboutSection } from "./components/about/AboutSection";
import { SkillsSection } from "./components/skills/SkillsSection";
import { ProjectsSection } from "./components/projects/ProjectsSection";
import { Footer } from "./components/Footer/FooterComponent";
import { WelcomeSection } from "./components/welcome/WelcomeSection";
import { JourneySection } from "./components/journey/JourneySection";
import { sectionVisibility } from "./mockdata/sectionVisibility";
import { UtilitiesSection } from "./components/utils/UtilitiesSection";
import { WelcomeSectionNew } from "./components/welcome/WelcomeSectionNew";

function App() {
  
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 100);
  }, []);

  return (
    <>
      <Preloader load={load} />
      <div className="App">
        <Header />
        {sectionVisibility.welcomeSectionNew && <WelcomeSectionNew />}
        {sectionVisibility.welcomeSection && <WelcomeSection />}
        {sectionVisibility.aboutSection && <AboutSection />}
        {sectionVisibility.skillsSection && <SkillsSection />}
        {sectionVisibility.journeySection && <JourneySection />}
        {sectionVisibility.projectSection && <ProjectsSection />}
        {sectionVisibility.dashboardSection && <UtilitiesSection />}
        <Footer />
      </div>
    </>
  );
}
export default App;
