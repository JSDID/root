import React from 'react';
import Header from './Header';
import About from './About';
import Users from './Users';
import Main from './Main';
import './App.css';

import { BrowserRouter as Routes, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
  <>
  <Header/> 
    <Routes>
    <Switch>
      <Route exact path="/Main" component={Main}></Route>
      <Route path="/About" component={About}></Route>
      <Route path="/Users" component={Users}></Route>
    </Switch>
    </Routes>
  </>
  );
}

export default App;
