import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import { Divider } from '@arco-design/web-react';

// import Main from './pages/main'
// import About from './pages/about'

// dynamic import
const Main = React.lazy(() => import('./pages/main'))
const About = React.lazy(() => import('./pages/about'))

function App() {
  return (
    <div className="App-container">
      <Router>
        <div>
          <ul>
            <li key='main'>
              <Link to='/main'>main</Link>
            </li>
            <li key='about'>
              <Link to='/about'>about</Link>
            </li>
          </ul>
          <Divider />

          <Switch>
            <Route exact path='/main' key='main'>
              <React.Suspense fallback='loading'>
                <Main />
              </React.Suspense>
            </Route>
            <Route exact path='/about' key='about'>
              <React.Suspense fallback='loading'>
                <About />
              </React.Suspense>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
