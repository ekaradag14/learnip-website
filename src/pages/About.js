import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
// sections for this page
import Header from 'views/Global/Header.js';
import Footer from 'views/Global/Footer.js';
import teamsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.js';

// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';

const useStyles = makeStyles(teamsStyle);

function About({ ...rest }) {
	const classes = useStyles();
	return (
		<div>
			<Header />
			<div className={classNames(classes.main, classes.mainRaised)}>
				<div className="cd-section" {...rest}>
					<div className={classes.team}>
						<div className={classes.container}>
							<GridContainer>
								<GridItem
									xs={12}
									sm={8}
									md={8}
									className={
										classes.mlAuto +
										' ' +
										classes.mrAuto +
										' ' +
										classes.textCenter
									}
								>
									<h2 className={classes.title}>HAKKIMIZDA</h2>
									<h5
										className={classes.description}
										style={{ fontWeight: 400, color: '#555' }}
									>
										Novus; gündem, teknoloji, iş dünyası, yeşil ve spor
										dikeylerinde gelişmeler derleyen bir yeni medya girişimidir.
										Uzman yazarlarıyla erişilmesi güç akademik ve sektörel
										bilginin demokratikleşmesi amacıyla yayıncılık yapar.
									</h5>
								</GridItem>
							</GridContainer>
							<GridContainer></GridContainer>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default About;
