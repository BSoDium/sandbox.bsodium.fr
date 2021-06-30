import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <main className="App">
        <Switch>
          <Route exact path="/"><HomePage title="Sandbox" /></Route>
          <Route exact path="/login"></Route>
        </Switch>
      </main>
    );
  }
}

export default App;
