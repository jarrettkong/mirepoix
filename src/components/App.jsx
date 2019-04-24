import React, { Component } from 'react';
import axios from 'axios';
import SearchResults from './SearchResults';
import Search from './Search';
import Location from './Location';
import './App.scss';

const YELP_API_KEY = process.env.REACT_APP_YELP_API_KEY;
const YELP_BASE_URL = process.env.REACT_APP_YELP_BASE_URL;

class App extends Component {
	state = {
		results: []
	};

	getResults = async ({ term, location }) => {
		try {
			const res = await axios.get(YELP_BASE_URL, {
				headers: {
					Authorization: `Bearer ${YELP_API_KEY}`
				},
				params: {
					term,
					location,
					categories: 'restaurants'
				}
			});
			this.setState({ results: res.data.businesses });
		} catch (err) {
			console.log(err.message);
		}
	};

	render() {
		return (
			<section className="App">
				<h1>Culinarian</h1>
				<Search getResults={this.getResults} />
				<Location />
				<SearchResults results={this.state.results} />
			</section>
		);
	}
}

export default App;
