import axios from 'axios';

const YELP_API_KEY = process.env.REACT_APP_YELP_API_KEY;

export default axios.create({
	baseURL: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3',
	headers: {
		Authorization: `Bearer ${YELP_API_KEY}`
	}
});
