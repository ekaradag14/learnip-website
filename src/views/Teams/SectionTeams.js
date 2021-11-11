import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import Muted from "components/Typography/Muted.js";

import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.js";
import ahmetGulek from "assets/img/examples/ahmet-gulek.jpeg";
import ataUslu from "assets/img/examples/ata-uslu.jpg";
import bedirhanCaldir from "assets/img/examples/bedirhancaldir.jpeg";
import berathanimre from "assets/img/examples/berathanimre.jpeg";
import daghancarlosakkar from "assets/img/examples/daghancarlosakkar.jpg";
import ekinAkyurek from "assets/img/examples/ekinakyurek.jpg";
import egehanAsad from "assets/img/examples/egehanasad.jpeg";
import erencanKaradag from "assets/img/examples/erencan-karadag.jpeg";
import yorukcanerbay from "assets/img/examples/yorukcanerbay.jpeg";
import vorgaCan from "assets/img/examples/vorgacan.png";

const useStyles = makeStyles(teamsStyle);

export default function SectionTeams({ ...rest }) {
	const classes = useStyles();
	return (
		<div className="cd-section" {...rest}>
			<div className={classes.team}>
				<div className={classes.container}>
					<GridContainer>
						<GridItem
							xs={12}
							sm={8}
							md={8}
							className={
								classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
							}
						>
							<h2 className={classes.title}>The Team</h2>
							<h5 className={classes.description}>
								Meet Novus.
							</h5>
						</GridItem>
					</GridContainer>
					<GridContainer>
						{
							teamsData.map((people, index) =>
								<GridItem xs={12} sm={6} md={6}>
									<Card profile plain className={classes.card3}>
										<GridContainer>
											<GridItem xs={12} sm={5} md={5}>
												<CardHeader image plain>
													<a href="#pablo" onClick={(e) => e.preventDefault()}>
														<img src={people.image} alt="..." />
													</a>
													<div
														className={classes.coloredShadow}
														style={{
															backgroundImage: `url(${people.image})`,
															opacity: "1",
														}}
													/>
												</CardHeader>
											</GridItem>
											<GridItem xs={12} sm={7} md={7}>
												<CardBody plain>
													<h4 className={classes.cardTitle}>{people.name}</h4>
													<Muted>
														<h6 className={classes.cardCategory}>
															{people.title}
														</h6>
													</Muted>
													<p className={classes.description}>
														{people.content}
													</p>
												</CardBody>
												<CardFooter profile plain>
													{
														people.social.map(social =>
															<Button justIcon simple target="_blank" component="a" color={social.color} href={social.href}>
																<i className={`fab ${social.icon}`} />
															</Button>
														)
													}
												</CardFooter>
											</GridItem>
										</GridContainer>
									</Card>
								</GridItem>
							)
						}
					</GridContainer>
				</div>
			</div>
		</div>
	);
}


