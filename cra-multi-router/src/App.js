import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import { Divider } from '@arco-design/web-react';


/**
 * 用法，直接在 /demo 文件夹中新增文件
 * 最好前缀数字，防止乱序，便于寻找
 */
function App() {
  const routes = [];
  const files = require.context('./demo', true, /\.js$/)
  files.keys().forEach(key => {
    routes.push({
      name: key.replace('./', '').replace('.js', ''),
      component: files(key).default,
    })
  })

  return (
    <div className="App-container">
      <Router>
        <div>
          <ul>
            {
              routes.map((item, index) => (
                <li key={index}>
                  <Link to={item.name}>{item.name}</Link>
                </li>
              ))
            }
          </ul>
          <Divider />
          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Switch>
            {
              routes.map((item, index) => {
                return <Route exact path={'/' + item.name} key={index}>
                  <item.component />
                </Route>
              })
            }
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
