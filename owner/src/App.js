import React from 'react';
import { Route, } from 'react-router-dom';
import BarHome from './components/BarHome';

const App = () => (
  <Route exact path="/" component={BarHome} />
  
);

export default App;