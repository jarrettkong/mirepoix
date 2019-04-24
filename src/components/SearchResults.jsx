import React, { Component } from 'react';
import Restaurant from './Restaurant';

class SearchResults extends Component {
	render() {
		return (
			<section className="SearchResults">
				{this.props.results.map(res => {
					return <Restaurant key={res.id} info={res} />;
				})}
			</section>
		);
	}
}

export default SearchResults;
