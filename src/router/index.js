import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Home, About, SkillHTML, Skills, Contact } from "../pages";

const Router = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} exact />
            <Route path="/skills" component={Skills} exact />
            <Route path="/skills/html" component={SkillHTML} exact />
            <Route path="/contact" component={Contact} exact />
        </Switch>
    );
}

export default Router;
