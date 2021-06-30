import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage';

import 'styles/_app.scss';


class App extends React.Component {
  render() {
    return (
      <main className="App">
        <Switch>
          <Route exact path="/"><HomePage title="S a n d b o x" /></Route>
          <Route exact path="/login"></Route>
        </Switch>
      </main>
    );
  }
}

export default App;
