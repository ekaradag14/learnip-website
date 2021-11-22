import React, { useState, useEffect } from 'react';
// import { addContactAPI } from 'api/api';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// @material-ui/icons
import Check from '@material-ui/icons/Check';
// core components
import CampaignBar from 'components/CampaignBar/CampaignBar.js';
import contactsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/contactsStyle.js';

import city from 'assets/img/examples/city.jpg';
import fields from 'assets/learnip/fields.svg';
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
				style={{
					backgroundImage: `url(${fields})`,
					backgroundPosition: 'bottom',
				}}
			>
				<div className={classes.container}>
					<CampaignBar />
				</div>
			</div>
		</div>
	);
}
