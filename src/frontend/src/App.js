import React, { Fragment } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { PREFIX } from "./config";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import Milestones from "./components/milestones/Milestones";
import Expenditures from "./components/expenditures/Expenditures";
import Incomes from "./components/incomes/Incomes";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./routing/PrivateRoute";
import Accounts from "./components/accounts/Accounts";
import { connect } from "react-redux";
import api from "./utils/api";

const App = ({ auth: { isAuthenticated, token } }) => {
  if (isAuthenticated) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }

  return (
    <Fragment>
      <div className="d-flex align-items-stretch w-100">
        <Navbar />
        <Container fluid>
          <Switch>
            <Route exact path={`${PREFIX}/`} component={Home} />
            <PrivateRoute
              exact
              path={`${PREFIX}/accounts`}
              component={Accounts}
            />
            <PrivateRoute
              exact
              path={`${PREFIX}/expenditures`}
              component={Expenditures}
            />
            <PrivateRoute
              exact
              path={`${PREFIX}/incomes`}
              component={Incomes}
            />
            <PrivateRoute exact path={`${PREFIX}/stats`} component={Home} />
            <PrivateRoute
              exact
              path={`${PREFIX}/milestones`}
              component={Milestones}
            />
            <Route exact path={`${PREFIX}/register`} component={Register} />
            <Route exact path={`${PREFIX}/login`} component={Login} />
            <PrivateRoute exact path={`${PREFIX}/settings`} component={Home} />
          </Switch>
        </Container>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(App);
