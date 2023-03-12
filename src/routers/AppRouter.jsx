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
import Cart from "../components/cart/cart";
import ClientRoute from "./ClientRoute";

export const history = createBrowserHistory();

export const AppRouter = () => (
  <Router history={history}>
    <>
      <Navigation />
      <Cart />
      <Switch>
        <Route path={ROUTES.HOME} component={Homepage} exact />
        <PublicRoute path={ROUTES.SIGNUP} component={SignUp} exact />
        <PublicRoute path={ROUTES.SIGNIN} exact component={SignIn} />
        <Route path="*" element={ErrorRoute} />
        <ClientRoute path={ROUTES.CHECKOUT_STEP_1} component={CheckoutStep1} />
      </Switch>
    </>
  </Router>
)