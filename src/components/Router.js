import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";
import App from "../App";
import NotFound from "./NotFound";
const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/notes/:userKey" component={App} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  );
};

export default Router;
