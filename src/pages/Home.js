import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// sections for this page
import Header from 'views/Global/Header.js';
import Footer from 'views/Global/Footer.js';
import SectionContent from 'views/Home/SectionContent.js';
import SectionProjects from 'views/Home/SectionProjects.js';
import SectionContacts from 'views/Home/SectionContacts.js';
import SectionPartners from 'views/Home/SectionPartners.js';
import fields from 'assets/learnip/fields.svg';
import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.js';

const useStyles = makeStyles(presentationStyle);

function Home({ location }) {
	const classes = useStyles();

	React.useEffect(() => {
		if (location?.state?.scrollTo === 'contact-us') {
			document
				?.querySelector('#contact-us')
				?.scrollIntoView({ behavior: 'smooth' });
		}
	}, []);
	return (
		<div>
			<Header
				parallax={{
					image: fields,
				}}
			/>
			<div className={classNames(classes.main, classes.mainRaised)}>
				<SectionProjects />
				<hr />
			</div>
			<SectionContacts />
			<Footer />
		</div>
	);
}

export default Home;
