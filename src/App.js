import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/divisions/Navbar";
import User from "./components/pages/User";
import About from "./components/pages/About";
import Home from "./components/pages/Home";

import GithubState from "./context/github/GithubState";

const App = () => {
  return (
    <GithubState>
      <Router>
        <div className='App'>
          <Navbar title='GitHub Search' />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
