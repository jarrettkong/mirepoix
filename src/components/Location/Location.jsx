import React, { Component } from 'react';
import { LocationOnOutlined as LocationIcon } from '@material-ui/icons';
import './_Location.scss';
import axios from 'axios';
import Ipinfo from '../../api/Ipinfo';

class Location extends Component {
	state = {
		location: null,
		error: null
	};

	// async componentDidMount() {
	// 	try {
	// 		const res = await Ipinfo.get('/geo');
	// 		console.log(res);
	// 		this.setState({ location: res.data.city });
	// 	} catch (err) {
	// 		console.log(err.message);
	// 	}
	// }

	render() {
		if (this.state.location) {
			return (
				<h2 className="Location">
					<span>
						<LocationIcon />
					</span>{' '}
					{this.state.location}
				</h2>
			);
		} else if (this.state.error) {
			return (
				<h2 className="Location">
					<span>
						<LocationIcon />
					</span>{' '}
					{this.state.error}
				</h2>
			);
		} else {
			return (
				<h2 className="Location">
					<span>
						<LocationIcon />
					</span>{' '}
					Searching...
				</h2>
			);
		}
	}
}

export default Location;
