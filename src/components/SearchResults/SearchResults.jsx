import React from 'react';
import Result from '../Result/Result';
import PropTypes from 'prop-types';

const SearchResults = props => {
	return (
		<section className="SearchResults">
			{props.results.map(result => {
				return <Result key={result.id} result={result} />;
			})}
		</section>
	);
};

SearchResults.propTypes = {
	results: PropTypes.array.isRequired
};

export default SearchResults;
