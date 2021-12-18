import React, { useEffect } from 'react';
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
import './Footer.css';
import { Hidden } from '@material-ui/core';
function CustomFooter({ ...rest }) {
	const classes = useStyles();

	useEffect(() => {
		const script = document.createElement('script');

		script.type = 'text/javascript';
		script.innerHTML =
			'!function(e,t){var n=function(){var e=t.createElement("script"),n=t.getElementsByTagName("script")[0];e.src="https://cdn.iubenda.com/iubenda.js",n.parentNode.insertBefore(e,n)};e.addEventListener?e.addEventListener("load",n,!1):e.attachEvent?e.attachEvent("onload",n):e.onload=n}(window,document);';
		script.async = true;

		if (document.body != null) document.body.appendChild(script);
	}, []);
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
									hello@learnip.co
								</a>
							</ListItem>
						</List>
					</div>
					<Hidden smDown>
						<div className={classes.right}>
							<a
								id="privacy-policy"
								href="https://www.iubenda.com/privacy-policy/12732146"
								className="iubenda-white iubenda-embed iubenda-noiframe iubenda-noiframe "
								title="Privacy Policy"
							>
								Privacy Policy
							</a>
						</div>
					</Hidden>
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
