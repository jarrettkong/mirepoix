import axios from 'axios';

const IPINFO_API_KEY = process.env.REACT_APP_IPINFO_API_KEY;

export default axios.create({
	baseURL: 'https://cors-anywhere.herokuapp.com/https://ipinfo.io',
	headers: {
		Authorization: `Bearer ${IPINFO_API_KEY}`
	}
});
