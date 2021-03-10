import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { PREFIX } from './config';
import Home from './components/pages/Home';

const App = () => {
  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path={`${PREFIX}/`} component={Home} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
