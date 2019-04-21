import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <section className="App">
        <Switch>
          <Route exact path="/" render={() => <Home />} />
        </Switch>
      </section>
    );
  }
}

export default App;
