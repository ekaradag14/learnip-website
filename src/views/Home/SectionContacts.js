import React, { useState, useEffect } from 'react';
import { addContactAPI } from 'api/api';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// @material-ui/icons
import Check from '@material-ui/icons/Check';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardBody from 'components/Card/CardBody.js';
import CardFooter from 'components/Card/CardFooter.js';
import CustomInput from 'components/CustomInput/CustomInput.js';
import Button from 'components/CustomButtons/Button.js';
import SnackbarContent from 'components/Snackbar/SnackbarContent.js';

import contactsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/contactsStyle.js';

import city from 'assets/img/examples/city.jpg';

const useStyles = makeStyles(contactsStyle);

export default function SectionContacts({ ...rest }) {
	const classes = useStyles();

	const [checked, setChecked] = useState(false);
	const [form, setForm] = useState({});
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);

	useEffect(() => {
		setTimeout(() => {
			setSuccess(null);
		}, 7000);
	}, [success]);

	const onChange = (event) => {
		setForm((pS) => ({
			...pS,
			[event.target.name]: event.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (!checked) {
			setError('You must confirm the contract');
			return;
		}
		let formData = form;

		const mailTemplate =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (!mailTemplate.test(String(formData?.mail ?? '').toLowerCase())) {
			setError('It must conform to the mail format');
			return;
		}

		const fields = ['name', 'surname', 'company', 'mail', 'message'];
		Object.keys(formData).map(
			(e, i) => fields.indexOf(e) <= -1 && delete formData[e]
		);

		if (fields.length !== Object.keys(formData).length) {
			setError('Please do not leave blank');
			return;
		}

		addContactAPI(formData).then(() => {
			setForm({});
			setError(null);
			setChecked(false);
			setSuccess('Your request has been received');
		});
	};

	return (
		<div className="cd-section" id="contact-us" {...rest}>
			<div
				className={classes.contacts + ' ' + classes.section}
				style={{ backgroundImage: `url(${city})` }}
			>
				<div className={classes.container}>
					<GridContainer>
						<GridItem xs={12} sm={5} md={5}>
							<h2 className={classes.title}>Get In The Line</h2>
							<h5 className={classes.description}>
								You want it all? <br />
								You want it now? <br /> <br />
								Fill the form and get in the line to be one of the very first
								users.
							</h5>
						</GridItem>
						<GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
							<Card className={classes.card1}>
								<form onSubmit={onSubmit}>
									<CardHeader
										contact
										color="primary"
										className={classes.textCenter}
									>
										<h4 className={classes.cardTitle}>Contact Us</h4>
									</CardHeader>
									<CardBody>
										<GridContainer>
											{success && (
												<GridItem xs={12}>
													<SnackbarContent
														message={success}
														close
														color="success"
														icon={Check}
													/>
												</GridItem>
											)}
											<GridItem xs={12} sm={6} md={6}>
												<CustomInput
													labelText="First Name"
													id="first"
													value={form?.name}
													formControlProps={{
														fullWidth: true,
													}}
													inputProps={{
														name: 'name',
														onChange,
													}}
												/>
											</GridItem>
											<GridItem xs={12} sm={6} md={6}>
												<CustomInput
													labelText="Last Name"
													id="last"
													value={form?.surname}
													formControlProps={{
														fullWidth: true,
													}}
													inputProps={{
														name: 'surname',
														onChange,
													}}
												/>
											</GridItem>
										</GridContainer>
										<CustomInput
											labelText="Company"
											id="company"
											value={form?.company}
											formControlProps={{
												fullWidth: true,
											}}
											inputProps={{
												name: 'company',
												onChange,
											}}
										/>
										<CustomInput
											labelText="Email Address"
											id="email-address"
											value={form?.mail}
											formControlProps={{
												fullWidth: true,
											}}
											inputProps={{
												name: 'mail',
												onChange,
											}}
										/>
										<CustomInput
											labelText="Intended Purpose of Use"
											id="message"
											formControlProps={{
												fullWidth: true,
											}}
											value={form?.message}
											inputProps={{
												multiline: true,
												rows: 5,
												name: 'message',
												onChange,
											}}
										/>
										<GridItem xs={12}>
											{error && (
												<SnackbarContent
													message={error}
													color="danger"
													icon="info_outline"
												/>
											)}
										</GridItem>
									</CardBody>
									<CardFooter className={classes.justifyContentBetween}>
										<GridContainer>
											<GridItem xs={12}>
												<FormControlLabel
													control={
														<Checkbox
															tabIndex={-1}
															onClick={() => setChecked((pS) => !pS)}
															checkedIcon={
																<Check className={classes.checkedIcon} />
															}
															icon={<Check className={classes.uncheckedIcon} />}
															classes={{
																checked: classes.checked,
																root: classes.checkRoot,
															}}
															checked={!!checked}
														/>
													}
													classes={{ label: classes.label }}
													label="I accept the terms and conditions."
												/>
											</GridItem>
											<GridItem xs={12}>
												<Button
													type="submit"
													color="primary"
													className={classes.pullRight}
												>
													Send Message
												</Button>
											</GridItem>
										</GridContainer>
									</CardFooter>
								</form>
							</Card>
						</GridItem>
					</GridContainer>
				</div>
			</div>
		</div>
	);
}
