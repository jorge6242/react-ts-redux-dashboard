import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Dashboard from "../containers/dashboard";
import Product from "../containers/product";
import Modal from "../components/Modal";
import MainLayout from "../Hoc/MainLayout";
import SnackBar from "../components/SnackBar";
import Login from "../containers/login";

import SecureStorage from "./SecureStorage";
import Category from "../containers/category";

export default function Routes() {

  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route
            path="/dashboard"
            exact={false}
            component={() => {
                return (
                  <Switch>
                    <Dashboard>
                      <Route
                        path="/dashboard/product"
                        exact
                        component={Product}
                      />
                    </Dashboard>
                  </Switch>
                );
            }}
          />
        </Switch>
        <Modal />
        <SnackBar />
      </MainLayout>
    </Router>
  );
}
