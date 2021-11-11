import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// library used for cool animations
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

import contentStyle from "assets/jss/material-kit-pro-react/views/presentationSections/contentStyle.js";
// images
import presentationiPad from "assets/img/assets-for-demo/presentationViewSectionComponent/presentation-ipad.jpg";
import presentationiPadComments from "assets/img/assets-for-demo/presentationViewSectionComponent/ipad-comments.jpg";
import presentationiPadTable from "assets/img/assets-for-demo/presentationViewSectionComponent/ipad-table.jpg";

const useStyles = makeStyles(contentStyle);

export default function SectionContent() {
	const classes = useStyles();
	return (
		<div className={classes.section}>
			<div className={classes.container}>
				<GridContainer justify="center">
					<GridItem md={10}>
						<div className={classes.sectionDescription}>
							<h3 className={classes.title}>Creating the Communication Tool Of the Future </h3>
							<h6 className={classes.description}>
								For Areas that Need More Space
							</h6>
							<h5 className={classes.description}>
	As Novus, we believe in communication shaped by technology. In the age of artificial intelligence, communication will become a more efficient, partly autonomous process which provides better output day by day. At this point, Natural language processing (NLP) is taking a step towards taking the relatives of communication into the next generation with understanding what is needed in the future perspective. Future generation requires it to be faster, more efficient and higher quality in terms of any communication medium such as media, marketing and research. All those milestones can be achieved by penetrating into the future by using a human touch push. Even though the ultimate goal for better communication in each field is creating autonomous and highly intelligent processes, we are certain that the semi-hybrid model is what is a significant element between now and the future. Thus, Novus provides the cutting edge technology in the same batch with prompt related current technology. 

							</h5>
						</div>
					</GridItem>
				{false &&	<GridItem md={7} className={classes.mlAuto}>
						<div className={classes.imageContainer} style={{marginTop: window.innerWidth > 550 ? 220 :0  }}>
							<div className={classes.animeAreaImg}>
								<ScrollAnimation animateIn="animate__fadeInUp">
									<img
										src={presentationiPadComments}
										alt="iPad comments"
										className={classes.areaImg}
									/>
								</ScrollAnimation>
							</div>
							<div className={classes.animeInfoImg}>
								<ScrollAnimation animateIn="animate__fadeInUp">
									<img
										src={presentationiPadTable}
										alt="iPad table"
										className={classes.infoImg}
									/>
								</ScrollAnimation>
							</div>
							<img
								className={classes.ipadImg}
								src={presentationiPad}
								alt="iPad"
							/>
						</div>
					</GridItem>
				}</GridContainer>
			</div>
		</div>
	);
}
