import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { getFormAPI } from 'api/api';
// nodejs library that concatenates classes
import classNames from 'classnames';

import { GeneralContext } from 'context/GeneralContext';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import {
	Box,
	Checkbox,
	CircularProgress,
	FormControlLabel,
	Grid,
} from '@material-ui/core';

import SalesContract from 'contract/SalesContract';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import Danger from 'components/Typography/Danger.js';
// sections for this page
import Header from 'views/Global/Header.js';
import Footer from 'views/Global/Footer.js';

import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.js';
const useStyles = makeStyles(presentationStyle);

function Payment(props) {
	const classes = useStyles();
	const [form, setForm] = useState(null);
	const { paymentData, authData } = useContext(GeneralContext);
	const [checked, setChecked] = useState();
	const [error, setError] = useState(null);
	const [isBusy, setBusy] = useState(null);

	useEffect(() => {
		if (!paymentData) {
			props.history.push('/plans');
		}
	}, []);

	const getForm = () => {
		if (!checked) {
			setError('zorunlu*');
			return;
		}
		setError(null);

		if (!form) {
			setBusy(true);
			getFormAPI({
				plan: paymentData,
				user: authData,
				address: authData.address,
			}).then((res) => {
				if (res.data?.data?.status === 'success') {
					setForm(res.data?.data);
					setBusy(false);
				}
			});
		}
	};

	const checkChange = () => {
		setChecked((pS) => !pS);
	};

	return (
		<div>
			<Header />
			<div className={classNames(classes.main, classes.mainRaised)}>
				{(form?.payWithIyzicoPageUrl || form?.token) && (
					<iframe
						width="100%"
						height="1000"
						style={{ overflow: 'hidden' }}
						src={
							form?.payWithIyzicoPageUrl ||
							`https://cpp.iyzipay.com/?token=${form.token}`
						}
					/>
				)}
				{!authData?.address?.contactName && (
					<GridContainer justify="center">
						<Box m={5} mb={5} textAlign="center">
							<GridItem>
								Plase, address update ! <br />
								<Button
									href="https://novus-global.web.app/account/organization/address"
									component="a"
									color="info"
									target="_blank"
									round
								>
									UPDATE
								</Button>
							</GridItem>
						</Box>
					</GridContainer>
				)}
				{!(form?.payWithIyzicoPageUrl || form?.token) &&
					authData?.address?.contactName && (
						<GridContainer>
							<GridContainer>
								<GridItem xs={12} item>
									<Box m={5} mb={5}>
										<b>Billing Details</b>
										<br />
										{authData.address?.contactName}
										<br />
										{authData.address?.city} / {authData.address?.country}
										<br />
										{authData.address?.zipCode}
										<br />
										{authData.address?.address}
										<br />
										<br />
										<em>
											You can update this information from Novus Writer if this
											is invalid.
										</em>
									</Box>
								</GridItem>
							</GridContainer>
							<GridItem xs={12} item>
								<Box p={5}>
									<h5>MESAFELİ SATIŞ SÖZLEŞMESİ</h5>
									<Box
										p={3}
										style={{
											width: '100%',
											maxHeight: '500px',
											overflow: 'auto',
											border: '1px solid #ccc',
										}}
									>
										<SalesContract
											{...{
												customer: {
													name: `${authData.firstName} ${authData.lastName}`,
													address: { text: 'Açık adres' },
													email: 'müşterimail@gsm.com',
													phone: '05331421624',
												},
												seller: { name: 'Novus Medya ve Teknoloji A.Ş.' },
												price: 250,
											}}
										/>
									</Box>
								</Box>
							</GridItem>
							<GridItem xs={6} item>
								<Box pl={5}>
									<FormControlLabel
										control={
											<Checkbox
												checked={checked}
												onChange={checkChange}
												name="checkedB"
												color="primary"
											/>
										}
										label={
											<>
												{!checked && error ? (
													<Danger>
														Mesafeli satış sözleşmesini okudum, kabul ediyorum
													</Danger>
												) : (
													'Mesafeli satış sözleşmesini okudum, kabul ediyorum'
												)}
											</>
										}
									/>
								</Box>
								<Box pl={5}></Box>
							</GridItem>
							<GridItem xs={6} item>
								<GridContainer xs={12} justify="flex-end" alignItems="center">
									<Box pb={3} px={5}>
										{!isBusy && (
											<Button
												color="info"
												onClick={getForm}
												disabled={isBusy}
												round
											>
												PROCEED TO PAYMENT
											</Button>
										)}
										{isBusy && <CircularProgress size={30} />}
									</Box>
								</GridContainer>
							</GridItem>
						</GridContainer>
					)}
			</div>
			<Footer />
		</div>
	);
}

export default Payment;
