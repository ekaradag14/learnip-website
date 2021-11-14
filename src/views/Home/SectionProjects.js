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
import writingAiImage from 'assets/novus/writingInTheAgeOfAI.png';
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
import Communication from 'assets/novus/Communication.png';
const useStyles = makeStyles(projectsStyle);

export default function SectionProjects({ ...rest }) {
	const classes = useStyles();
	window.onload = function () {
		var rellax = new Rellax('.rellax');
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
								<img
									src={HalfBrowserMockup}
									style={{
										borderRadius: 15,
										padding: 40,
									}}
								/>
							</GridItem>
						</Grid>
					</GridContainer>
					<hr />
					<img
						className="rellax"
						data-rellax-speed="7"
						src={Cloud}
						style={{
							width: '8%',
							maxWidth: 150,
							minWidth: 75,
							marginLeft: 'auto',
							right: '0.6%',

							position: 'absolute',
						}}
						data-rellax-zindex="-1"
					/>
					<img
						className="rellax"
						data-rellax-speed="4"
						src={FallingTurnip}
						style={{
							width: '10%',
							maxWidth: 200,
							minWidth: 100,
							marginLeft: 'auto',
							marginTop: -200,
							right: '5%',
							position: 'absolute',
						}}
					/>

					<img
						className="rellax"
						data-rellax-speed="10"
						src={Cloud}
						style={{
							width: '10%',
							maxWidth: 200,
							minWidth: 100,
							marginLeft: 'auto',
							right: '11%',
							marginTop: 400,
							position: 'absolute',
						}}
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
											borderRadius: 5,
											padding: 40,
										}}
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
												borderRadius: 5,
												padding: 40,
											}}
											alt="Novus Writer Product Screenshot"
										/>
									</GridItem>
								</Hidden>
							</GridItem>
						</Grid>
						<img
							className="rellax"
							data-rellax-speed="2"
							src={Cloud}
							style={{
								width: '7%',
								maxWidth: 150,
								minWidth: 75,
								marginLeft: 'auto',
								left: '3%',
								marginTop: 400,
								position: 'absolute',
							}}
							data-rellax-zindex="-1"
						/>
						<img
							className="rellax"
							data-rellax-speed="10"
							src={WaterDroplet}
							style={{
								width: '10%',
								maxWidth: 200,
								minWidth: 100,
								marginLeft: 'auto',
								marginTop: 1500,
								left: '5%',
								position: 'absolute',
							}}
						/>
					</GridContainer>
				</div>
			</div>
		</div>
	);
}
