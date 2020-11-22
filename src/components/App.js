import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import ScrollToTop from '../lib/utilities/ScrollToTop';
import { HireMe } from './pages/HireMe';
import { Main } from './pages/Main';
import { ContentIndex } from './pages/ContentIndex';
import { Article } from './pages/Article';
// import { Resume } from './pages/Resume';
import { Header } from './global/Header';
import { Footer } from './global/Footer';
import '../css/index.scss';

import brandedContent from '../lib/branded-content.json';
import editorialContent from '../lib/editorial-content.json';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <Switch>
        {
          editorialContent.map((content) => (
            <Route key={content.seo} path={`/editorial-content/${content.seo}`}>
              <Article type='editorial' content={content} />
            </Route>
          ))
        }
        <Route path='/editorial-content'>
          <ContentIndex type='editorial' content={editorialContent} />
        </Route>
        {
          brandedContent.map((content) => (
            <Route key={content.seo} path={`/branded-content/${content.seo}`}>
              <Article type='branded' content={content} />
            </Route>
          ))
        }
        <Route path='/branded-content'>
          <ContentIndex type='branded' content={brandedContent} />
        </Route>
        <Route path='/hire-me'>
          <HireMe />
        </Route>
        {/* <Route path='/resume'>
          <Resume />
        </Route> */}
        <Route path='/'>
          <Main />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
