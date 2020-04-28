import React from 'react';
import { BrowserRouter, Route, Link, Redirect, withRouter, Switch, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/login'
import Signup from './pages/signup'
import Dashboard from './pages/dashbord'
import Top25Crypto from './pages/top25crypto'
import MyFavourites from './pages/myFavourites'


function App() {
  return (
    <Router>
      <Switch>
          <Route path="/favourites">
            <MyFavourites/>
          </Route>
          <Route path='/top25crypto'>
            <Top25Crypto/>
          </Route>
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
