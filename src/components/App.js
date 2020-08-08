import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { HireMe } from './pages/HireMe';
import { Main } from './pages/Main';
import { ContentIndex } from './pages/ContentIndex';

import { Header } from './global/Header';
import { Footer } from './global/Footer';
import '../css/index.scss';

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path='/resume'></Route>
        <Route path='/editorial-content'>
          <ContentIndex type='editorial' />
        </Route>
        <Route path='/branded-content'>
          <ContentIndex type='branded' />
        </Route>
        <Route path='/hire-me'>
          <HireMe />
        </Route>
        <Route path='/'>
          <Main />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
