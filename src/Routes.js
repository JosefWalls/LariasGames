import React from "react";
import {Switch, Route} from "react-router-dom";

import Main from "./components/Main";
import DeveloperLogin from "./components/Developer/Login";
import DeveloperHome from "./components/Developer/Home";
import SiteManagement from "./components/Developer/SiteManagement/Products";
import Scenarios from "./components/Scenarios";

export default (
    <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/Developer/Login" component={DeveloperLogin} />
        <Route path="/Developer/Home" component={DeveloperHome} />
        <Route path="/SiteManagement/Products" component={SiteManagement} />
        <Route path="/Scenarios" component={Scenarios} />
    </Switch>
)