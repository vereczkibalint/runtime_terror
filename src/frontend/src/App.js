import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { PREFIX } from "./config";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import Milestones from "./components/milestones/Milestones";
import Expenditures from "./components/expenditures/Expenditures";
import Incomes from "./components/incomes/Incomes";
import Register from "./components/auth/register";
import Login from "./components/auth/Login";

const App = () => {
  return (
    <Router>
      <div className="d-flex align-items-stretch w-100">
        <Navbar />
        <Container fluid>
          <Switch>
            <Route exact path={`${PREFIX}/`} component={Home} />
            <Route exact path={`${PREFIX}/accounts`} component={Home} />
            <Route
              exact
              path={`${PREFIX}/expenditures`}
              component={Expenditures}
            />
            <Route exact path={`${PREFIX}/incomes`} component={Incomes} />
            <Route exact path={`${PREFIX}/stats`} component={Home} />
            <Route exact path={`${PREFIX}/milestones`} component={Milestones} />
            <Route exact path={`${PREFIX}/register`} component={Register} />
            <Route exact path={`${PREFIX}/login`} component={Login} />
            <Route exact path={`${PREFIX}/settings`} component={Home} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
};

export default App;
