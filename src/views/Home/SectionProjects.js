/* eslint-disable */
import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import FormatPaint from '@material-ui/icons/FormatPaint';
import Code from '@material-ui/icons/Code';
import Dashboard from '@material-ui/icons/Dashboard';
import Timeline from '@material-ui/icons/Timeline';
import Group from '@material-ui/icons/Group';
import Hidden from '@material-ui/core/Hidden';
// core components
import { Grid } from '@material-ui/core';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import InfoArea from 'components/InfoArea/InfoArea.js';
import Badge from 'components/Badge/Badge.js';

import projectsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.js';
import Rellax from 'rellax';
import cardProject2 from 'assets/img/examples/card-project2.jpg';
import cardProject5 from 'assets/img/examples/card-project5.jpg';
import ResultMockDesktop from 'assets/learnip/result_mock.svg';
import ResultMockMobile from 'assets/learnip/results_mockup_mobile.svg';
import TurnipBaby from 'assets/learnip/turnip_baby.svg';
import WaterSearch from 'assets/learnip/water_search.svg';
import WaterFlags from 'assets/learnip/water_with_flags.svg';
import RocketTurnip from 'assets/learnip/rocket_turnip.svg';
import TurnipCool from 'assets/learnip/turnip_cool.svg';
import FallingTurnip from 'assets/learnip/turnip_crying.svg';
import HalfBrowserMockup from 'assets/learnip/half_browser_mockup.svg';
import WaterDroplet from 'assets/learnip/water_droplet.svg';
import WaterStop from 'assets/learnip/water_stop.svg';
import Cloud from 'assets/learnip/cloud.svg';
const useStyles = makeStyles(projectsStyle);
import './SectionProjects.css';
export default function SectionProjects({ ...rest }) {
	const classes = useStyles();
	window.onload = function () {
		var rellax = new Rellax('.rellax', {
			breakpoints: [576, 768, 1201],
		});
	};
	return (
		<div className="cd-section" {...rest}>
			<div className={classes.projects + ' ' + classes.projects4}>
				<div className={classes.container}>
					<GridContainer>
						<GridItem style={{ textAlign: 'center' }} xs={12} sm={12} md={12}>
							<h2>
								<b>Personalize</b>
							</h2>
						</GridItem>
						<Grid
							container
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
							}}
						>
							<GridItem xs={12} sm={12} md={6} style={{ margin: 'auto' }}>
								<InfoArea
									style={{ maxWidth: 'none' }}
									className={classes.info4}
									isIconSVG
									iconWidth="70px"
									iconHeight="70px"
									icon={RocketTurnip}
									title="Study at Your Own Pace"
									description="Set the pace you want to learn and keep it."
									iconColor="rose"
								/>
								<InfoArea
									className={classes.info4}
									isIconSVG
									iconWidth="70px"
									iconHeight="70px"
									iconOnRight
									icon={WaterFlags}
									title="Choose Languages"
									description="Choose from many languages provided (More to come) and start learning right away. Become a turnipster to practice multiple languages at once."
									iconColor="success"
								/>
								<InfoArea
									className={classes.info4}
									isIconSVG
									title="Grow Your Turnip"
									iconWidth="70px"
									iconHeight="70px"
									icon={TurnipBaby}
									description="Every creator has their own unique style. After a few articles, our models adapt to your writing style by using the latest advancements in AI. Yes, AI is going to write stories like you do."
									icon={TurnipBaby}
									iconColor="info"
								/>
							</GridItem>
							<GridItem
								xs={12}
								sm={12}
								md={5}
								style={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
								}}
							>
								<img className="mockup-img" src={HalfBrowserMockup} />
							</GridItem>
						</Grid>
					</GridContainer>

					<hr />
					<img
						className="rellax lower-cloud-turnip"
						data-rellax-speed="-3"
						data-rellax-xs-speed="-2"
						src={Cloud}
						data-rellax-zindex="-1"
					/>
					<img
						className="rellax falling-turnip"
						data-rellax-speed="-5"
						data-rellax-xs-speed="-4"
						src={FallingTurnip}
					/>

					<img
						className="rellax higher-cloud-turnip"
						data-rellax-speed="-2"
						data-rellax-xs-speed="-2.5"
						src={Cloud}
					/>

					<GridContainer>
						<GridItem xs={12} sm={12} md={12} style={{ textAlign: 'center' }}>
							<h2>
								<b>Play</b>
							</h2>
						</GridItem>
						<Grid
							container
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
							}}
						>
							<Hidden smDown implementation="js">
								<GridItem
									xs={12}
									sm={12}
									md={5}
									style={{ display: 'flex', flexDirection: 'column' }}
								>
									<img
										src={ResultMockMobile}
										style={{
											marginTop: window.innerWidth > 1250 ? 130 : 0,
											margin: 'auto',

											width: '100%',
										}}
										className="mockup-img"
										alt="Learnip Results Mockup Image"
									/>
								</GridItem>
							</Hidden>
							<GridItem xs={12} sm={12} md={7} style={{ margin: 'auto' }}>
								<InfoArea
									className={classes.info4}
									title="Find Your Droplets All Over The Internet"
									isIconSVG
									iconWidth="70px"
									iconHeight="70px"
									description="Using truly digital marketing by simply describing the product in a sentence and with some keywords, enabled by Novus AI technologies."
									icon={WaterSearch}
									iconColor="info"
								/>
								<InfoArea
									className={classes.info4}
									title="Translate From All Languages"
									isIconSVG
									iconWidth="70px"
									iconHeight="70px"
									iconOnRight
									description="In seconds related to the firm's field. Just input your area of interests and wait for proposed outlines or new ideas. Variety of blog contents related with your input is right there in seconds. "
									icon={TurnipCool}
									iconColor="primary"
								/>
								<InfoArea
									className={classes.info4}
									title="Disable If You Feel Like It"
									isIconSVG
									iconWidth="70px"
									iconHeight="70px"
									description="We help content creators to increase their precision by making relevant information on the web instantly accessible through suggesting informative paragraphs while they write.
"
									icon={WaterStop}
									iconColor="danger"
								/>
								<Hidden mdUp implementation="css" className={classes.hidden}>
									<GridItem
										xs={12}
										sm={12}
										md={5}
										style={{ display: 'flex', flexDirection: 'column' }}
									>
										<img
											src={ResultMockMobile}
											style={{
												marginTop: window.innerWidth > 1250 ? 130 : 0,
												margin: 'auto',
												width: '100%',
											}}
											className="mockup-img"
											alt="Novus Writer Product Screenshot"
										/>
									</GridItem>
								</Hidden>
							</GridItem>
						</Grid>

						<img
							className="rellax water-cloud"
							data-rellax-speed="2"
							data-rellax-xs-speed="1"
							src={Cloud}
						/>

						<img
							className="rellax super-water"
							data-rellax-speed="10"
							data-rellax-xs-speed="7"
							src={WaterDroplet}
							data-rellax-zindex="1"
						/>
					</GridContainer>
				</div>
			</div>
		</div>
	);
}
