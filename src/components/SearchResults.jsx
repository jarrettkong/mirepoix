import React, { Component } from 'react';
import Restaurant from './Restaurant';

class SearchResults extends Component {
	render() {
		return (
			<section className="SearchResults">
				<h1>SearchResults</h1>
				{this.props.results.map(res => {
					return <Restaurant />;
				})}
			</section>
		);
	}
}

export default SearchResults;
