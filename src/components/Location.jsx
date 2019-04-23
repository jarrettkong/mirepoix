import React, { Component } from 'react';
// import axios from 'axios';

class Location extends Component {
	state = {
		location: null,
		error: null
	};

	async componentDidMount() {
		// try {
		// 	const res = await axios.get('https://ipapi.co/json');
		// 	console.log(res);
		// } catch (err) {
		// 	console.log(err.message);
		// }
		window.navigator.geolocation.getCurrentPosition(
			pos => {
				this.setState({ location: pos.coords.latitude });
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
