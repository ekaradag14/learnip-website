import React from 'react';
import { Link } from 'react-router-dom';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from 'components/CustomButtons/Button.js';
// core components
import Footer from 'components/Footer/Footer.js';

import data from 'data/footer.js';
import styles from 'assets/jss/material-kit-pro-react/views/componentsSections/footerStyle.js';
import aboutUsStyle from 'assets/jss/material-kit-pro-react/views/aboutUsStyle.js';
const useStyles2 = makeStyles(aboutUsStyle);
const useStyles = makeStyles(styles);
function CustomFooter({ ...rest }) {
	const classes = useStyles();

	return (
		<Footer
			theme="dark"
			content={
				<div>
					<div className={classes.left}>
						<a className={classes.footerBrand}>LEARNIP</a>
					</div>
					<div className={classes.pullCenter}>
						<List className={classes.list}>
							<ListItem className={classes.inlineBlock}>
								<a
									href="mailto:hello@learnip.co"
									target="_blank"
									className={classes.block}
								>
									Contact us
								</a>
							</ListItem>
						</List>
					</div>
				</div>
			}
		/>
	);
}

const footerLink = [
	// {
	// 	link: '/about',
	// 	title: 'Hakkımızda',
	// },
	// {
	// 	link: '/privacy-security',
	// 	title: 'Gizlilik ve Güvenlik Sözleşmesi',
	// },
	// {
	// 	link: '/delivery-return',
	// 	title: 'Teslimat ve İade Bildirimi',
	// },
];

export default CustomFooter;
