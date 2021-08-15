import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import About from './mycomponents/About'
import Contact from './mycomponents/Contact'
import Portfolia from './mycomponents/Portfolia'
import {Route,Link,BrowserRouter as Router} from '../node_modules/react-router-dom';

const myrouter=(
  <Router>
    <div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/portfolia">Portfolia</Link>
      </ul>
      <Route exact path="/" component={App}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/portfolia" component={Portfolia}/>
    </div>
  </Router>
)




ReactDOM.render(myrouter,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
