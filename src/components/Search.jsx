import React, { Component } from 'react';

class Search extends Component {
	state = {
		location: '',
		term: ''
	};

	_handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	_handleSubmit = e => {
		e.preventDefault();
		this.props.getResults(this.state);
	};

	render() {
		return (
			<form className="Search" onSubmit={this._handleSubmit}>
				<label htmlFor="Search-form-city">City</label>
				<input
					name="location"
					value={this.state.location}
					type="text"
					id="Search-form-city"
					placeholder="Location"
					onChange={this._handleChange}
				/>
				<label htmlFor="Search-form-query">Name</label>
				<input
					name="term"
					value={this.state.term}
					type="text"
					id="Search-form-query"
					placeholder="Restaurant"
					onChange={this._handleChange}
				/>
				<input type="submit" value="Search" />
			</form>
		);
	}
}

export default Search;
