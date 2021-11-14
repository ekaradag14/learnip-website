/*!

=========================================================
* Novus AI - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router';

// Context
import GeneralContextProvider from 'context/GeneralContext';

// Pages
import Home from 'pages/Home.js';

import Plans from 'pages/Plans.js';
import Payment from 'pages/Payment.js';
import About from 'pages/About.js';

import DeliveryReturn from 'pages/DeliveryReturn.js';
import PrivacySecurity from 'pages/PrivacySecurity.js';

import 'assets/scss/material-kit-pro-react.scss?v=1.10.0';

var hist = createBrowserHistory();

hist.listen((location, action) => {
	window.scrollTo(0, 0);
});

ReactDOM.render(
	<Router history={hist}>
		<GeneralContextProvider>
			<Switch>
				<Route exact path="/" component={Home} />

				<Route exact path="/plans" component={Plans} />
				<Route exact path="/payment" component={Payment} />
				<Route exact path="/about" component={About} />

				<Route exact path="/delivery-return" component={DeliveryReturn} />
				<Route exact path="/privacy-security" component={PrivacySecurity} />
				<Route path="*">
					<Redirect to={'/'} />
				</Route>
			</Switch>
		</GeneralContextProvider>
	</Router>,
	document.getElementById('root')
);
