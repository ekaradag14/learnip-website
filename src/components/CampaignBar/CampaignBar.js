import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// react component for creating beautiful carousel
import Carousel from 'react-slick';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// @material-ui/icons
import Share from '@material-ui/icons/Share';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
// core components

import Button from 'components/CustomButtons/Button.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CustomInput from 'components/CustomInput/CustomInput.js';

import headersStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.js';

const useStyles = makeStyles(headersStyle);

export default function CampaignBar({ ...rest }) {
	const classes = useStyles();
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
	};
	return (
		<GridContainer>
			<GridItem
				xs={12}
				sm={12}
				lg={8}
				className={classNames(
					classes.mlAuto,
					classes.mrAuto,
					classes.textCenter
				)}
			>
				<h1 style={{ color: 'white' }} className={classes.title}>
					Get Your Place!
				</h1>
				<h4 style={{ color: 'white' }}>
					Learnip is coming hot with the premium <b>turnipster</b> account where
					you can enjoy all of turnip without any limits. Register now to get
					your <b>70%</b> early adapter discount!
				</h4>
			</GridItem>
			<GridItem
				xs={12}
				sm={10}
				md={6}
				className={classNames(classes.mlAuto, classes.mrAuto)}
			>
				<Card raised className={classes.card}>
					<CardBody formHorizontal>
						<form>
							<GridContainer>
								<GridItem xs={12} sm={7} md={7}>
									<CustomInput
										id="mail"
										inputProps={{
											placeholder: 'Your Mail',
											type: 'text',
											autoComplete: 'email',
										}}
										formControlProps={{
											fullWidth: true,
											className: classes.formControl,
										}}
									/>
								</GridItem>
								<GridItem xs={12} sm={5} md={5}>
									<Button
										block
										color="primary"
										className={classes.signupButton}
									>
										Sign up
									</Button>
								</GridItem>
							</GridContainer>
						</form>
					</CardBody>
				</Card>
			</GridItem>
		</GridContainer>
	);
}
