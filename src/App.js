import React from 'react';
import { BrowserRouter, Route, Link, Redirect, withRouter, Switch, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/login'
import Signup from './pages/signup'
import Dashboard from './pages/dashbord'
import fire from './util/fire'



function App() {
  const user=fire.auth().currentUser;

  

  return (
    <Router>
      <Switch>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
          <Route path="/">
            <Login/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
