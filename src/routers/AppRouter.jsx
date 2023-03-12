import {createBrowserHistory} from 'history';
import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import * as ROUTES from "../constants/routes";
import ErrorPage from "./ErrorPage";
import {default as Homepage} from "../containers/Home";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Homepage/>,
    errorElement: <ErrorPage/>
  }
])

export const AppRouter = () => (
  <RouterProvider router={router}/>
)