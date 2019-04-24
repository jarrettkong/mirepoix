import React, { Component } from 'react';
import Yelp from '../../api/Yelp';
import SearchResults from '../SearchResults/SearchResults';
import Search from '../Search/Search';
import Header from '../Header/Header';
import './_App.scss';

class App extends Component {
	state = {
		results: []
	};

	getResults = async ({ term, location }) => {
		try {
			const res = await Yelp.get('/businesses/search', {
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
				<Header />
				<Search getResults={this.getResults} />
				<SearchResults results={this.state.results} />
			</section>
		);
	}
}

export default App;
