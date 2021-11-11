import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// sections for this page
import Header from 'views/Global/Header.js';
import Footer from 'views/Global/Footer.js';
import SectionTeams from 'views/Teams/SectionTeams.js';

import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.js';

const useStyles = makeStyles(presentationStyle);

function Teams() {
	const classes = useStyles();
	return (
		<div>
			<Header />
			<div className={classNames(classes.main, classes.mainRaised)}>
				<SectionTeams />
			</div>
			<Footer />
		</div>
	);
}

export default Teams;
