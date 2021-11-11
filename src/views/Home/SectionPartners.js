import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import Muted from 'components/Typography/Muted.js';
import CardAvatar from 'components/Card/CardAvatar.js';

import teamsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.js';

import cardProfile1Square from 'assets/img/faces/card-profile1-square.jpg';

const useStyles = makeStyles(teamsStyle);

export default function SectionPartners({ ...rest }) {
	const classes = useStyles();
	return (
		<div className={classes.testimonials}>
			<div className={classes.container}>
				<GridContainer>
					<GridItem
						xs={12}
						sm={6}
						md={6}
						className={
							classes.mlAuto + ' ' + classes.mrAuto + ' ' + classes.textCenter
						}
					>
						<h2 className={classes.title}>Trusted By</h2>
					</GridItem>
				</GridContainer>
				<GridContainer>
					{partnersData.map((e) => (
						<GridItem xs={12} sm={3} md={3}>
							<Card testimonial plain>
								<a href="#pablo" onClick={(e) => e.preventDefault()}>
									<img
										src={e.image}
										style={{ maxHeight: 100, maxWidth: '60%' }}
										alt="..."
									/>
								</a>
								<CardBody plain>
									<h5 className={classes.cardDescription}>{e.content}</h5>
								</CardBody>
							</Card>
						</GridItem>
					))}
				</GridContainer>
			</div>
		</div>
	);
}

const partnersData = [
	{
		// content: "Don't be scared of the truth because we need to restart the human foundation in truth...",
		image: '/partners/bref.png',
	},
	{
		// content: "I speak yell scream directly at the old guard on behalf of the future. I gotta say at that time I’d like to meet Kanye I speak yell scream directly at the old guard on behalf of the future.",
		image: '/partners/dacka.png',
	},
	{
		// content: "Don't be scared of the truth because we need to restart the human foundation in truth...",
		image: '/partners/demarke.png',
	},
	{
		// content: "I speak yell scream directly at the old guard on behalf of the future. I gotta say at that time I’d like to meet Kanye I speak yell scream directly at the old guard on behalf of the future.",
		image: '/partners/fayn.png',
	},
	{
		// content: "Don't be scared of the truth because we need to restart the human foundation in truth...",
		image: '/partners/fikritakip.png',
	},
	{
		// content: "I speak yell scream directly at the old guard on behalf of the future. I gotta say at that time I’d like to meet Kanye I speak yell scream directly at the old guard on behalf of the future.",
		image: '/partners/ftu.png',
	},
	{
		// content: "I speak yell scream directly at the old guard on behalf of the future. I gotta say at that time I’d like to meet Kanye I speak yell scream directly at the old guard on behalf of the future.",
		image: '/partners/fugamundi.png',
	},
	{
		// content: "I speak yell scream directly at the old guard on behalf of the future. I gotta say at that time I’d like to meet Kanye I speak yell scream directly at the old guard on behalf of the future.",
		image: '/partners/iklimgazetesi.png',
	},
	{
		// content: "I speak yell scream directly at the old guard on behalf of the future. I gotta say at that time I’d like to meet Kanye I speak yell scream directly at the old guard on behalf of the future.",
		image: '/partners/macerita.png',
	},
	{
		// content: "I speak yell scream directly at the old guard on behalf of the future. I gotta say at that time I’d like to meet Kanye I speak yell scream directly at the old guard on behalf of the future.",
		image: '/partners/marketingturkiye.png',
	},
	{
		// content: "I speak yell scream directly at the old guard on behalf of the future. I gotta say at that time I’d like to meet Kanye I speak yell scream directly at the old guard on behalf of the future.",
		image: '/partners/oksijen.png',
	},
	{
		// content: "I speak yell scream directly at the old guard on behalf of the future. I gotta say at that time I’d like to meet Kanye I speak yell scream directly at the old guard on behalf of the future.",
		image: '/partners/petroturk-balkan.png',
	},
	{
		// content: "I speak yell scream directly at the old guard on behalf of the future. I gotta say at that time I’d like to meet Kanye I speak yell scream directly at the old guard on behalf of the future.",
		image: '/partners/tegv.png',
	},
	{
		// content: "I speak yell scream directly at the old guard on behalf of the future. I gotta say at that time I’d like to meet Kanye I speak yell scream directly at the old guard on behalf of the future.",
		image: '/partners/wiser.png',
	},
	{
		// content: "I speak yell scream directly at the old guard on behalf of the future. I gotta say at that time I’d like to meet Kanye I speak yell scream directly at the old guard on behalf of the future.",
		image: '/partners/referandom.png',
	},
];
