import React, { Component } from 'react';

class Location extends Component {
	state = {
		location: null,
		error: null
	};

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			pos => {
				this.setState({ location: pos.coords.latitude }, () => {
					console.log(this.state.location);
				});
			},
			err => {
				this.setState({ error: err.message });
			}
		);
	}

	render() {
		if (this.state.location) {
			return <h2>Location: {this.state.location}</h2>;
		} else if (this.state.error) {
			return <h2>Error: {this.state.error}</h2>;
		} else {
			return <h2>Finding your current location...</h2>;
		}
	}
}

export default Location;
