import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		width: 350,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[3],
		padding: theme.spacing(2),
		borderRadius: 10,
	},
}));

export default function TransitionsModal({ open, ...rest }) {
	const classes = useStyles();

	const handleClose = () => {
		rest.handleClose && rest.handleClose();
	};

	return (
		<Modal
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			className={classes.modal}
			open={open}
			onClose={handleClose}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
		>
			<Fade in={open}>
				<div className={classes.paper}>{rest.children}</div>
			</Fade>
		</Modal>
	);
}
