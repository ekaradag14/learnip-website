import React from 'react';
import classNames from 'classnames';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// sections for this page
import Header from 'views/Global/Header.js';
import Footer from 'views/Global/Footer.js';
import SectionPlans from 'views/Plans/SectionPlans.js';

import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.js';

const useStyles = makeStyles(presentationStyle);

function Plans(props) {
	const classes = useStyles();

	return (
		<div>
			<Header />
			<div className={classNames(classes.main, classes.mainRaised)}>
				<SectionPlans />
			</div>
			<Footer />
		</div>
	);
}

export default Plans;
