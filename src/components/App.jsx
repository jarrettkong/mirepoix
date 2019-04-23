import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
// import Home from './Home';
import SearchResults from './SearchResults';
import Search from './Search';
import Location from './Location';
import axios from 'axios';
import './App.scss';

class App extends Component {
	state = {
		results: []
	}

	getResults = info => {
		console.log(info)
	}

	render() {
		return (
			<section className="App">
				<h1>Culinarian</h1>
				<Search getResults={this.getResults}/>
				<Location />
				<SearchResults results={this.state.results}/>
			</section>
		);
	}
}

export default App;
