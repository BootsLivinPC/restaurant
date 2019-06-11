import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import BarHome from './components/BarHome';
import {Container, } from 'semantic-ui-react';
import Menu from "./components/Menu"
import About from "./components/About"
import NavBar from "./components/NavBar"

const App = () => (
  <>
  <NavBar />
  <Container>
    <Switch>
  <Route exact path="/" component={BarHome} />
  <Route exact path="/about" component={About} />
  <Route path="/bar/bar_id/menu/id" componenet={Menu} />

  </Switch>
  </Container>
  </>
);

export default App;