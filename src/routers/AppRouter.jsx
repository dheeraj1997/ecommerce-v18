import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import * as ROUTES from "../constants/routes";
import ErrorRoute from "./ErrorRoute";
import {default as Homepage} from "../containers/Home";
import Navigation from "../components/common/Navigation";
import {createBrowserHistory} from "history";
import SignUp from "../containers/Auth/signup";
import SignIn from "../containers/Auth/signin";
import CheckoutStep1 from "../containers/Checkout/step1"
import PublicRoute from "./PublicRoute";
import {Cart} from "../components/cart";
import ClientRoute from "./ClientRoute";

export const history = createBrowserHistory();

export const AppRouter = () => (
  <Router history={history} basename={process.env.PUBLIC_URL}>
    <>
      <Navigation />
      <Cart />
      <Switch>
        <Route path={ROUTES.HOME} component={Homepage} exact />
        <PublicRoute path={ROUTES.SIGNUP} component={SignUp} exact />
        <PublicRoute path={ROUTES.SIGNIN} exact component={SignIn} />
        <ClientRoute path={ROUTES.CHECKOUT_STEP_1} exact component={CheckoutStep1} />
        <PublicRoute component={ErrorRoute} />
      </Switch>
    </>
  </Router>
)