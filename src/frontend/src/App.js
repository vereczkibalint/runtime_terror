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
import PrivateRoute from "./routing/PrivateRoute"

const App = () => {
  return (
    <Fragment>
      <div className="d-flex align-items-stretch w-100">
        <Navbar />
        <Container fluid>
          <Switch>
            <Route exact path={`${PREFIX}/`} component={Home} />
            <PrivateRoute exact path={`${PREFIX}/accounts`} component={Home} />
            <PrivateRoute
              exact
              path={`${PREFIX}/expenditures`}
              component={Expenditures}
            />
            <PrivateRoute exact path={`${PREFIX}/incomes`} component={Incomes} />
            <PrivateRoute exact path={`${PREFIX}/stats`} component={Home} />
            <PrivateRoute exact path={`${PREFIX}/milestones`} component={Milestones} />
            <Route exact path={`${PREFIX}/register`} component={Register} />
            <Route exact path={`${PREFIX}/login`} component={Login} />
            <PrivateRoute exact path={`${PREFIX}/settings`} component={Home} />
          </Switch>
        </Container>
      </div>
    </Fragment>
  );
};

export default App;
