import React, { useState } from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// react component for creating beautiful carousel
import Carousel from 'react-slick';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { earlyAdapterAPI } from 'api/api';
// core components
import './CampaignBar.css';
import Button from 'components/CustomButtons/Button.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CustomInput from 'components/CustomInput/CustomInput.js';

import headersStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.js';

const useStyles = makeStyles(headersStyle);
const emptyHelperText = { text: '', status: 'success' };
export default function CampaignBar() {
	const [userMail, setUserMail] = useState('');
	const [helperText, setHelperText] = useState(emptyHelperText);
	const [mailLoading, setMailLoading] = useState(false);
	const classes = useStyles();
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
	};
	const onSubmit = async () => {
		if (!isEmailValid(userMail)) {
			setHelperText({ text: 'Please enter a valid email.', status: 'error' });
			return;
		}
		setHelperText(emptyHelperText);
		setMailLoading(true);
		try {
			await earlyAdapterAPI(userMail);
		} catch (error) {
			console.log(error);
			setMailLoading(false);
			return;
		}
		setTimeout(() => {
			setUserMail('');
			setHelperText({
				text: 'You are a VIP now!',
				status: 'success',
			});
			setMailLoading(false);
		}, 700);
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
										value={userMail}
										onChange={(e) => {
											setUserMail(e.target.value);
										}}
										onSubmit={onSubmit}
										inputProps={{
											placeholder: 'Your Mail',
											autoComplete: 'email',
											error: helperText.status === 'error',
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
										disabled={mailLoading}
										isLoading={mailLoading}
										onClick={onSubmit}
										className="signup-button"
									>
										Sign up
									</Button>
								</GridItem>
								{helperText.status.length !== 0 && (
									<em
										style={{
											color:
												helperText.status === 'error' ? '#f44336' : 'green',
											marginTop: -10,
											paddingLeft: 12,
											fontSize: 12,
										}}
									>
										{helperText.text}
									</em>
								)}
							</GridContainer>
						</form>
					</CardBody>
				</Card>
			</GridItem>
		</GridContainer>
	);
}
const isEmailValid = (email) => {
	const emailCheckRegex = /\S+@\S+\.\S+/;
	return emailCheckRegex.test(email);
};
