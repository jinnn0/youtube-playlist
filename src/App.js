import React from 'react';
import Player from './components/Player';
import { Route, Switch } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';

const App = () => (
  <div className="App">
    <GlobalStyle />
    <Switch>
      <Route exact path="/" component={Player} />
      <Route exact path="/:activeVideo" component={Player} />
    </Switch>
  </div>
);

export default App;