const teamsData = [
	{
		name: "Egehan Asad",
		title: "Co-Founder, CEO ",
		content: "Rıza Egehan Asad majored in Chemical and Biological Engineering at Koç University. He worked at Bayer, L’Oréal, Tupras and Microsoft in Artificial Intelligence, digital marketing and innovation domains. Before founding Novus, he was chosen as CEO for one month at the Adecco Group.",
		image: egehanAsad,
		social: [
			// {
			// 	color: "linkedin",
			// 	icon: "fa-linkedin-in",
			// 	href: "https://linkedin.com",
			// },
			// {
			// 	color: "facebook",
			// 	icon: "fa-facebook-square",
			// 	href: "https://facebook.com",
			// },
			// {
			// 	color: "dribbble",
			// 	icon: "fa-dribbble",
			// 	href: "https://dribbble.com",
			// },
			// {
			// 	color: "google",
			// 	icon: "fa-google",
			// 	href: "https://google.com",
			// }
		]
	},
	{
		name: "Vorga Can",
		title: "Co-Founder, CEO",
		content: "Vorga Can graduated from Koç University with a double major in International Relations and Sociology. He produced content for publications such as Forbes and Esquire. Later on, he worked as an editorial director in various media startups and as a communication consultant.",
		image: vorgaCan,
		social: [

		]
	},
	{
		name: "Ata A. Uslu",
		title: "Co-Founder, CTO",
		content: "Ata Uslu double-majored in Computer Science and Electrical Engineering, and minored in International Relations at Koç University. He also studied at TU Munich, interned at BMW Group, and graduated with a Magna Cum Laude. He worked as the Lead of IT Security and Governance at Turkish Airlines and provided internal consulting for all IT projects in terms of cybersecurity, privacy, and regulation compliance. He is now a PhD student in Network Science at Northeastern University in Boston.",
		image: ataUslu,
		social: [

		]
	},
	{
		name: "Ahmet Gülek",
		title: "CFO",
		content: "Ahmet Gülek graduated from Galatasaray High School in 2013, and Koç University Economics and Mathematics Departments in 2017 with top rank. He also studied at Northwestern and Sciences Po universities. He graduated from Koç University's Economics Master's Program with top rank. He is now a PhD candidate in Economics at the Massachusetts Institute of Technology in Boston",
		image: ahmetGulek,
		social: [

		]
		
	},
		{
		name: "Ekin Akyürek",
		title: "Machine Learning Lead",
		content: "Ekin Akyürek double-majored at Koç University in Electrical Engineering and Physics. He studies AI and machine learning as a PhD student at MIT in Boston. He is leading the machine learning operations of Novus and conducting research.",
		image: ekinAkyurek,
		social: [

		]
		
	},
			{
		name: "Erencan Karadağ",
		title: "Products Lead",
		content: "Erencan Karadağ studied Mechanical Engineering at Koç University. After college, he founded a health-tech startup and worked with several companies such as Bayer Ph. and Eczacıbaşı. Later on, he joined PortalGrup as the head of the International Projects Team and worked with global brands to determine their digital strategies. He is now leading the Products team at Novus.",
		image: erencanKaradag,
		social: [

		]
		
	},
		{
		name: "Dağhan Carlos Akkar",
		title: "Economist",
		content: "Dağhan Akkar double-majored in Economics and Mathematics at Koç University, graduating as the valedictorian. He then obtained an MPhil in Economics with Distinction at the University of Oxford. He is now pursuing his doctoral studies in Economics at Nuffield College, Oxford. He is an expert in microeconomic theory, particularly in optimal auction and mechanism design. He helps Novus build an efficient online marketplace by applying mechanism design insights from economic theory to our business. ",
		image: daghancarlosakkar,
		social: [

		]
		
	},
		{
		name: "Yörükcan Erbay",
		title: "Chief Sustainability Officer",
		content: "Yörükcan Erbay graduated from Koç University’s Chemistry and Biological Engineering program as the valedictorian and completed his master's degree in Sustainable Energy Futures at Imperial College London. He is now a sustainable energy consultant in London on industrial decarbonisation, negative emission technologies and carbon capture/storage technologies.",
		image: yorukcanerbay,
		social: [

		]
		
	},
		{
		name: "Bedirhan Çaldır",
		title: "Senior Machine Learning Engineer",
		content: "Bedirhan Çaldır is a MSc candidate of Statistical Machine Learning at Boğaziçi University in Istanbul. He double-majored in Molecular Biology and Genetics and Computer Science at Koç University, and graduated as the valedictorian. His curiosity and expertise is in machine learning, bioinformatics, Artificial General Intelligence, and robotics. ",
		image: bedirhanCaldir,
		social: [

		]
		
	},
		{
		name: "Berathan İmre",
		title: "Data Science Lead",
		content: "After studying Computer Engineering at Koç University, Berathan Imre obtained his master’s degree from the University of Southampton in Data Science with honors. Besides companies such as EY and Yapı Kredi, he also played important roles in several initiatives. Now he uses his skills in data science at Novus to analyse content creators’ and users’ data. ",
		image: berathanimre,
		social: [

		]
		
	},


]