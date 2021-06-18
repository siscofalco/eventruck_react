import React from 'react';
import { Route, Switch } from 'react-router-dom';

import WelcomePage from './pages/welcome-page';
import './App.css';
import SignUpOptions from './pages/signup-options/SignUpOptions';
import ErrorPage from './pages/error-page/ErrorPage';
import RegisterFT from './pages/register-foodtruck/RegisterFoodtruck';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/signup" component={SignUpOptions} />
        <Route exact path="/signup-client" />
        <Route exact path="/signup-owner" />
        <Route exact path="/foodtruck/register" component={RegisterFT} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
