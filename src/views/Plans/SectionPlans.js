import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { GeneralContext } from 'context/GeneralContext';

import { getPayingInfo } from '../../api/api';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';

// @material-ui/icons
import Check from '@material-ui/icons/Check';
import Close from '@material-ui/icons/Close';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardFooter from 'components/Card/CardFooter.js';
import Button from 'components/CustomButtons/Button.js';
import Success from 'components/Typography/Success.js';
import Danger from 'components/Typography/Danger.js';
import Modal from 'components/Modal/Modal.js';
import Checkout from 'views/Plans/Checkout.js';

import pricingStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/pricingStyle.js';

const useStyles = makeStyles(pricingStyle);

const SectionPlans = () => {
	const classes = useStyles();
	const history = useHistory();
	const location = useLocation();

	const {
		setPaymentData,
		paymentData,
		authData,
		setAuthData,
		userData,
		setChoosePlan,
		choosePlan,
		planList,
		login,
	} = useContext(GeneralContext);

	const [mail, setMail] = useState('');
	const [password, setPassword] = useState('');
	const [open, setOpen] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const query = queryString.parse(location.search);
		if (query?.token && query?.id) {
			setAuthData({
				token: query?.token,
				userID: query?.id,
			});
			history.replace('/plans');
		}
	}, []);

	useEffect(() => {
		if (authData?.email) {
			getPayingInfo().then((res) => {
				if (res.data?.data) {
					setPaymentData((pS) => ({
						...pS,
						company: res.data.data.user.company,
						usersCount: res.data.data.usersCount,
						plan: choosePlan.price === 15 ? 'personal' : 'pro',
					}));
				}
			});
		}
	}, [authData?.email]);

	const selectPlan = (item) => {
		setChoosePlan(item);
		// { company: '', plan: 'pro' }
		setPaymentData((pS) => ({
			...pS,
			plan: item.price === 15 ? 'personal' : 'pro',
		}));
		window.scrollTo({ top: 900, behavior: 'smooth' });
	};

	const checkout = () => {
		if (!authData?.token) {
			setOpen(true);
		} else {
			history.push('/payment');
		}
	};

	const onSubmitLogin = (e) => {
		e.preventDefault();
		login(mail, password).then((res) => {
			if (res?.data?.data) {
				setError(null);
			} else {
				console.log(res?.response);
				setError(res?.response?.data?.error);
			}
		});
	};

	return (
		<>
			<div className={classes.pricing}>
				<div className={classes.container}>
					<GridContainer>
						<GridItem
							xs={12}
							sm={6}
							md={6}
							className={
								classes.mlAuto + ' ' + classes.mrAuto + ' ' + classes.textCenter
							}
						>
							<h2 className={classes.title}>
								Welcome, {authData?.firstName}
								<div>Pick the best plan for you</div>
							</h2>
							<h5 className={classes.description}>
								You have Free Unlimited Updates and Premium Support on each
								package.
							</h5>
							<div className={classes.sectionSpace} />
						</GridItem>
					</GridContainer>
					<GridContainer justify="center">
						{planList?.map((e, i) => (
							<GridItem xs={12} sm={6} md={6} lg={3}>
								<Card color={i === 1 ? 'success' : undefined} pricing plain>
									<CardBody pricing plain>
										<h6
											className={
												i === 1 ? classes.marginBottom30 : classes.cardCategory
											}
										>
											{e.title}
										</h6>
										<h1
											className={
												i === 1 ? classes.cardTitleWhite : classes.cardTitle
											}
										>
											{typeof e.price === 'number' && (
												<>
													<small>$</small> {e.price}
												</>
											)}

											{typeof e.price !== 'number' && (
												<>
													<small>{e.price}</small>
												</>
											)}
										</h1>
										{e.price && (
											<span>
												<p>/ month</p>
												<p>(paid monthly)</p>
											</span>
										)}
										<ul>
											{e.feature.map((feature) => {
												if (i === 1) {
													return (
														<li>
															{feature.status ? (
																<Check />
															) : (
																<Danger>
																	<Close />
																</Danger>
															)}
															{feature.title}
														</li>
													);
												}
												return (
													<li>
														<Success>
															{feature.status ? (
																<Check />
															) : (
																<Danger>
																	<Close />
																</Danger>
															)}
														</Success>{' '}
														{feature.title}
													</li>
												);
											})}
										</ul>
									</CardBody>
									<CardFooter pricing className={classes.justifyContentCenter}>
										{i === 2 ? (
											<Button
												color={i % 2 === 0 ? 'success' : 'white'}
												onClick={() =>
													history.push('/', { scrollTo: 'contact-us' })
												}
												round
											>
												CONTACT
											</Button>
										) : (
											<Button
												color={i % 2 === 0 ? 'success' : 'white'}
												onClick={() => selectPlan(e)}
												round
											>
												Choose plan
											</Button>
										)}
									</CardFooter>
								</Card>
							</GridItem>
						))}
						<em style={{ margin: 'auto' }}>
							You have <b>{paymentData?.usersCount}</b> accounts on your
							organization.
						</em>
					</GridContainer>
				</div>
			</div>
			<GridContainer>
				<GridItem xs={12}>
					<Checkout
						data={choosePlan}
						price={choosePlan?.price}
						usersCount={paymentData?.usersCount}
					/>
				</GridItem>
				<GridContainer alignItems="center" xs={12}>
					<GridContainer xs={12} justify="flex-end">
						<Box m={5}>
							<Button color="info" onClick={checkout} round>
								Complete Purchase
								<KeyboardArrowRight />
							</Button>
						</Box>
					</GridContainer>
				</GridContainer>
			</GridContainer>
			<Modal open={open && !authData?.token} handleClose={() => setOpen(false)}>
				<form onSubmit={onSubmitLogin}>
					<Box textAlign="center" mb={2}>
						<Danger fontSize={10}>{error}</Danger>
					</Box>
					<Box pt={1}>
						<TextField
							variant="outlined"
							id="outlined-required"
							label="EMAIL"
							onChange={(e) => setMail(e.target.value)}
							value={mail}
							disabled={userData?.user}
							required
							fullWidth
						/>
					</Box>
					<Box py={2}>
						<TextField
							variant="outlined"
							id="outlined-required"
							label="PASSWORD"
							type="password"
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							disabled={userData?.user}
							required
							fullWidth
						/>
					</Box>
					<Grid xs={12} justify="flex-end" container>
						<Button type="submit" color="info" round>
							LOGIN
						</Button>
					</Grid>
				</form>
			</Modal>
		</>
	);
};

export default SectionPlans;
