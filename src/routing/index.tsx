import React from "react";
import Home from "../screens/home";
import Contact from "../screens/contact";
import NotFound from "../screens/notFound";
import { HashRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import { Page } from "../services/NavigationManager";
import Requests from "../screens/requests";
import SuccessRequest from "../screens/successRequest";
import Project from "../screens/project";

const Routing = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path={Page.contact} exact component={Contact} />
          <Route path={Page.requests} exact component={Requests} />
          <Route path={Page.successRequest} exact component={SuccessRequest} />
          <Route path={Page.home} exact component={Home} />
          <Route path={Page.projects} component={Project} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routing;
