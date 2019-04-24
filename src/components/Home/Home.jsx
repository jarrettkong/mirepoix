import React, { Component } from 'react';
import Search from './Search';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			location: 'Ventura, CA'
		};
	}

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(pos => console.log(pos), err => console.log(err));
	}

	render() {
		return (
			<section className="Home">
				<h1>Culinarian</h1>
				<Search />
				<h2>Location: {this.state.location}</h2>
			</section>
		);
	}
}

export default Home;
