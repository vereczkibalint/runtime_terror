import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { PREFIX } from './config';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
                <Route exact path={`${PREFIX}/register`} component={Register} />
                <Route exact path={`${PREFIX}/login`} component={Home} />
                <Route exact path={`${PREFIX}/settings`} component={Home} />
              </Switch>
            </Container>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
