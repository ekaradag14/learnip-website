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
import {
	balloons_morning,
	dessert_afternoon,
	dessert_night,
	forest_1_night,
	forest_2_night,
	forest_afternoon,
	forest_night,
	hill_night,
	home_night,
	lake_1_night,
	lake_afternoon,
	lake_1_afternoon,
	lake_morning,
	lake_night,
	mountains_night,
	mountains_snow,
} from 'assets/learnip/backgrounds';
import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.js';

const useStyles = makeStyles(presentationStyle);

function Home() {
	const classes = useStyles();
	const backgrounds = [
		fields,
		lake_1_afternoon,
		home_night,
		balloons_morning,
		dessert_afternoon,
		dessert_night,
		forest_1_night,
		forest_2_night,
		forest_afternoon,
		forest_night,
		hill_night,
		lake_1_night,
		lake_afternoon,
		lake_morning,
		lake_night,
		mountains_night,
		mountains_snow,
	];
	const randomBackground = randomArrayElement(backgrounds);
	return (
		<div>
			<Header
				parallax={{
					image: randomBackground,
				}}
			/>
			<div className={classNames(classes.main, classes.mainRaised)}>
				<SectionProjects />
				<hr />
			</div>
			<SectionContacts backgroundImage={randomBackground} />
			<Footer />
		</div>
	);
}
export const randomArrayElement = (array) => {
	return array[Math.floor(Math.random() * array.length)];
};
export default Home;
