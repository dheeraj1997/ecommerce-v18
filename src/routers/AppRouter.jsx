import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import * as ROUTES from "../constants/routes";
import ErrorPage from "./ErrorPage";
import {default as Homepage} from "../containers/Home";
import Navigation from "../components/common/Navigation";
import {createBrowserHistory} from "history";

export const history = createBrowserHistory();

export const AppRouter = () => (
  <Router history={history}>
    <Navigation />
    <Switch>
      <Route path={ROUTES.HOME} component={Homepage}></Route>
      <Route path="*" element={ErrorPage}></Route>
    </Switch>
  </Router>
)