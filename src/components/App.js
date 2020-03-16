import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { HireMe } from './pages/HireMe';
import { Main } from './pages/Main';

import { Header } from './global/Header';
import '../css/index.scss';

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path='/resume'></Route>
        <Route path='/hire-me'><HireMe /></Route>
        <Route path='/'><Main /></Route>
      </Switch>
    </Router>
  );
}

export default App;
