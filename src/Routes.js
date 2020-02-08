import React from "react";
import {Switch, Route} from "react-router-dom";

import Main from "./components/Main";
import DeveloperLogin from "./components/Developer/Login";
import DeveloperHome from "./components/Developer/Home";
import SiteManagement from "./components/Developer/SiteManagement/Products";
import Scenarios from "./components/Scenarios";
import Scenario from "./components/Scenario";
import AboutUs from "./components/About";

export default (
    <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/Developer/Login" component={DeveloperLogin} />
        <Route path="/Developer/Home" component={DeveloperHome} />
        <Route path="/SiteManagement/Products" component={SiteManagement} />
        <Route path="/Scenarios" component={Scenarios} />
        <Route path="/Scenario/:scenario_id" component={Scenario} />
        <Route path="/About" component={AboutUs} />
    </Switch>
)