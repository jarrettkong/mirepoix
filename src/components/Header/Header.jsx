import React from 'react';
import { Dns as HeaderIcon } from '@material-ui/icons';
import Location from '../Location/Location';
import './_Header.scss';

const Header = () => {
	return (
		<nav className="Header">
			<div className="Header-container">
				<h1 className="Header-logo">
					<span>
						<HeaderIcon className="Header-icon" />
					</span>{' '}
					Mirepoix
				</h1>
				<Location />
			</div>
			<div className="Header-container">
				<a href="/" className="Header-button signup-button" role="button">
					Sign Up
				</a>
				<a href="/" className="Header-button login-button" role="button">
					Login
				</a>
			</div>
		</nav>
	);
};

export default Header;
