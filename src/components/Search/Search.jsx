import React, { Component } from 'react';
import './_Search.scss';

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
			<section className="Search">
				<div className="Search-form-wrapper">
				<h2 className="Search-tagline">Find the perfect meal tonight</h2>
					<form className="Search-form" onSubmit={this._handleSubmit}>
						<div className="Search-form-input-wrapper">
							<label htmlFor="Search-form-city">City</label>
							<input
								name="location"
								value={this.state.location}
								type="text"
								id="Search-form-city"
								placeholder="Location"
								className="Search-form-input"
								onChange={this._handleChange}
							/>
						</div>
						<div className="Search-form-input-wrapper">
							<label htmlFor="Search-form-query">Name</label>
							<input
								name="term"
								value={this.state.term}
								type="text"
								id="Search-form-query"
								placeholder="Restaurant"
								className="Search-form-input"
								onChange={this._handleChange}
							/>
						</div>
						<input type="submit" className="Search-submit-btn" value="Search" />
					</form>
				</div>
			</section>
		);
	}
}

export default Search;
