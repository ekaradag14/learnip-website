import React from 'react';
import { Link } from 'react-router-dom';

//style
import headersStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.js';

//data
import data from 'data/header.js';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Box from '@material-ui/core/Box';
import PublicIcon from '@material-ui/icons/Public';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
// core components
import Header from 'components/Header/Header.js';
import Button from 'components/CustomButtons/Button.js';

// components
import Parallax from './Parallax.js';

const useStyles = makeStyles(headersStyle);

function CustomHeader(props) {
	const classes = useStyles();
	const parallax = props.parallax || false;

	return (
		<div className="cd-section">
			<Header
				fixed
				brand={data.title}
				color={parallax ? 'transparent' : 'primary'}
				changeColorOnScroll={{
					height: 30,
					color: 'novusMainBlue',
				}}
				links={
					<div className={classes.collapse}>
						<List
							className={classes.list + ' ' + classes.mlAuto}
							style={{ paddingBottom: 0 }}
						>
							{data.menu.map((elm, i) => (
								<ListItem className={classes.listItem} key={i}>
									<Button
										className={classes.navLink}
										color="transparent"
										component={Link}
										to={elm.href}
									>
										<b style={{ fontSize: 15 }}>{elm.title}</b>
									</Button>
								</ListItem>
							))}
						</List>
						<List
							className={classes.list + ' ' + classes.mlAuto}
							style={{ paddingBottom: 0 }}
						>
							{data.social.map((elm, i) => (
								<ListItem className={classes.listItem} key={i}>
									<Button
										color="transparent"
										href={elm.href}
										target="_blank"
										className={`${classes.navLink} ${classes.navLinkJustIcon}`}
									>
										{elm.icon === 'linkedIn' && <LinkedInIcon />}
									</Button>
								</ListItem>
							))}
						</List>
					</div>
				}
			/>
			{parallax ? <Parallax {...parallax} /> : <Box m={15} />}
		</div>
	);
}

export default CustomHeader;
