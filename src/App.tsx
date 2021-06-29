import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <main className="App">
        <div className="App-container">
          <Switch>
            <Route exact path="/"><HomePage title="sandbox" /></Route>
            <Route exact path="/login"></Route>
          </Switch>
        </div>
      </main>
    );
  }
}

export default App;
