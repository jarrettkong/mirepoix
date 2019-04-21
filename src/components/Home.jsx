import React, { Component } from "react";
import Search from './Search';

class Home extends Component {
  render() {
    return (
      <section className="Home">
        <h1>Culinarily</h1>
        <Search />
      </section>
    );
  }
}

export default Home;
