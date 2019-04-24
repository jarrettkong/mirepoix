import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './util/_normalize.scss';
import './_index.scss';
import App from './components/App/App';

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
);
