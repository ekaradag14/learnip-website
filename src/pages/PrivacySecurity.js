import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
// sections for this page
import Header from 'views/Global/Header.js';
import Footer from 'views/Global/Footer.js';
import PrivacySecurityContract from 'contract/PrivacySecurity';
import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.js';

const useStyles = makeStyles(presentationStyle);

function DeliveryReturn() {
	const classes = useStyles();
	return (
		<div>
			<Header />
			<div className={classNames(classes.main, classes.mainRaised)}>
				<Box m={5} py={5}>
					<PrivacySecurityContract />
				</Box>
			</div>
			<Footer />
		</div>
	);
}

export default DeliveryReturn;
