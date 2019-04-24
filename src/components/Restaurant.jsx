import React from 'react';

const Restaurant = props => {
	const { name } = props.info;
	return (
		<article className="Restaurant">
			<h3 className="Restaurant-name">{name}</h3>
		</article>
	);
};

export default Restaurant;
