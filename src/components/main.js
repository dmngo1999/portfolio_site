import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import aboutme from './aboutme';
import contact from './contact';
import projects from './projects';
import resume from './resume';
import cheps from './projects/cheps';
import angelHack from './projects/angelHack';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/aboutme" component={aboutme}/>
        <Route path="/projects" component={projects}/>
        <Route path="/resume" component={resume}/>
        <Route path="/cheps" component={cheps}/>
        <Route path="/angelHack" component={angelHack}/>


    </Switch>
)

export default Main;