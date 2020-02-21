import React from "react";
import classes from "./About.module.scss";
import { aboutPageText } from "../../../util/util";

const About = props => {
	let textRendered = aboutPageText.map((paragraph, index) => {
		return (
			<p className={classes.About__text_p} key={index}>
				{paragraph}
			</p>
		);
	});
	return <div className={classes.About}>{textRendered}</div>;
};

export default About;
