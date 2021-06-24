import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Switch, } from "react-router-dom";
import './AppNew.css';
import { SectionPath } from '../constants';
import HeaderComponent from '../component/Header/HeaderComponent';
import WhoAmIComponent from '../component/Sections/WhoAmIComponent';
import CareerOverviewComponent from '../component/Sections/CareerOverview/CareerOverviewComponent';

export default function AppNew(): ReactElement {
  return (
    <BrowserRouter>
      <div className="App-new">
        <HeaderComponent />
        <div className="App-new-body">
          <Switch>
            <Route path={SectionPath.WhoAmI} component={WhoAmIComponent} />
            <Route path={SectionPath.CareerOverview} component={CareerOverviewComponent} />
            <Route path={SectionPath.DomainKnowledge} component={WhoAmIComponent} />
            <Route path={SectionPath.TechnicalSkills} component={WhoAmIComponent} />
            <Route path={SectionPath.PersonalGitRepositories} component={WhoAmIComponent} />
            <Route path={SectionPath.Certifications} component={WhoAmIComponent} />
            <Route path={SectionPath.PublicationsandWebinars} component={WhoAmIComponent} />
            <Route path={SectionPath.AwardsAchievements} component={WhoAmIComponent} />
            <Route path={SectionPath.Trainings} component={WhoAmIComponent} />
            <Route path={SectionPath.Attainments} component={WhoAmIComponent} />
            <Route path={SectionPath.OrganisationalExperience} component={WhoAmIComponent} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}
