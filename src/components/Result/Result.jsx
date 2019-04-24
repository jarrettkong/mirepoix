import React from 'react';
import PropTypes from 'prop-types';

const Result = props => {
	const {
		name,
		rating,
		price,
		is_closed: closed,
		review_count: reviewCount,
		categories,
		url,
		image_url: image,
		location: { address1: address },
		distance
	} = props.result;

	return (
		<article className="Result">
			<h3 className="Result-name">{name}</h3>
			<p>{address}</p>
		</article>
	);
};

Result.propTypes = {
	result: PropTypes.object.isRequired
};

export default Result;
