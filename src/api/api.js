import secureAxios from './secureAxios';

export const getFormAPI = (formData) => {
	return secureAxios(null).post('/payment/getForm', formData);
};

export const getPayingInfo = () => {
	return secureAxios(null).get('/payment/getPayingInfo');
};

export const addContactAPI = (formData) => {
	return secureAxios(null).post(`/contact`, formData);
};

export const loginAPI = (formData) => {
	return secureAxios(null).post(`/login`, formData);
};

export const userDetailsAPI = () => {
	return secureAxios(null).get(`/user`);
};

export const getOrganizationAddressAPI = () => {
	return secureAxios(null).get(`/organization/getAddress`);
};
