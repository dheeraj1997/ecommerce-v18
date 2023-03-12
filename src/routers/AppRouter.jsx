import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import * as ROUTES from "../constants/routes";
import ErrorPage from "./ErrorPage";
import {default as Homepage} from "../containers/Home";
import Navigation from "../components/common/Navigation";
import {createBrowserHistory} from "history";
import SignUp from "../containers/auth/signup";
import SignIn from "../containers/auth/signin";
import PublicRoute from "./PublicRoute";
import Cart from "../components/cart/cart";

export const history = createBrowserHistory();

export const AppRouter = () => (
  <Router history={history}>
    <>
      <Navigation />
      <Cart />
      <Switch>
        <Route path={ROUTES.HOME} component={Homepage} exact />
        <PublicRoute path={ROUTES.SIGNUP} component={SignUp} exact />
        <PublicRoute path={ROUTES.SIGNIN} exact component={SignIn} exact />
        <Route path="*" element={ErrorPage}></Route>
      </Switch>
    </>
  </Router>
)