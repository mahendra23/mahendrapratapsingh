import React, { useState, useEffect } from "react";
import { BrowserRouter  as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import Footer from "./components/Footer/FooterComponent";
import Header from "./components/header/Header";
import Preloader from "./components/preloader/Preloader";
import WelcomeSection from "./components/welcome/WelcomeSection";
import ExperienceSection from './components/experience/ExperienceSection';
import ProjectsSection from './components/projects/ProjectsSection';
import AboutSection from './components/about/AboutSection';
import SkillsSection from './components/skills/SkillsSection';

function App() {
  
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 100);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/mahendrapratapsingh" component={WelcomeSection} />
          <Route exact path="/mahendrapratapsingh/About" component={AboutSection} />
          <Route exact path="/mahendrapratapsingh/Experience" component={ExperienceSection} />
          <Route exact path="/mahendrapratapsingh/Skills" component={SkillsSection} />
          <Route exact path="/mahendrapratapsingh/Projects" component={ProjectsSection} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
