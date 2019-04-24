import React, { Component } from 'react';
import axios from 'axios';
import SearchResults from './SearchResults';
import Search from './Search';
import Location from './Location';
import './App.scss';

const yelpKey = process.env.REACT_APP_YELP_API_KEY;

class App extends Component {
	state = {
		results: []
	};

	getResults = async info => {
		// const res = await axios.get('https://api.yelp.com/v3/businesses/search', {
		// 	headers: {
		// 		Authorization:
		// 			'Ht7TR9L8_8gYRHWmLhwVAkhxucLGCF5xX5_TIXDqOSVBBEKZJ9rX_7VE3JrOYPdW39GW9jNtMXMxulMslkFXotM6dPhOTW9gNdNn1xIyfZUOr05f5j6CqpbfSH2fXHYx'
		// 	},
		// 	params: {
		// 		term: info.query,
		// 		location: info.location
		// 	}
		// });
		console.log(yelpKey);
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
