import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { PREFIX } from './config';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    <Router>
      <div className='d-flex align-items-stretch w-100'>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path={`${PREFIX}/`} component={Home} />
            <Route exact path={`${PREFIX}/accounts`} component={Home} />
            <Route exact path={`${PREFIX}/expenditures`} component={Home} />
            <Route exact path={`${PREFIX}/income`} component={Home} />
            <Route exact path={`${PREFIX}/stats`} component={Home} />
            <Route exact path={`${PREFIX}/milestones`} component={Home} />
            <Route exact path={`${PREFIX}/register`} component={Home} />
            <Route exact path={`${PREFIX}/login`} component={Home} />
            <Route exact path={`${PREFIX}/settings`} component={Home} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
};

export default App;
