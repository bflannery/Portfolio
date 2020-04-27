import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Home, About, Skills, Work, Contact } from "../pages";

const Router = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            <Route path="/work" component={Work} />
            <Route path="/contact" component={Contact} />
        </Switch>
    );
}

export default Router;
