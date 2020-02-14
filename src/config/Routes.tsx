import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useDispatch } from 'react-redux';

import Dashboard from "../containers/dashboard";
import Product from "../containers/product";
import Modal from "../components/Modal";
import MainLayout from "../Hoc/MainLayout";
import SnackBar from "../components/SnackBar";
import Login from "../containers/login";
import SecureStorage from "./SecureStorage";
import Category from "../containers/category";
import { checkUser } from "../actions/loginActions"

export default function Routes() {
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkUser())
  }, [dispatch])
  
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" exact component={Login} />
          <Route
            path="/dashboard"
            exact={false}
            component={() => {
              if (SecureStorage.getItem("token")) {
                return (
                  <Switch>
                    <Dashboard>
                      <Route
                        path="/dashboard/product"
                        exact
                        component={Product}
                      />
                      <Route
                        path="/dashboard/category"
                        exact
                        component={Category}
                      />
                    </Dashboard>
                    >
                  </Switch>
                );
              }
              return <Redirect to="/login" />;
            }}
          />
        </Switch>
        <Modal />
        <SnackBar />
      </MainLayout>
    </Router>
  );
}
