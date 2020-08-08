import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { HireMe } from './pages/HireMe';
import { Main } from './pages/Main';
import { ContentIndex } from './pages/ContentIndex';
import { Article } from './pages/Article';
import { Header } from './global/Header';
import { Footer } from './global/Footer';
import '../css/index.scss';

function importAll(r) {
  return r.keys().map(r);
}

// import branded content
const brandedContent = importAll(
  require.context('../lib/branded-content', false, /\.json$/)
);

// import editorial content
const editorialContent = importAll(
  require.context('../lib/editorial-content', false, /\.json$/)
);


function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path='/resume'></Route>
        {
          editorialContent.map((content) => (
            <Route key={content.seo} path={`/editorial-content/${content.seo}`}>
              <Article content={content} />
            </Route>
          ))
        }
        <Route path='/editorial-content'>
          <ContentIndex type='editorial' content={editorialContent} />
        </Route>
        <Route path='/branded-content'>
          <ContentIndex type='branded' content={brandedContent} />
        </Route>
        {
          brandedContent.map((content) => (
            <Route key={content.seo} path={`/branded-content/${content.seo}`}>
              <Article content={content} />
            </Route>
          ))
        }
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
