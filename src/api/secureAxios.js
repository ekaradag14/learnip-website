import axios from 'axios';

const instance = axios.create({
	baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
	withCredentials: true,
	crossdomain: true,
});

const secureAxios = (headers) => {
	let header = headers;
	let auth = localStorage.getItem('auth');
	if (auth) {
		auth = JSON.parse(auth);
		header = {
			Authorization: `Bearer ${auth.token}`,
			userID: auth.userID,
		};
	}

	instance.defaults.headers.common = header;
	return instance;
};

export default secureAxios;
