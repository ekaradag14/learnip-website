import React from 'react';
import classNames from 'classnames';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Parallax from 'components/Parallax/Parallax.js';
import ShowcaseGif from 'assets/novus/main-product-showcase.gif';
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
			<div className={classes.container}>
				<div style={{ height: window.screen.width < 400 ? 150 : 0 }}></div>
				<GridContainer>
					<GridItem xs={12} sm={5} md={5}>
						<h1 className={classes.title}>{data.slider.title}</h1>
						<h4>{data.slider.content}</h4>
					</GridItem>
					<GridItem
						xs={12}
						sm={6}
						md={6}
						className={classNames(classes.mlAuto, classes.imgMobile)}
					>
						<div className={classes.iframeContainer}>
							<img
								src={ShowcaseGif}
								style={{ borderRadius: 10 }}
								frameBorder="0"
								allow="encrypted-media"
								allowFullScreen=""
								title="Novus Writer"
							/>
						</div>
					</GridItem>
					<GridItem xs={12} sm={1} md={1} />
				</GridContainer>
			</div>
		</Parallax>
	);
}

export default CustomParallax;
