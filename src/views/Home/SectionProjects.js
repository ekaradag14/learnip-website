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

// core components
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
import Sun from 'assets/learnip/sun.svg';
import FallingTurnip from 'assets/learnip/turnip_crying.svg';
import HalfBrowserMockup from 'assets/learnip/half_browser_mockup.svg';
import WaterDroplet from 'assets/learnip/water_droplet.svg';
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
						<GridItem
							style={{ textAlign: 'center' }}
							xs={12}
							sm={12}
							md={12}
							className={classes.mlAuto}
						>
							<h2>
								<b>Personalize</b>
							</h2>
						</GridItem>
						<GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
							<InfoArea
								className={classes.info4}
								title="Choose Languages"
								description="Choose from many languages provided (More to come) and start learning right away. Become a turnipster to practice multiple languages at once."
								icon={Timeline}
								iconColor="rose"
							/>
							<InfoArea
								className={classes.info4}
								title="Factual"
								description="AI cannot outperform humans for fact-checking. Yet. Check your facts with our novel Novus Crawler. Arguments in your article like quotes and metrics are automatically searched in trusted sources to un cover the truth. Then you get to choose what is informative about your content."
								icon={Code}
								iconColor="success"
							/>
							<InfoArea
								className={classes.info4}
								title="Personal"
								description="Every creator has their own unique style. After a few articles, our models adapt to your writing style by using the latest advancements in AI. Yes, AI is going to write stories like you do."
								icon={Group}
								iconColor="info"
							/>
						</GridItem>
						<GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
							<img
								src={HalfBrowserMockup}
								style={{
									height: 500,
									marginTop: window.innerWidth > 550 ? 130 : 0,
									borderRadius: 15,
								}}
							/>
						</GridItem>
					</GridContainer>
					<hr />
					<img
						className="rellax"
						data-rellax-speed="7"
						src={Cloud}
						style={{
							width: '10%',

							maxWidth: 150,
							marginLeft: 'auto',
							right: '3%',

							position: 'absolute',
						}}
						data-rellax-zindex="-1"
					/>
					<img
						className="rellax"
						data-rellax-speed="4"
						src={FallingTurnip}
						style={{
							width: '13%',
							maxWidth: 200,
							marginLeft: 'auto',
							marginTop: -200,
							right: '10%',
							position: 'absolute',
						}}
					/>

					<img
						className="rellax"
						data-rellax-speed="10"
						src={Cloud}
						style={{
							width: '13%',
							maxWidth: 200,
							marginLeft: 'auto',
							right: '20%',
							marginTop: 400,
							position: 'absolute',
						}}
					/>

					<GridContainer>
						<GridItem
							xs={12}
							sm={12}
							md={12}
							style={{ textAlign: 'center' }}
							className={classes.mlAuto}
						>
							<h2>Communication</h2>
						</GridItem>
						<GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
							<img
								src={Communication}
								style={{
									height: 300,
									marginTop: window.innerWidth > 550 ? 130 : 0,
									borderRadius: 5,
									marginLeft: window.innerWidth > 550 ? -100 : 0,
								}}
								alt="Novus Writer Product Screenshot"
							/>
						</GridItem>
						<GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
							<InfoArea
								className={classes.info4}
								title="Develop Marketing Campaigns"
								description="Using truly digital marketing by simply describing the product in a sentence and with some keywords, enabled by Novus AI technologies."
								icon={FormatPaint}
								iconColor="info"
							/>
							<InfoArea
								className={classes.info4}
								title="Create Novel Blog Contents"
								description="In seconds related to the firm's field. Just input your area of interests and wait for proposed outlines or new ideas. Variety of blog contents related with your input is right there in seconds. "
								icon={Code}
								iconColor="primary"
							/>
							<InfoArea
								className={classes.info4}
								title="Benefit From Resources Which Are Directly Relevant To Your Content"
								description="We help content creators to increase their precision by making relevant information on the web instantly accessible through suggesting informative paragraphs while they write.
"
								icon={Dashboard}
								iconColor="danger"
							/>
						</GridItem>

						<img
							className="rellax"
							data-rellax-speed="2"
							src={Cloud}
							style={{
								width: '10%',

								maxWidth: 150,
								marginLeft: 'auto',
								left: '12.5%',
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
								width: '13%',
								maxWidth: 200,
								marginLeft: 'auto',
								marginTop: 1500,
								left: '3%',
								position: 'absolute',
							}}
						/>
					</GridContainer>
				</div>
			</div>
		</div>
	);
}
