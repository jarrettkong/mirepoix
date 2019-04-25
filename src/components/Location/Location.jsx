import React, { Component } from 'react';
import { LocationOnOutlined as LocationIcon } from '@material-ui/icons';
import './_Location.scss';
import Ipinfo from '../../api/Ipinfo';

class Location extends Component {
	state = {
		location: null,
		error: null
	};

	async componentDidMount() {
		try {
			const res = await Ipinfo.get('/json');
			this.setState({ location: res.data.city });
		} catch (err) {
			this.setState({ error: err });
		}
	}

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
