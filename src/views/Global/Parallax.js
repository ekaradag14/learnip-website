import React from 'react';
import classNames from 'classnames';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// core components
import { Grid } from '@material-ui/core';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Parallax from 'components/Parallax/Parallax.js';
import HappyTurnip from 'assets/learnip/happy_turnip.svg';
import headersStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.js';

import data from 'data/header.js';

const useStyles = makeStyles(headersStyle);

function CustomParallax(props) {
	const classes = useStyles();

	return (
		<Parallax
			image={props.image || require('assets/img/examples/city.jpg').default}
			filter="dark"
		>
			<div className={classes.container} style={{ margin: 'auto' }}>
				<div style={{ height: window.screen.width < 600 ? 50 : 0 }}></div>
				<Grid container>
					<Grid
						item
						xs={12}
						sm={7}
						md={7}
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignContent: 'center',
						}}
					>
						<div style={{ margin: 'auto' }}>
							<h1 className={classes.title}>{data.slider.title}</h1>
							<h4>{data.slider.content}</h4>
						</div>
					</Grid>
					<Grid
						item
						xs={12}
						sm={5}
						md={5}
						className={classNames(classes.mlAuto, classes.imgMobile)}
					>
						<div
							className={classes.iframeContainer}
							style={{
								display: 'flex',
								alignContent: 'center',
								height: '100%',
							}}
						>
							<img
								src={HappyTurnip}
								style={{
									borderRadius: 10,
									maxWidth: 400,
									width: '60%',
								}}
								frameBorder="0"
								allow="encrypted-media"
								allowFullScreen=""
								title="Learnip"
							/>
						</div>
					</Grid>
					<GridItem xs={12} sm={1} md={1} />
				</Grid>
			</div>
		</Parallax>
	);
}

export default CustomParallax;
