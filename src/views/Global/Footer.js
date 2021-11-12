import React from 'react';
import { Link } from 'react-router-dom';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// core components
import Footer from 'components/Footer/Footer.js';

import data from 'data/footer.js';

import aboutUsStyle from 'assets/jss/material-kit-pro-react/views/aboutUsStyle.js';
const useStyles2 = makeStyles(aboutUsStyle);

function CustomFooter({ ...rest }) {
	const classes = useStyles();
	const classes2 = useStyles2();

	return (
		<Footer
			{...rest}
			content={
				<div className={classes.container}>
					<div className={classes2.left}>
						<List className={classes2.list}>
							{footerLink.map((item) => (
								<ListItem className={classes2.inlineBlock}>
									<Link to={item.link} className={classes2.block}>
										{item.title}
									</Link>
								</ListItem>
							))}
						</List>
					</div>

					<div className={classes.root}>
						<div className={classes.left}>
							<a href={data.left.href} target="_blank" rel="noreferrer">
								{data.right.text}
							</a>
						</div>
						<div>
							<img src="with_iyzico.png" height="45px" />
						</div>
					</div>
				</div>
			}
		/>
	);
}

const useStyles = makeStyles({
	container: {
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'flex-start',
		flexDirection: 'column',
		'& a': {
			fontSize: '.85em',
		},
		'& a:hover': {
			color: 'black',
		},
	},
	root: {
		width: '100%',
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'row',
		'& a': {
			color: '#5e5e5e',
			fontWeight: 500,
			fontSize: '.9em',
		},
	},
});

const footerLink = [
	{
		link: '/about',
		title: 'Hakkımızda',
	},
	{
		link: '/privacy-security',
		title: 'Gizlilik ve Güvenlik Sözleşmesi',
	},
	{
		link: '/delivery-return',
		title: 'Teslimat ve İade Bildirimi',
	},
];

export default CustomFooter;
