// import { createContext, useState, useEffect } from 'react';
// import secureAxios from './../api/secureAxios';
// import {
// 	userDetailsAPI,
// 	loginAPI,
// 	getOrganizationAddressAPI,
// } from './../api/api';

// export const GeneralContext = createContext();

// const GeneralContextProvider = (props) => {
// 	const [authData, setAuthData] = useState(null);
// 	const [paymentData, setPaymentData] = useState();
// 	const [choosePlan, setChoosePlan] = useState(planList[0]);

// 	secureAxios().interceptors.response.use(
// 		(response) => {
// 			const { status } = response?.response || { status: false };
// 			if (status === 401) {
// 				setAuthData(null);
// 				localStorage.removeItem('auth');
// 			}
// 			return response;
// 		},
// 		(error) => {
// 			return error;
// 		}
// 	);

// 	useEffect(() => {
// 		//const auth = JSON.parse(localStorage.getItem('auth'));
// 		//setAuthData(auth);
// 	}, []);

// 	useEffect(() => {
// 		if (!authData) {
// 			const auth = JSON.parse(localStorage.getItem('auth'));
// 			if (auth?.token && auth?.userID) {
// 				setAuthData(auth);
// 			}
// 		}
// 		if (authData?.token && authData?.userID) {
// 			localStorage.setItem('auth', JSON.stringify(authData));
// 			if (!authData?.firstName) {
// 				console.log(authData);
// 				userDetailsAPI().then((res) => {
// 					if (res.data?.data?.userCredentials) {
// 						setAuthData((pS) => ({ ...pS, ...res.data.data.userCredentials }));
// 					}
// 				});
// 			}
// 			if (authData?.firstName && !authData?.address) {
// 				getOrganizationAddressAPI().then((res) => {
// 					if (res.data?.data) {
// 						setAuthData((pS) => ({ ...pS, address: res.data.data }));
// 					}
// 				});
// 			}
// 		}
// 	}, [authData]);

// 	const login = (mail, password) => {
// 		const promise = loginAPI({ email: mail, password: password }).then(
// 			(e) => e
// 		);
// 		promise.then((res) => {
// 			console.log(res);
// 			if (res?.data?.data) {
// 				setAuthData(res.data.data);
// 			}
// 		});
// 		return promise;
// 	};

// 	return (
// 		<GeneralContext.Provider
// 			value={{
// 				planList,
// 				paymentData,
// 				setPaymentData,
// 				authData,
// 				setAuthData,
// 				choosePlan,
// 				login,
// 				setChoosePlan,
// 			}}
// 		>
// 			{props.children}
// 		</GeneralContext.Provider>
// 	);
// };

// export default GeneralContextProvider;

// const planList = [
// 	{
// 		title: 'START',
// 		price: 15,
// 		feature: [
// 			{
// 				status: true,
// 				title: '400 Request',
// 			},
// 			{
// 				status: true,
// 				title: '50 Article',
// 			},
// 			{
// 				status: true,
// 				title: 'Users Management',
// 			},
// 			{
// 				status: false,
// 				title: 'Up to 10 Users',
// 			},
// 		],
// 	},
// 	{
// 		title: 'PRO',
// 		price: 35,
// 		feature: [
// 			{
// 				status: true,
// 				title: '1500 Request',
// 			},
// 			{
// 				status: true,
// 				title: '100 Article',
// 			},
// 			{
// 				status: true,
// 				title: 'User Management',
// 			},
// 			{
// 				status: false,
// 				title: 'Up to 10 Users',
// 			},
// 		],
// 	},
// 	{
// 		title: 'CUSTOM',
// 		price: '',
// 		feature: [
// 			{
// 				status: true,
// 				title: 'Unlimited Requests',
// 			},
// 			{
// 				status: true,
// 				title: 'Unlimited Articles',
// 			},
// 			{
// 				status: true,
// 				title: 'User Management',
// 			},
// 			{
// 				status: true,
// 				title: 'No User Limit',
// 			},
// 		],
// 	},
// ];
